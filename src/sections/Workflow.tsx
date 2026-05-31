import Image from "next/image";
import workflowImage from "@/assets/images/workflow.png";
import Reveal from "@/components/animations/Reveal";

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="px-6 md:px-10 py-32 bg-white"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a5c3e] mb-6">
              Processing Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1f3b2d]">
              From raw cashew procurement to export-ready packaging.
            </h2>

            <p className="mt-8 text-lg text-black/70 leading-8">
              Every batch follows a structured workflow designed to maintain
              consistency, hygiene, and premium product quality.
            </p>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-black/5 bg-[#faf8f4] p-4 md:p-8">
            <Image
              src={workflowImage}
              alt="Cashew Processing Workflow"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}