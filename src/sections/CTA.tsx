export default function CTA() {
  return (
    <section className="px-10 py-32 bg-[#1f3b2d] text-white overflow-hidden relative">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#d9c7ae] mb-6">
          Let’s Connect
        </p>

        <h2 className="text-5xl md:text-6xl leading-tight font-medium">
          Premium cashew solutions backed by quality-focused operations.
        </h2>

        <p className="mt-8 text-lg leading-8 text-white/75 max-w-3xl mx-auto">
          Connect with Tagsecure Agro for product inquiries,
          export discussions, and long-term supply opportunities.
        </p>

        <div className="flex justify-center gap-5 mt-12 flex-wrap">

          <button className="bg-white text-[#1f3b2d] px-8 py-4 rounded-full font-medium">
            Contact Us
          </button>

          <button className="border border-white/30 px-8 py-4 rounded-full">
            Explore Products
          </button>

        </div>

      </div>

      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-white/5 rounded-full"></div>

    </section>
  );
}