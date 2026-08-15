import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";

import Benefits from "@/components/Benefits";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />

        <Benefits />

        <About />

        <Plans />

        <Testimonials />

        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
