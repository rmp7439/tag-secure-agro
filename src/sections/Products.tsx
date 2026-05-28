export default function Products() {
  return (
    <section className="px-6 md:px-12 py-24 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.3em] text-sm text-[#7a5c3e] mb-6">
              Our Products
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#1f3b2d]">
              Premium Cashew Products Crafted for Global Markets
            </h2>

          </div>

          <button className="border border-black/10 px-6 py-3 rounded-full hover:bg-black/5 transition w-fit">
            View All Products
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="rounded-3xl overflow-hidden bg-[#f5f1e8]">
            
            <div className="h-[320px] bg-[#d8c3a5]"></div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#1f3b2d]">
                Premium Whole Cashews
              </h3>

              <p className="text-black/70 leading-7 mt-4">
                Carefully processed whole cashew kernels maintaining superior
                taste, texture, and quality consistency.
              </p>
            </div>

          </div>

          <div className="rounded-3xl overflow-hidden bg-[#f5f1e8]">
            
            <div className="h-[320px] bg-[#cbb89d]"></div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#1f3b2d]">
                Roasted Cashew Range
              </h3>

              <p className="text-black/70 leading-7 mt-4">
                Premium roasted variants designed for retail, hospitality, and
                international food industries.
              </p>
            </div>

          </div>

          <div className="rounded-3xl overflow-hidden bg-[#f5f1e8]">
            
            <div className="h-[320px] bg-[#b8a184]"></div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#1f3b2d]">
                Export Quality Grades
              </h3>

              <p className="text-black/70 leading-7 mt-4">
                Export-focused quality grading and packaging standards aligned
                with international requirements.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}