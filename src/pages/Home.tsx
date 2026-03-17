import { useEffect } from "react";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { CareerEducation } from "@/components/CareerEducation";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "UGGFY.VISION | Aman Kumar - Student Developer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Portfolio of Aman Kumar (UGGFY.VISION) - Student Developer focused on automation, Telegram bots, cloud hosting, and backend systems.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Portfolio of Aman Kumar (UGGFY.VISION) - Student Developer focused on automation, Telegram bots, cloud hosting, and backend systems.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <BackgroundGlow />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CareerEducation />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
