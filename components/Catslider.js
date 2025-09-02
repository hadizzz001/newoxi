'use client';

import { motion } from 'framer-motion';

const ImageSection = () => {
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
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
          height: "100%",
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
        {/* Black overlay (applied to all images) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
                            backgroundColor: "rgba(0,0,0,0.2)",
            pointerEvents: "none",
          }}
        />
        <div
        className='mytcathere'
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
      title: "Oxygen", // 👈 custom title
    },
    {
      src: "https://res.cloudinary.com/dusvquybw/image/upload/v1756141120/medical-equipment_i5bgqz.webp",
      alt: "Medical equipment",
      title: "Pharmacy", // 👈 another custom title
    },
  ].map((img, i) => (
    <div
      key={i}
      style={{
        position: "relative",
        flex: 1,
        overflow: "hidden",
        borderRadius: "10px",
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
      {/* Black overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.1)",
          pointerEvents: "none",
        }}
      />
      <div
        className="mytcathere"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.2)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          style={{
            position: "relative",
            flex: "0 0 270px",
            overflow: "hidden",
            borderRadius: "10px",
            height: "270px",
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
          {/* Black overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
                               backgroundColor: "rgba(0,0,0,0.2)",
              pointerEvents: "none",
            }}
          />
          <div
          className='mytcathere'
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
            EMS
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
