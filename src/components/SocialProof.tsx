import { Reveal } from "./primitives";

const topics = [
  "Células-tronco",
  "PRP & PRF",
  "Exossomos",
  "Secretoma",
  "Ortobiologia",
  "Dermatologia regenerativa",
  "Medicina do esporte",
  "Peptídeos",
  "Biohacking",
  "Biologia do envelhecimento",
  "Manejo da dor",
  "Pesquisa clínica",
];

export default function SocialProof() {
  return (
    <section
      aria-label="Temas do programa"
      className="relative border-y border-white/[0.06] bg-ink-900/50 py-10"
    >
      <Reveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
          Temas que você vai estudar na formação
        </p>
      </Reveal>

      <div
        className="group relative mt-8 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="anim-marquee flex w-max gap-12 group-hover:[animation-play-state:paused]">
          {[...topics, ...topics].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap font-display text-[15px] font-semibold tracking-tight text-slate-500 transition-colors duration-300 hover:text-white sm:text-[17px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-gold-300 to-blue-400" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
