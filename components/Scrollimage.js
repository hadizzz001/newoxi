'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollRevealImage() {
  const ref = useRef(null);

  // Track scroll progress relative to the image container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // triggers when image enters/leaves viewport
  });

  // Gradually reveal more of the image as we scroll
  const clip = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1], // multiple steps for smoother reveal
    [
      'inset(50% 50% 50% 50%)', // initially half hidden
      'inset(35% 35% 35% 35%)',
      'inset(25% 25% 25% 25%)',
      'inset(10% 10% 10% 10%)',
      'inset(0% 0% 0% 0%)' // fully revealed
    ]
  );

  return (
    <div className="relative w-full h-[80vh] overflow-hidden" ref={ref}>
      {/* Animated container with clip-path */}
      <motion.div style={{ clipPath: clip }} className="w-full h-full">
        <img
          src="https://res.cloudinary.com/dusvquybw/image/upload/v1756827037/medical-stethoscope-white_yrndeh.webp"
          alt="Scroll Reveal"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Centered white text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="mynewparawhite text-center">
          Stay Healthy<br />Anywhere
        </h2>
      </div>
    </div>
  );
}
