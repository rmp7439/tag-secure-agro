"use client";

import Reveal from "@/components/animations/Reveal";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Premium Quality Processing",
    description:
      "Strict quality control measures are maintained across every stage of processing to ensure superior cashew kernels.",
  },
  {
    title: "Experienced Leadership",
    description:
      "Backed by promoters with over two decades of successful business management experience and operational discipline.",
  },
  {
    title: "Modern Infrastructure",
    description:
      "Our processing facility is supported by modern machinery and efficient systems designed for consistency and reliability.",
  },
  {
    title: "Hygienic Standards",
    description:
      "Clean manufacturing practices and quality-focused handling procedures ensure safe and premium-quality products.",
  },
  {
    title: "Reliable Supply Chain",
    description:
      "Efficient procurement, production planning, and logistics support dependable supply and timely deliveries.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We focus on building long-term business relationships through trust, consistency, and responsive service.",
  },
];

export default function WhyChoose() {
  return (
    <section className="px-6 md:px-10 py-32 bg-[#f5f1e8]">
      <Reveal>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a5c3e] mb-6">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1f3b2d]">
              Why businesses choose Tagsecure Agro.
            </h2>

            <p className="mt-8 text-lg text-black/70 leading-8 max-w-3xl">
              Built on quality, professionalism, operational discipline, and a
              commitment to long-term customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="bg-white p-10 rounded-[2rem] border border-black/5 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="text-sm text-[#7a5c3e] mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-medium text-[#1f3b2d] mb-4">
                  {reason.title}
                </h3>

                <p className="text-black/70 leading-8">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}