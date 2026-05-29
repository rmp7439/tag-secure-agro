"use client";

import Reveal from "@/components/animations/Reveal";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Stats() {
  return (
    <section className="px-6 md:px-10 py-32 bg-white">
      <Reveal>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a5c3e] mb-6">
              Operational Strength
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1f3b2d]">
              Built with discipline, infrastructure, and long-term operational
              vision.
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-4 gap-8 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.7 }}
              className="border-t border-black/10 pt-8 hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="text-5xl font-bold text-[#1f3b2d]">20+</h3>

              <p className="mt-4 text-black/70 leading-7">
                Years of leadership and business management experience.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.7 }}
              className="border-t border-black/10 pt-8 hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="text-5xl font-bold text-[#1f3b2d]">100%</h3>

              <p className="mt-4 text-black/70 leading-7">
                Commitment to hygienic and quality-focused processing systems.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.7 }}
              className="border-t border-black/10 pt-8 hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="text-5xl font-bold text-[#1f3b2d]">Global</h3>

              <p className="mt-4 text-black/70 leading-7">
                Market-focused operations designed for domestic and export
                supply.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.7 }}
              className="border-t border-black/10 pt-8 hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="text-5xl font-bold text-[#1f3b2d]">Premium</h3>

              <p className="mt-4 text-black/70 leading-7">
                Product standards aligned with consistency, trust, and
                reliability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
