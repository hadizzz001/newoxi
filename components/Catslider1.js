'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ImageSection = () => {
  const router = useRouter();

  const handleClick = (cat) => {
    router.push(`/search?cat=${cat}`);
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        height: "100%",
      }}
    >
      {/* Row 1 */}
      <div
        onClick={() => handleClick("Orthopedics")}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
          aspectRatio: "1 / 1",
          width: "100%",
          maxWidth: "400px",
          cursor: "pointer",
        }}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src="https://res.cloudinary.com/dusvquybw/image/upload/v1756141120/top-view-tensiometer-checking-blood-pressure_ihzwe3.webp"
          alt="Doctor taking care of child"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)" }} />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            color: "white",
            padding: "6px 10px",
            borderRadius: "5px",
          }}
        >
          Orthopedics
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ display: "flex", gap: "20px" }}>
        {[
          {
            src: "https://res.cloudinary.com/dusvquybw/image/upload/v1756141120/side-view-adult-holding-nebulizer_n8o12b.webp",
            alt: "Holding nebulizer",
            title: "Oxygen",
          },
          {
            src: "https://res.cloudinary.com/dusvquybw/image/upload/v1756141120/medical-equipment_i5bgqz.webp",
            alt: "Medical equipment",
            title: "Pharmacy",
          },
        ].map((img, i) => (
          <div
            key={i}
            onClick={() => handleClick(img.title)}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              aspectRatio: "1 / 1",
              flex: 1,
              cursor: "pointer",
            }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)" }} />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                color: "white",
                padding: "6px 10px",
                borderRadius: "5px",
              }}
            >
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Row 3 */}
      <div
        onClick={() => handleClick("E.M.S")}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
          aspectRatio: "16 / 9",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src="https://res.cloudinary.com/dusvquybw/image/upload/v1756141120/doctor-taking-care-afro-american-child_aboo87.webp"
          alt="Blood pressure check"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)" }} />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            color: "white",
            padding: "6px 10px",
            borderRadius: "5px",
          }}
        >
          E.M.S
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
