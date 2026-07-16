import Hero from "@/components/Hero";
import About from "@/components/About";
import Misc from "@/components/Misc";
import Projects from "@/components/Projects";
import Design from "@/components/Design";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Misc />
      <Projects />
      <Design />
      <Footer />
    </main>
  );
}
