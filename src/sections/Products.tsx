import Image from "next/image";
import productImage from "@/assets/images/cashew-pieces.jpg";
import Reveal from "@/components/animations/Reveal";
import ParallaxImage from "@/components/animations/ParallaxImage";

export default function Products() {
  return (
    <section id="products" className="px-6 md:px-10 py-32 bg-[#f8f5f1]">
      <Reveal>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-[#7a6a58] mb-5">
              Product Range
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#1f1f1f]">
              Premium cashew grades tailored for domestic and international
              markets.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[520px] rounded-[36px] overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <ParallaxImage>
                <Image
                  src={productImage}
                  alt="Cashew Products"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </ParallaxImage>
            </div>

            <div className="space-y-10">
              <div className="border-b border-black/10 pb-8">
                <h3 className="text-3xl font-medium text-[#1f1f1f] mb-4">
                  Whole Cashew Kernels
                </h3>

                <div className="space-y-4">
                  <p className="text-[#5c5c5c] leading-8">
                    Export-grade whole cashews processed for consistency,
                    premium appearance, and international market requirements.
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-2 rounded-full bg-[#ece5da] text-sm">
                      W180
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#ece5da] text-sm">
                      W240
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#ece5da] text-sm">
                      W320
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-b border-black/10 pb-8">
                <h3 className="text-3xl font-medium text-[#1f1f1f] mb-4">
                  Cashew Pieces
                </h3>

                <div className="space-y-4">
                  <p className="text-[#5c5c5c] leading-8">
                    Cashew pieces suitable for food manufacturing, retail
                    packaging, confectionery applications, and industrial use.
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-2 rounded-full bg-[#ece5da] text-sm">
                      LWP
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#ece5da] text-sm">
                      SWP
                    </span>

                    <span className="px-4 py-2 rounded-full bg-[#ece5da] text-sm">
                      BB
                    </span>
                  </div>
                </div>
              </div>

              <div className="pb-8">
                <h3 className="text-3xl font-medium text-[#1f1f1f] mb-4">
                  Packaging & Export
                </h3>

                <p className="text-[#5c5c5c] leading-8">
                  Export-ready packaging solutions designed for product
                  protection, efficient logistics, bulk handling, and global
                  supply chain requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}