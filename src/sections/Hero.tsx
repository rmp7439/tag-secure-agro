export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl text-center">
        
        <p className="uppercase tracking-[0.3em] text-sm text-[#7a5c3e] mb-6">
          Premium Cashew Processing Excellence
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#1f3b2d]">
          Premium Cashew Processing Excellence from Gujarat
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-black/70">
          Tagsecure Agro Private Limited is a modern cashew processing company
          specializing in premium-grade cashew kernels for domestic and
          international markets.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          
          <button className="bg-[#1f3b2d] text-white px-8 py-4 rounded-full hover:opacity-90 transition">
            Explore Products
          </button>

          <button className="border border-black/20 px-8 py-4 rounded-full hover:bg-black/5 transition">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}