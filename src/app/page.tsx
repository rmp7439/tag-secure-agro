import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Footer from "@/components/Footer";
import About from "@/sections/About";
import WhyChoose from "@/sections/WhyChoose";
import Products from "@/sections/Products";
import Processing from "@/sections/Processing";
import Vision from "@/sections/Vision";
import Stats from "@/sections/Stats";

export default function Home() {
  return (
    <main className="bg-[#f5f1e8] text-[#1a1a1a]">
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <Products />
      <Processing />
      <Vision />
      <Stats />
      <Footer />
    </main>
  );
}