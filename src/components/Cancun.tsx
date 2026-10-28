import { Button, Reveal } from "./primitives";
import { IconCheck, IconPin, IconPlane, IconSpark, IconUsers } from "./icons";

const IMG =
  "https://images.pexels.com/photos/20210509/pexels-photo-20210509.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400&dpr=1";

const pillars = [
  {
    icon: IconPin,
    title: "Cellular Hope Institute",
    body: "Vivência presencial no Cellular Institute, com foco em práticas regenerativas e discussão de casos.",
  },
  {
    icon: IconSpark,
    title: "Prática regenerativa atual",
    body: "Aprenda na prática as aplicações regenerativas mais atuais do cenário mundial.",
  },
  {
    icon: IconUsers,
    title: "Network internacional",
    body: "Conheça médicos e docentes de diferentes países que estão moldando o campo.",
  },
];

export default function Cancun() {
  return (
    <section id="cancun" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal dir="scale">
          <div className="group relative isolate overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_60px_140px_-60px_rgba(0,0,0,1)]">
            <img
              src={IMG}
              alt="Vista aérea do litoral de Cancún com águas turquesa e resorts à beira-mar"
              loading="lazy"
              decoding="async"
              width={1400}
              height={900}
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />

            <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-400/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-200 backdrop-blur">
                  <IconPlane className="h-3.5 w-3.5" />
                  Imersão prática · Opcional
                </span>
                <h2 className="mt-6 font-display text-[clamp(2rem,4.8vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
                  Uma semana em <span className="text-gradient">Cancún</span> para viver a prática regenerativa mais atual
                </h2>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate-300">
                  Uma imersão presencial opcional, de uma semana, no Cellular Hope Institute (Cellular Institute), em Cancún,
                  para aprender na prática o que há de mais atual em Medicina Regenerativa no mundo.
                </p>

                <Button href="#investimento" size="lg" className="mt-8">
                  Ver condições da imersão
                </Button>
              </div>

              <div className="mt-14 grid gap-4 md:grid-cols-3">
                {pillars.map((p, i) => (
                  <Reveal key={p.title} delay={i * 110}>
                    <div className="glass h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-300/30">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/15 text-gold-200">
                        <p.icon className="h-5 w-5" />
                      </span>
                      <p className="mt-4 font-display text-[15px] font-bold text-white">{p.title}</p>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={200}>
                <p className="mt-8 flex items-center gap-2 text-[13px] text-slate-400">
                  <IconCheck className="h-4 w-4 text-gold-300" strokeWidth={2.4} />
                  Complemento opcional, com valor à parte e não incluído na formação base
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
