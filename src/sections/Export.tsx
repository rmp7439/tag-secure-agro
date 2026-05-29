import Image from "next/image";
import exportImage from "@/assets/images/export.png";
import Reveal from "@/components/animations/Reveal";
import ParallaxImage from "@/components/animations/ParallaxImage";

export default function Export() {
  return (
    <section className="px-6 md:px-10 py-32 bg-[#f8f5f1]">
      <Reveal>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[620px] rounded-[36px] overflow-hidden order-2 lg:order-1 hover:-translate-y-2 transition-all duration-500">
            <ParallaxImage>
              <Image
                src={exportImage}
                alt="Export Operations"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </ParallaxImage>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <p className="uppercase tracking-[0.3em] text-sm text-[#7a6a58]">
              Export & Packaging
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#1f1f1f]">
              Export-ready packaging and logistics systems built for global
              markets.
            </h2>

            <p className="text-[#5c5c5c] text-lg leading-8">
              Our packaging and logistics approach supports product protection,
              export compliance, shipment efficiency, and consistent delivery
              standards across domestic and international markets.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-4xl font-medium text-[#1f3b2d]">
                  Secure
                </h3>

                <p className="mt-3 text-[#5c5c5c] leading-7">
                  Packaging systems designed for safe storage and
                  transportation.
                </p>
              </div>

              <div className="hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-4xl font-medium text-[#1f3b2d]">
                  Global
                </h3>

                <p className="mt-3 text-[#5c5c5c] leading-7">
                  Supply-focused operations aligned with international export
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}