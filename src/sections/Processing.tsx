import Image from "next/image";
import processingImage from "@/assets/images/processing.png";

export default function Processing() {
  return (
    <section className="px-6 md:px-10 py-28 bg-white">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <div className="space-y-8">

          <p className="uppercase tracking-[0.3em] text-sm text-[#7a6a58]">
            Processing Standards
          </p>

          <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#1f1f1f]">
            Hygienic processing systems designed for consistency and trust.
          </h2>

          <p className="text-[#5c5c5c] text-lg leading-8">
            Our operational approach focuses on cleanliness, careful
            handling, and quality-oriented processing standards to
            maintain premium-grade cashew products.
          </p>

          <div className="space-y-6 pt-6">

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1f3b2d] mt-2"></div>

              <p className="text-[#5c5c5c] leading-7">
                Hygienic operational workflows and controlled handling.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1f3b2d] mt-2"></div>

              <p className="text-[#5c5c5c] leading-7">
                Reliable quality standards focused on export readiness.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#1f3b2d] mt-2"></div>

              <p className="text-[#5c5c5c] leading-7">
                Processing systems optimized for product consistency.
              </p>
            </div>

          </div>

        </div>

        <div className="relative h-[620px] rounded-[36px] overflow-hidden">
          <Image
            src={processingImage}
            alt="Processing Facility"
            fill
            className="object-cover"
          />
        </div>

      </div>

    </section>
  );
}