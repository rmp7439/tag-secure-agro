import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Footer from "@/components/Footer";
import About from "@/sections/About";

export default function Home() {
  return (
    <main className="bg-[#f5f1e8] text-[#1a1a1a]">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}