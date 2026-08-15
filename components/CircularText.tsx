"use client";

import { motion } from "framer-motion";

interface CircularTextProps {
  text: string;
  radius?: number;
  fontSize?: string;
  className?: string;
}

export default function CircularText({ text, radius = 60, fontSize = "14px", className = "" }: CircularTextProps) {
  // Repeating text to ensure it fills the circle
  const repeatedText = `${text} • ${text} • ${text} • `.toUpperCase();

  return (
    <div className={`relative ${className}`} style={{ width: radius * 2, height: radius * 2 }}>
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <path
          id="circlePath"
          d="M 100, 100 m -80, 0 a 80, 80 0 1, 1 160, 0 a 80, 80 0 1, 1 -160, 0"
          fill="transparent"
        />
        <text style={{ fontSize, fontWeight: "bold", letterSpacing: "2px" }} className="fill-primary italic">
          <textPath href="#circlePath" startOffset="0">
            {repeatedText}
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
}
