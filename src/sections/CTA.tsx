import Reveal from "@/components/animations/Reveal";

export default function CTA() {
  return (
    <section className="px-6 md:px-10 py-32 bg-[#1f3b2d] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f3b2d] via-[#294636] to-[#16271e] opacity-95"></div>

      <Reveal>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[#d9c7ae] mb-6">
            Let’s Connect
          </p>

          <h2 className="text-5xl md:text-6xl leading-[1.15] font-medium">
            Premium cashew solutions backed by quality-focused operations.
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/75 max-w-3xl mx-auto">
            Connect with Tagsecure Agro for product inquiries, export
            discussions, and long-term supply opportunities.
          </p>

          <div className="flex justify-center gap-5 mt-14 flex-wrap">
            <button className="bg-white text-[#1f3b2d] px-8 py-4 rounded-full font-medium hover:-translate-y-1 hover:bg-[#f2ede6] transition-all duration-500 shadow-xl">
              Contact Us
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-[#1f3b2d] transition-all duration-500">
              Explore Products
            </button>
          </div>
        </div>
      </Reveal>

      <div className="absolute -bottom-24 -right-24 w-[320px] h-[320px] bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
}
