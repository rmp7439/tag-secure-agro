import Image from "next/image";
import heroImage from "@/assets/images/hero-cashew.png";
import floatingCashews from "@/assets/images/hero-cashew.png";
import Reveal from "@/components/animations/Reveal";

export default function Hero() {
  return (
    <section className="relative px-6 md:px-10 py-32 overflow-hidden bg-[#f8f5f1]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5f1] via-[#f6f2eb] to-[#f1ebe2] opacity-70"></div>

      <Image
        src={floatingCashews}
        alt="Floating Cashews"
        width={220}
        height={220}
        className="absolute top-10 right-[42%] opacity-10 rotate-12 animate-pulse w-auto h-auto"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <div className="space-y-10">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a6a58]">
              Premium Cashew Processing & Export
            </p>

            <h1 className="text-5xl md:text-6xl leading-[1.1] font-medium text-[#1f1f1f] max-w-2xl">
              Export-grade cashews backed by trusted processing systems.
            </h1>

            <p className="text-lg text-[#5c5c5c] leading-8 max-w-xl">
              Tagsecure Agro delivers premium-quality cashews through hygienic
              processing, export-focused packaging, and operational systems
              designed for consistency and reliability.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button className="bg-[#1f3b2d] text-white px-8 py-4 rounded-full hover:-translate-y-1 transition-all duration-500 shadow-lg">
                Explore Products
              </button>

              <button className="border border-[#1f3b2d] px-8 py-4 rounded-full hover:bg-[#1f3b2d] hover:text-white transition-all duration-500">
                Contact Us
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative h-[650px] rounded-[40px] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-2xl">
            <Image
              src={heroImage}
              alt="Premium Cashews"
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
