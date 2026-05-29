"use client";

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import ParallaxImage from "@/components/animations/ParallaxImage";
import infraImage from "@/assets/images/processing-scale.jpg";

export default function Infrastructure() {
  return (
    <section className="px-6 md:px-10 py-32 bg-[#f8f5f1]">
      <Reveal>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a5c3e] mb-6">
              Infrastructure
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1f3b2d]">
              Modern infrastructure designed for quality-focused production.
            </h2>

            <p className="mt-8 text-lg text-black/70 leading-8">
              Tagsecure Agro is being developed with a focus on efficient
              processing systems, hygienic operations, and infrastructure
              capable of supporting premium-grade cashew production.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-4xl font-medium text-[#1f3b2d]">
                  Modern
                </h3>

                <p className="mt-3 text-black/70 leading-7">
                  Processing systems designed for operational efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-medium text-[#1f3b2d]">
                  Hygienic
                </h3>

                <p className="mt-3 text-black/70 leading-7">
                  Quality-focused production and handling standards.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[620px] rounded-[36px] overflow-hidden">
            <ParallaxImage>
              <Image
                src={infraImage}
                alt="Infrastructure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </ParallaxImage>
          </div>
        </div>
      </Reveal>
    </section>
  );
}