import { CountUp, Reveal, SectionHeading, SpotlightCard } from "./primitives";
import { IconArrow, IconBook, IconCheck, IconGlobe, IconPlane } from "./icons";

const metrics = [
  {
    value: 360,
    suffix: "h",
    label: "de conteúdo certificado",
    detail: "Carga horária completa, do básico à prática clínica avançada.",
  },
  {
    value: 12,
    suffix: " módulos",
    label: "100% EAD",
    detail: "Organizados em três eixos, com ritmo flexível para a rotina médica.",
  },
  {
    value: 17,
    suffix: " anos",
    label: "de Medicina Regenerativa",
    detail: "Instituição presente em mais de 25 países, com a inovação como meta para a formação médica.",
  },
];

const journey = [
  {
    step: "01",
    title: "Base científica",
    body: "Biologia do envelhecimento, células-tronco e terreno biológico. Você aprende a ler cada indicação com rigor.",
    icon: IconBook,
  },
  {
    step: "02",
    title: "Aplicação clínica",
    body: "PRP, PRF, exossomos, ortobiologia, dermatologia, dor e esporte, com protocolos e critérios de indicação.",
    icon: IconGlobe,
  },
  {
    step: "03",
    title: "Aprofundamento e liderança",
    body: "Peptídeos, biohacking e pesquisa clínica. Para quem desejar, a imersão opcional em Cancún, no Cellular Hope Institute, consolida o aprendizado.",
    icon: IconPlane,
  },
];

const takeaways = [
  { tag: "Opção 1", text: "Pós-graduação EAD ISSCA Brasil, com 360 horas e 12 módulos" },
  { tag: "Opção 2", text: "Pós EAD ISSCA Brasil + conteúdo online da pós-graduação ISSCA EUA" },
  { tag: "Corpo docente", text: "Professores nacionais e internacionais" },
  {
    tag: "Complemento opcional",
    text: "Semana de imersão em Cancún, no Cellular Hope Institute (valor à parte, não incluso na formação)",
  },
];

export default function Benefits() {
  return (
    <section id="resultados" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(47,124,246,0.12),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Números do programa"
          title={
            <>
              Uma formação <span className="text-gradient">completa e transformadora</span>
            </>
          }
          description="Cada etapa foi pensada para que você saia da pós-graduação pronto para aplicar, ensinar e liderar."
        />

        {/* métricas */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 110} dir="scale">
              <SpotlightCard className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300/25">
                <p className="font-display text-[2.8rem] font-extrabold leading-none tracking-[-0.04em] text-white">
                  <CountUp to={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-4 font-display text-[15px] font-semibold text-gold-200">{m.label}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">{m.detail}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* jornada */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal dir="left">
            <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Sua jornada na ISSCA Brasil
              </p>
              <ol className="relative mt-8 space-y-8">
                <span
                  aria-hidden
                  className="absolute left-[21px] top-3 bottom-3 w-px bg-gradient-to-b from-gold-300/60 via-blue-400/40 to-transparent"
                />
                {journey.map((j) => (
                  <li key={j.step} className="group relative flex gap-5">
                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-ink-900 text-gold-200 transition-all duration-500 group-hover:scale-110 group-hover:border-gold-300/40">
                      <j.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-[11px] font-bold tracking-[0.2em] text-blue-300">
                        ETAPA {j.step}
                      </p>
                      <h3 className="mt-1 font-display text-[18px] font-bold tracking-tight text-white">
                        {j.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-slate-400">{j.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal dir="right" delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-gold-300/20 bg-gradient-to-br from-gold-400/[0.1] via-white/[0.03] to-blue-500/[0.08] p-8 sm:p-10">
              <div
                aria-hidden
                className="anim-floaty absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold-400/15 blur-3xl"
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-200">
                O que você leva
              </p>
              <ul className="mt-6 space-y-5">
                {takeaways.map((t) => (
                  <li key={t.text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-gold-200">
                      <IconCheck className="h-3 w-3" strokeWidth={2.6} />
                    </span>
                    <span>
                      <span className="block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-300/90">
                        {t.tag}
                      </span>
                      <span className="mt-1 block text-[14.5px] font-medium leading-snug text-slate-100">
                        {t.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#inscricao"
                className="group mt-8 inline-flex items-center gap-2 font-display text-[14px] font-semibold text-white"
              >
                Quero fazer parte da turma
                <IconArrow className="h-4 w-4 text-gold-300 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
