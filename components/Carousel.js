"use client";

import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://res.cloudinary.com/dusvquybw/image/upload/v1755886943/ban1_uam6ht.webp",
    title: "Hot Sale",
  },
  {
    img: "https://res.cloudinary.com/dusvquybw/image/upload/v1755886943/top-view-medical-examination-tools-standing-table-empty-modern-doctor-office-ready-health-care-consultation-hospital-workplace-equipped-with-professional-instruments-medicine-support_pvtkqn.webp",
    title: "New Arrivals",
  },
  {
    img: "https://res.cloudinary.com/dusvquybw/image/upload/v1755886943/ban1_uam6ht.webp",
    title: "Best Offers",
  },
];

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(null); // start with null (nothing visible)
  const [firstLoad, setFirstLoad] = useState(true);

  // Initial load with 1s delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
      setFirstLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (currentIndex === null) return; // skip until first slide appears
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-100 animate-zoomFade" : "opacity-0"}
          `}
        />
      ))}

      {/* Black Overlay with 30% opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 pointer-events-none"></div>

      {/* Overlay Content (Bottom) */}
      {currentIndex !== null && (
        <div className="absolute bottom-16 left-8 flex flex-col items-start text-white z-10">
          <h3
            key={slides[currentIndex].title + currentIndex} // retriggers each slide
            className="text-5xl font-bold uppercase animate-titlePopup"
          >
            {slides[currentIndex].title}
          </h3>

          <a
            href="/shop"
            key={`btn-${currentIndex}`} // force re-render for fade
            className="mt-4   rounded-full shadow-md hover:bg-gray-200 transition-opacity duration-500 animate-btnFade mybanbut"
          >
            Shop Now!
          </a>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        /* Image Zoom OUT */
        @keyframes zoomFade {
          0% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-zoomFade {
          animation: zoomFade 1s ease-in-out forwards;
        }

        /* Title Popup (bottom → up) */
        @keyframes titlePopup {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-titlePopup {
          animation: titlePopup 0.8s ease-out forwards;
        }

        /* Button Fade */
        @keyframes btnFade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-btnFade {
          animation: btnFade 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MyCarousel;
