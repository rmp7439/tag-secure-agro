import Image from "next/image";
import productImage from "@/assets/images/cashew-pieces.jpg";
import Reveal from "@/components/animations/Reveal";

export default function Products() {
  return (
    <section className="px-6 md:px-10 py-28 bg-[#f8f5f1]">
      <Reveal>
        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-[#7a6a58] mb-5">
              Product Range
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#1f1f1f]">
              Premium cashew products processed for quality and consistency.
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="relative h-[520px] rounded-[36px] overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <Image
                src={productImage}
                alt="Cashew Products"
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="space-y-10">

              <div className="border-b border-black/10 pb-8">
                <h3 className="text-3xl font-medium text-[#1f1f1f] mb-4">
                  Premium Whole Cashews
                </h3>

                <p className="text-[#5c5c5c] leading-8">
                  Export-grade whole cashews available in premium grades including W180, W240, and W320, processed for consistency and international market requirements.
                </p>
              </div>

              <div className="border-b border-black/10 pb-8">
                <h3 className="text-3xl font-medium text-[#1f1f1f] mb-4">
                  Hygienic Processing
                </h3>

                <p className="text-[#5c5c5c] leading-8">
                  Cashew pieces including LWP, SWP, and BB grades suitable for food manufacturing, retail packaging, and industrial applications.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-3xl font-medium text-[#1f1f1f] mb-4">
                  Packaging & Export
                </h3>

                <p className="text-[#5c5c5c] leading-8">
                  Export-ready packaging systems designed for product protection, efficient logistics, and global supply chain requirements.
                </p>
              </div>

            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}