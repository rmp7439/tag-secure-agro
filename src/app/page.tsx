import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import WhyChoose from "@/sections/WhyChoose";
import ProductGrades from "@/sections/ProductGrades";
import Products from "@/sections/Products";
import Workflow from "@/sections/Workflow";
import Processing from "@/sections/Processing";
import Infrastructure from "@/sections/Infrastructure";
import Quality from "@/sections/Quality";
import Export from "@/sections/Export";
import Stats from "@/sections/Stats";
import Vision from "@/sections/Vision";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main className="bg-[#f5f1e8] text-[#1a1a1a]">
      <Navbar />

      <Hero />

      <About />

      <WhyChoose />

      <ProductGrades />
      
      <Products />

      <Workflow />

      <Processing />

      <Infrastructure />

      <Quality />

      <Export />

      <Stats />

      <Vision />

      <CTA />

      <Footer />
    </main>
  );
}