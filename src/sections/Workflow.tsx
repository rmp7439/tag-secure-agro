"use client";

import Reveal from "@/components/animations/Reveal";

export default function Workflow() {
  return (
    <section className="px-6 md:px-10 py-32 bg-white">
      <Reveal>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a5c3e] mb-6">
              Processing Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1f3b2d]">
              From raw cashew nuts to export-ready kernels.
            </h2>

            <p className="mt-8 text-lg text-black/70 leading-8">
              A disciplined process designed to maintain quality,
              consistency, and hygiene at every stage of production.
            </p>
          </div>

          <div className="mt-20 rounded-[3rem] border border-black/5 bg-[#f8f5f1] p-8 md:p-12">
            <div className="aspect-[16/9] rounded-[2rem] border border-dashed border-[#1f3b2d]/20 flex items-center justify-center">
              <div className="text-center">
                <p className="uppercase tracking-[0.3em] text-sm text-[#7a5c3e] mb-4">
                  Workflow Illustration
                </p>

                <h3 className="text-2xl font-medium text-[#1f3b2d]">
                  Processing Journey Graphic
                </h3>

                <p className="mt-4 text-black/60">
                  Replace this area with the final workflow infographic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}