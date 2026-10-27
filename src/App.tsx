import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Cancun from "./components/Cancun";
import Faculty from "./components/Faculty";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { IconArrow } from "./components/icons";

function MobileCTABar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 820);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 transition-all duration-500 lg:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <a
        href="#inscricao"
        className="glass flex items-center justify-between gap-3 rounded-2xl px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,1)]"
      >
        <span className="leading-tight">
          <span className="block font-display text-[13.5px] font-bold text-white">Matrículas abertas · 360h</span>
          <span className="block text-[11.5px] text-slate-400">12 módulos EAD · 360 horas</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-2 font-display text-[13px] font-bold text-navy-900">
          Informações
          <IconArrow className="h-3.5 w-3.5" />
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 font-sans antialiased">
      <a
        href="#programa"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-gold-300 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-900"
      >
        Pular para o conteúdo
      </a>

      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Benefits />
        <Cancun />
        <Faculty />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}
