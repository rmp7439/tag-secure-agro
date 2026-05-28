export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f5f1e8]/70 border-b border-black/5">

      <nav className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#1f3b2d]">
            Tagsecure Agro
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm text-[#4a4a4a]">

          <a href="#" className="hover:text-[#1f3b2d] transition">
            Home
          </a>

          <a href="#" className="hover:text-[#1f3b2d] transition">
            Products
          </a>

          <a href="#" className="hover:text-[#1f3b2d] transition">
            Processing
          </a>

          <a href="#" className="hover:text-[#1f3b2d] transition">
            Export
          </a>

          <a href="#" className="hover:text-[#1f3b2d] transition">
            Contact
          </a>

        </div>

        <button className="bg-[#1f3b2d] text-white px-6 py-3 rounded-full text-sm">
          Get In Touch
        </button>

      </nav>

    </header>
  );
}