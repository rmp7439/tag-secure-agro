export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-6 border-b border-black/10 bg-[#f5f1e8]/80 backdrop-blur-md sticky top-0 z-50">
      
      <h1 className="text-2xl font-bold tracking-wide text-[#1f3b2d]">
        Tagsecure Agro
      </h1>

      <div className="hidden md:flex gap-10 text-sm uppercase tracking-wide font-medium text-black/70">
        <a href="#" className="hover:text-[#1f3b2d] transition">
          Home
        </a>

        <a href="#" className="hover:text-[#1f3b2d] transition">
          About
        </a>

        <a href="#" className="hover:text-[#1f3b2d] transition">
          Products
        </a>

        <a href="#" className="hover:text-[#1f3b2d] transition">
          Contact
        </a>
      </div>

      <button className="bg-[#1f3b2d] text-white px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
        Business Inquiry
      </button>

    </nav>
  );
}