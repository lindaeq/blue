import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { ProjectsTabProvider } from "@/components/ProjectsTabContext";

export default function Home() {
  return (
    <ProjectsTabProvider>
      <Nav />
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </ProjectsTabProvider>
  );
}
