export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f5f1e8]/70 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#1f3b2d] animate-pulse"></div>

          <h1 className="text-2xl font-semibold tracking-tight text-[#1f3b2d]">
            Tagsecure Agro
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm text-[#4a4a4a]">
          <a
            href="#"
            className="hover:text-[#1f3b2d] hover:-translate-y-[2px] transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-[#1f3b2d] hover:-translate-y-[2px] transition-all duration-300"
          >
            Products
          </a>

          <a
            href="#"
            className="hover:text-[#1f3b2d] hover:-translate-y-[2px] transition-all duration-300"
          >
            Processing
          </a>

          <a
            href="#"
            className="hover:text-[#1f3b2d] hover:-translate-y-[2px] transition-all duration-300"
          >
            Export
          </a>

          <a
            href="#"
            className="hover:text-[#1f3b2d] hover:-translate-y-[2px] transition-all duration-300"
          >
            Contact
          </a>
        </div>

        <button className="bg-[#1f3b2d] text-white px-6 py-3 rounded-full text-sm hover:bg-[#2c4b3b] hover:-translate-y-1 transition-all duration-500 shadow-lg">
          Get In Touch
        </button>
      </nav>
    </header>
  );
}
