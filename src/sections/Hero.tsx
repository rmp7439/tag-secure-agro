import Image from "next/image";
import heroImage from "@/assets/images/hero-cashew.png";
import floatingCashews from "@/assets/images/hero-cashew.png";

export default function Hero() {
  return (
    <section className="relative px-10 py-24 overflow-hidden">
      <Image
        src={floatingCashews}
        alt="Floating Cashews"
        width={220}
        height={220}
        className="absolute top-10 right-[42%] opacity-20 rotate-12"
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <p className="uppercase tracking-[0.3em] text-sm text-[#7a6a58]">
            Premium Cashew Processing & Export
          </p>

          <h1 className="text-6xl leading-tight font-medium text-[#1f1f1f]">
            Export-grade cashews with trusted processing standards.
          </h1>

          <p className="text-lg text-[#5c5c5c] leading-relaxed max-w-xl">
            Tagsecure Agro delivers premium-quality cashews through hygienic
            processing, reliable packaging, and export-focused operational
            standards.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#1f3b2d] text-white px-8 py-4 rounded-full">
              Explore Products
            </button>

            <button className="border border-[#1f3b2d] px-8 py-4 rounded-full">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative h-[650px] rounded-[40px] overflow-hidden">
          <Image
            src={heroImage}
            alt="Premium Cashews"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
