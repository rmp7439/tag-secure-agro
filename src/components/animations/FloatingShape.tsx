"use client";

import { motion } from "framer-motion";

type FloatingShapeProps = {
  size?: string;
  className?: string;
};

export default function FloatingShape({
  size = "w-64 h-64",
  className = "",
}: FloatingShapeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -25, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute rounded-full
        bg-[#d8c3a5]/10
        blur-3xl
        ${size}
        ${className}
      `}
    />
  );
}