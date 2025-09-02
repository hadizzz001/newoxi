"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();


  return (
    <>
      <section
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "40px 20px",
          marginTop: "6em",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1400px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "nowrap",
          }}
          className="content-container"
        >
          {/* Image Column */}
          <div
            style={{
              flex: "1 1 50%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="content-image"
          >
            <div
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dusvquybw/image/upload/v1756827658/front-view-coronavirus-concept_vhmonm.webp')", 
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                minHeight: "700px", // smaller for mobile
              }}
            ></div>
          </div>

          {/* Text Column */}
          <div
            style={{
              flex: "1 1 50%",
              paddingLeft: "20px",
            }}
            className="content-text"
          >
            <h3 className="mynewpara">About us</h3>
            <p className="mynewpara1 mb-5 mt-5">
              Oxinab specializing in providing high-quality medical supplies and healthcare solutions.
            </p> 
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .content-container {
            flex-direction: column; /* stack columns */
          }
          .content-text, .content-image {
            width: 100% !important;
            padding-left: 0 !important;
          }
          .content-text {
            order: 2;
            margin-top: 20px;
          }
          .content-image {
            order: 1;
            min-height: 300px; /* smaller image on mobile */
          }
        }
      `}</style>
    </>
  );
}
