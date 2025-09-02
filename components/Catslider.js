'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ImageSection = () => {
  const router = useRouter();

  const handleClick = (cat) => {
    router.push(`/search?cat=${encodeURIComponent(cat)}`);
  };

  return (
    <section
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        height: "600px",
      }}
    >
      {/* First Column */}
      <div
        onClick={() => handleClick("Orthopedics")}
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
          height: "100%",
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.2)",
            pointerEvents: "none",
          }}
        />
        <div
          className="mytcathere"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            color: "white",
            padding: "6px 10px",
            borderRadius: "5px",
            pointerEvents: "none",
          }}
        >
          Orthopedics
        </div>
      </div>

      {/* Second Column */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "100%",
        }}
      >
        {/* First Row (2 images) */}
        <div style={{ display: "flex", gap: "20px", height: "270px" }}>
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
                flex: 1,
                overflow: "hidden",
                borderRadius: "10px",
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
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.2)",
                  pointerEvents: "none",
                }}
              />
              <div
                className="mytcathere"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  borderRadius: "10px",
                  pointerEvents: "none",
                }}
              >
                {img.title}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row (1 image) */}
        <div
          onClick={() => handleClick("E.M.S")}
          style={{
            position: "relative",
            flex: "0 0 270px",
            overflow: "hidden",
            borderRadius: "10px",
            height: "270px",
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
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.2)",
              pointerEvents: "none",
            }}
          />
          <div
            className="mytcathere"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              color: "white",
              padding: "6px 10px",
              borderRadius: "5px",
              pointerEvents: "none",
            }}
          >
            E.M.S
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
