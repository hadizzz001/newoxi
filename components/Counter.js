"use client";
import { useEffect, useState, useRef } from "react";
import { animate } from "framer-motion";
import { useInView } from "framer-motion";

export default function SatisfiedCustomers() {
  const [percent, setPercent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, 100, {
      duration: 3,
      onUpdate(value) {
        setPercent(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        width: "100vw",  // full viewport width
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#d8d0bd",
          position: "relative",
          textAlign: "center",
          WebkitMaskImage:
            "linear-gradient(to bottom, white 75%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: "linear-gradient(to bottom, white 75%, transparent 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        {percent}% SATISFIED CUSTOMERS
      </h1>
    </div>
  );
}
