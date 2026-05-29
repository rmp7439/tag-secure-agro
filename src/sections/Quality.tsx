"use client";

import Reveal from "@/components/animations/Reveal";

const qualityPoints = [
  "Strict quality control procedures",
  "Careful grading and inspection",
  "Hygienic processing practices",
  "Consistency-focused production",
  "Export-oriented standards",
  "Customer trust and satisfaction",
];

export default function Quality() {
  return (
    <section className="px-6 md:px-10 py-32 bg-white">
      <Reveal>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-20">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a5c3e] mb-6">
              Quality Commitment
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1f3b2d]">
              Quality remains at the center of every operational decision.
            </h2>

            <p className="mt-8 text-lg text-black/70 leading-8">
              Every stage of procurement, processing, grading, packaging,
              and dispatch is guided by a commitment to consistency,
              reliability, and product excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityPoints.map((point) => (
              <div
                key={point}
                className="bg-[#f8f5f1] p-10 rounded-[2rem] border border-black/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-4 h-4 rounded-full bg-[#1f3b2d] mb-6"></div>

                <h3 className="text-xl font-medium text-[#1f3b2d]">
                  {point}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}