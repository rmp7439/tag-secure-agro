"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Processing", href: "#processing" },
  { label: "Export", href: "#export" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-[#f5f1e8]/90 shadow-lg"
          : "backdrop-blur-xl bg-[#f5f1e8]/60"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-[#1f3b2d] animate-pulse"></div>

          <h1 className="text-2xl font-semibold tracking-tight text-[#1f3b2d] hover:opacity-80 transition-all duration-300">
            Tagsecure Agro
          </h1>
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm text-[#4a4a4a]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-[#1f3b2d]">
                {item.label}
              </span>

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#1f3b2d] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="bg-[#1f3b2d] text-white px-6 py-3 rounded-full text-sm hover:bg-[#2c4b3b] hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
        >
          Get In Touch
        </a>
      </nav>
    </header>
  );
}