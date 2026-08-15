"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  className?: string;
}

export default function Marquee({ text, className = "" }: MarqueeProps) {
  // Repeating the text to ensure it covers the screen and loops smoothly
  const repeatedText = Array(10).fill(`${text} ✦ `).join("");

  return (
    <div className={`w-full overflow-hidden bg-dark-accent py-4 whitespace-nowrap ${className}`}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block"
      >
        <span className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase">
          {repeatedText}
        </span>
        <span className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
