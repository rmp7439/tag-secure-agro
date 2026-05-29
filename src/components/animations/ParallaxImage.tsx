"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type ParallaxImageProps = {
  children: ReactNode;
};

export default function ParallaxImage({
  children,
}: ParallaxImageProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -80]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative h-full"
    >
      {children}
    </motion.div>
  );
}