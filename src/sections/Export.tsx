import Image from "next/image";
import exportImage from "@/assets/images/export.png";

export default function Export() {
  return (
    <section className="px-6 md:px-10 py-28 bg-[#f8f5f1]">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <div className="relative h-[620px] rounded-[36px] overflow-hidden order-2 lg:order-1">
          <Image
            src={exportImage}
            alt="Export Operations"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8 order-1 lg:order-2">

          <p className="uppercase tracking-[0.3em] text-sm text-[#7a6a58]">
            Export & Packaging
          </p>

          <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#1f1f1f]">
            Reliable packaging and export-focused operational systems.
          </h2>

          <p className="text-[#5c5c5c] text-lg leading-8">
            Our packaging and logistics approach is designed to support
            product safety, consistency, and efficient supply management
            for domestic and international markets.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-6">

            <div>
              <h3 className="text-4xl font-medium text-[#1f3b2d]">
                Secure
              </h3>

              <p className="mt-3 text-[#5c5c5c] leading-7">
                Packaging systems designed for safe transportation.
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-medium text-[#1f3b2d]">
                Global
              </h3>

              <p className="mt-3 text-[#5c5c5c] leading-7">
                Supply-focused operations aligned with export readiness.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}