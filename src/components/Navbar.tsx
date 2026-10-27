import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Button } from "./primitives";
import { BrandLink } from "./Logo";
import { IconClose, IconMenu } from "./icons";

const links = [
  { label: "Programa", href: "#programa" },
  { label: "Módulos", href: "#modulos" },
  { label: "Docentes", href: "#docentes" },
  { label: "Imersão", href: "#cancun" },
  { label: "Investimento", href: "#investimento" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn("transition-all duration-500", scrolled ? "px-3 pt-3 sm:px-5 sm:pt-4" : "px-0 pt-0")}>
        <nav
          aria-label="Navegação principal"
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500",
            scrolled
              ? "glass max-w-6xl rounded-2xl px-3 py-2 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.9)] sm:px-4"
              : "max-w-7xl border-b border-white/[0.06] bg-ink-950/50 px-4 py-3.5 backdrop-blur-md sm:px-8",
          )}
        >
          <BrandLink />

          <ul className="hidden items-center gap-0.5 xl:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative rounded-full px-3.5 py-2 text-[14px] font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-300 to-blue-400 transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 xl:flex">
            <Button size="sm" href="#inscricao">
              Receber informações
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform active:scale-90 xl:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* progresso de leitura */}
      <div className="relative mx-auto h-px w-full max-w-7xl overflow-hidden">
        <div
          className="h-px bg-gradient-to-r from-gold-300 via-gold-400 to-blue-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* menu mobile */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 origin-top overflow-y-auto bg-ink-950/95 px-5 pb-10 pt-24 backdrop-blur-xl transition-all duration-500 xl:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible -translate-y-3 opacity-0",
        )}
      >
        <ul className="flex flex-col">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: `${i * 45}ms` }}
              className={cn(
                "transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/[0.06] py-4 font-display text-xl font-semibold text-white"
              >
                {l.label}
                <span className="text-gold-300">↗</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3">
          <Button href="#inscricao" size="lg" onClick={() => setOpen(false)}>
            Receber informações
          </Button>
          <Button href="#modulos" variant="outline" size="lg" onClick={() => setOpen(false)}>
            Ver os 12 módulos
          </Button>
        </div>
      </div>
    </header>
  );
}
