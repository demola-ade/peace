import Certs from "@/components/Certs";
import Experience from "@/components/Experience";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 md:px-10 relative">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Certs />
      <Footer />
    </div>
  );
}
