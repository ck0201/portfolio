import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveTelemetry from "@/components/LiveTelemetry";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillsRadar from "@/components/SkillsRadar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#030712] text-zinc-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <LiveTelemetry />
      <Experience />
      <Projects />
      <SkillsRadar />
      <ContactSection />
      <Footer />
    </main>
  );
}
