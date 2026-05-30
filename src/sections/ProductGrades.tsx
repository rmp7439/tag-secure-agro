"use client";

import Reveal from "@/components/animations/Reveal";

const wholeGrades = ["W180", "W240", "W320"];
const pieceGrades = ["LWP", "SWP", "BB"];

export default function ProductGrades() {
  return (
    <section className="px-6 md:px-10 py-32 bg-white">
      <Reveal>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-20">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a5c3e] mb-6">
              Product Grades
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1f3b2d]">
              Premium cashew grades tailored for domestic and international
              markets.
            </h2>

            <p className="mt-8 text-lg text-black/70 leading-8 max-w-3xl">
              We focus on premium-quality whole kernels and cashew pieces
              processed to meet quality, consistency, and export-oriented
              requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[#f8f5f1] rounded-[2rem] p-10 hover:-translate-y-2 transition-all duration-500">
              <p className="uppercase tracking-[0.25em] text-sm text-[#7a5c3e] mb-8">
                Whole Kernels
              </p>

              <div className="space-y-6">
                {wholeGrades.map((grade) => (
                  <div
                    key={grade}
                    className="border-b border-black/10 pb-4"
                  >
                    <h3 className="text-5xl font-medium text-[#1f3b2d]">
                      {grade}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1f3b2d] text-white rounded-[2rem] p-10 hover:-translate-y-2 transition-all duration-500">
              <p className="uppercase tracking-[0.25em] text-sm text-[#d8c3a5] mb-8">
                Cashew Pieces
              </p>

              <div className="space-y-6">
                {pieceGrades.map((grade) => (
                  <div
                    key={grade}
                    className="border-b border-white/10 pb-4"
                  >
                    <h3 className="text-5xl font-medium">
                      {grade}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f8f5f1] rounded-[2rem] p-10 hover:-translate-y-2 transition-all duration-500">
              <p className="uppercase tracking-[0.25em] text-sm text-[#7a5c3e] mb-8">
                Export Packaging
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium text-[#1f3b2d]">
                    Vacuum Packaging
                  </h3>

                  <p className="mt-3 text-black/70 leading-7">
                    Designed to preserve freshness and maintain product quality.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-medium text-[#1f3b2d]">
                    Bulk Packaging
                  </h3>

                  <p className="mt-3 text-black/70 leading-7">
                    Suitable for large-scale domestic and export supply.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-medium text-[#1f3b2d]">
                    Export Cartons
                  </h3>

                  <p className="mt-3 text-black/70 leading-7">
                    Secure packaging solutions aligned with global logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}