"use client";

import Reveal from "@/components/animations/Reveal";
import { motion } from "framer-motion";

const workflow = [
  {
    step: "01",
    title: "Raw Cashew Procurement",
    description:
      "Carefully sourced Raw Cashew Nuts from reliable suppliers form the foundation of every batch.",
  },
  {
    step: "02",
    title: "Cleaning & Sorting",
    description:
      "Raw materials undergo systematic cleaning and sorting before entering production.",
  },
  {
    step: "03",
    title: "Steaming & Roasting",
    description:
      "Controlled processing conditions help improve shelling efficiency and kernel quality.",
  },
  {
    step: "04",
    title: "Shelling",
    description:
      "Careful shelling procedures are used to preserve kernel integrity and minimize breakage.",
  },
  {
    step: "05",
    title: "Drying",
    description:
      "Proper drying helps maintain freshness, stability, and product consistency.",
  },
  {
    step: "06",
    title: "Peeling",
    description:
      "Kernels are peeled carefully while maintaining appearance and quality standards.",
  },
  {
    step: "07",
    title: "Grading",
    description:
      "Products are graded according to size, appearance, and quality specifications.",
  },
  {
    step: "08",
    title: "Quality Inspection",
    description:
      "Every batch undergoes detailed inspection before approval for packaging.",
  },
  {
    step: "09",
    title: "Packaging",
    description:
      "Products are securely packed to preserve freshness and maintain quality.",
  },
  {
    step: "10",
    title: "Dispatch",
    description:
      "Efficient logistics systems ensure timely delivery to domestic and international customers.",
  },
];

export default function Workflow() {
  return (
    <section className="px-6 md:px-10 py-32 bg-white">
      <Reveal>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-20">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a5c3e] mb-6">
              Processing Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1f3b2d]">
              From raw cashew nuts to premium-quality kernels.
            </h2>

            <p className="mt-8 text-lg text-black/70 leading-8 max-w-3xl">
              Our processing workflow is designed to maintain hygiene,
              consistency, and quality at every stage of production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="bg-[#f8f5f1] p-10 rounded-[2rem] border border-black/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-5xl font-medium text-[#1f3b2d] mb-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-medium text-[#1f1f1f] mb-4">
                  {item.title}
                </h3>

                <p className="text-black/70 leading-8">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}