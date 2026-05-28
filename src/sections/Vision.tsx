import Reveal from "@/components/animations/Reveal";

export default function Vision() {
  return (
    <section className="px-6 md:px-10 py-32 bg-[#f5f1e8]">
      <Reveal>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="bg-white rounded-[2rem] p-12 hover:-translate-y-2 transition-all duration-500 shadow-lg">
            <p className="uppercase tracking-[0.35em] text-sm text-[#7a5c3e] mb-6">
              Our Vision
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#1f3b2d]">
              To become a trusted global name in premium cashew processing.
            </h2>

            <p className="mt-8 text-black/70 leading-8 text-lg">
              We aim to establish long-term trust through consistent product
              quality, ethical operations, and modern processing excellence.
            </p>
          </div>

          <div className="bg-[#1f3b2d] rounded-[2rem] p-12 text-white hover:-translate-y-2 transition-all duration-500 shadow-2xl">
            <p className="uppercase tracking-[0.35em] text-sm text-[#d8c3a5] mb-6">
              Our Mission
            </p>

            <h2 className="text-4xl font-medium leading-tight">
              Delivering quality through discipline, hygiene, and innovation.
            </h2>

            <p className="mt-8 text-white/70 leading-8 text-lg">
              Our mission is to provide premium-grade cashew products supported
              by modern infrastructure, responsible processing methods, and
              customer-focused business practices.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
