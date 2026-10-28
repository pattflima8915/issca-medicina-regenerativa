import { useState } from "react";
import { cn } from "@/utils/cn";
import { Reveal, SectionHeading } from "./primitives";
import { IconArrow, IconCheck, IconDna, IconCell, IconMicroscope, IconSpark } from "./icons";

type Module = {
  n: number;
  eixo: "I" | "II" | "III";
  title: string;
  short: string;
  body: string;
  chips: string[];
};

const modules: Module[] = [
  {
    n: 1,
    eixo: "I",
    title: "Fundamentos da Medicina Regenerativa e Biologia do Envelhecimento",
    short: "Fundamentos e envelhecimento",
    body: "Estudo dos fundamentos da Medicina Regenerativa e da biologia do envelhecimento, com avaliação crítica de conceitos e evidências.",
    chips: ["Biologia celular", "Senescência", "Evidência científica"],
  },
  {
    n: 2,
    eixo: "I",
    title: "Terapias Celulares Avançadas — Células-tronco",
    short: "Terapias celulares avançadas",
    body: "Estudo dos tipos de células-tronco e das terapias celulares avançadas, com discussão de evidências, segurança e limitações.",
    chips: ["Células-tronco", "SVF", "Segurança"],
  },
  {
    n: 3,
    eixo: "I",
    title: "Nutrologia e Terreno Biológico — Modulação Hormonal e Inflamação Sistêmica",
    short: "Nutrologia e terreno biológico",
    body: "Estudo das relações entre nutrição, modulação hormonal e inflamação sistêmica no contexto da Medicina Regenerativa.",
    chips: ["Nutrologia", "Modulação hormonal", "Inflamação sistêmica"],
  },
  {
    n: 4,
    eixo: "II",
    title: "Terapias Biológicas Aplicadas — PRP, PRF, Exossomos e Secretoma",
    short: "PRP, PRF, exossomos e secretoma",
    body: "Estudo de PRP, PRF, exossomos e secretoma, com discussão das evidências disponíveis, limitações, segurança e contexto regulatório.",
    chips: ["PRP", "PRF", "Exossomos"],
  },
  {
    n: 5,
    eixo: "II",
    title: "Ortobiologia e Sistema Musculoesquelético — Aplicações Práticas e Reabilitação",
    short: "Ortobiologia e musculoesquelético",
    body: "Discussão de ortobiologia, sistema musculoesquelético e reabilitação, considerando evidências e limites das aplicações estudadas.",
    chips: ["Articulações", "Tendões", "Reabilitação"],
  },
  {
    n: 6,
    eixo: "II",
    title: "Dermatologia e Estética Regenerativa — Rejuvenescimento e Reparo Cutâneo",
    short: "Dermatologia e estética regenerativa",
    body: "Estudo da biologia do reparo cutâneo e dos temas de dermatologia e estética regenerativa, com discussão crítica das abordagens.",
    chips: ["Rejuvenescimento", "Reparo cutâneo", "Cicatrização"],
  },
  {
    n: 7,
    eixo: "II",
    title: "Regenerativa e Especialidades — Neurologia e Cardiologia",
    short: "Neurologia e cardiologia",
    body: "Panorama da pesquisa em neurologia e cardiologia, distinguindo resultados publicados, hipóteses e limitações.",
    chips: ["Neurologia", "Cardiologia", "Evidência"],
  },
  {
    n: 8,
    eixo: "II",
    title: "Oncologia Regenerativa, Imunoterapia e Fronteiras do Câncer",
    short: "Oncologia regenerativa e imunoterapia",
    body: "Discussão de oncologia, imunoterapia e fronteiras da pesquisa, considerando evidências, segurança e limites de interpretação.",
    chips: ["Imunoterapia", "Fronteiras", "Segurança"],
  },
  {
    n: 9,
    eixo: "II",
    title: "Manejo da Dor na Medicina Regenerativa",
    short: "Manejo da dor",
    body: "Estudo do manejo da dor e das abordagens discutidas em Medicina Regenerativa, com análise de evidências e acompanhamento.",
    chips: ["Dor crônica", "Infiltrações", "Acompanhamento"],
  },
  {
    n: 10,
    eixo: "II",
    title: "Medicina Regenerativa no Esporte e Alta Performance",
    short: "Esporte e alta performance",
    body: "Discussão da Medicina Regenerativa no esporte e na alta performance, com avaliação crítica de aplicações e limitações.",
    chips: ["Atletas", "Recuperação", "Performance"],
  },
  {
    n: 11,
    eixo: "III",
    title: "Peptídeos e Biohacking",
    short: "Peptídeos e biohacking",
    body: "Estudo de peptídeos e biohacking, com discussão de mecanismos, evidências, segurança e contexto regulatório.",
    chips: ["Peptídeos", "Biohacking", "Protocolos"],
  },
  {
    n: 12,
    eixo: "III",
    title: "Produção Científica em Pesquisa Clínica",
    short: "Produção científica e pesquisa",
    body: "Fundamentos da produção científica em pesquisa clínica: desenho de estudos, leitura crítica e organização de trabalhos científicos.",
    chips: ["Pesquisa clínica", "Metodologia", "Publicação"],
  },
];

const eixos = {
  I: { label: "Eixo I", name: "Fundamentos e terapias", grad: "from-gold-300/30 via-gold-500/10 to-transparent", ring: "text-gold-200" },
  II: { label: "Eixo II", name: "Aplicações clínicas", grad: "from-blue-400/30 via-blue-600/10 to-transparent", ring: "text-blue-300" },
  III: { label: "Eixo III", name: "Fronteiras e pesquisa", grad: "from-navy-500/50 via-blue-600/15 to-transparent", ring: "text-blue-200" },
} as const;

const icons = [IconDna, IconCell, IconSpark, IconMicroscope];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const current = modules[active];
  const Icon = icons[active % icons.length];
  const eixo = eixos[current.eixo];

  return (
    <section id="modulos" className="relative pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="left"
          eyebrow="Grade curricular"
          title={
            <>
              12 módulos em <span className="text-gradient">3 eixos</span> para ampliar sua formação médica
            </>
          }
          description="Uma trilha progressiva: primeiro a ciência, depois as terapias, por fim as aplicações clínicas e as fronteiras do campo."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[400px_1fr] lg:gap-10">
          {/* Lista de módulos */}
          <Reveal dir="left">
            <div className="scrollbar-none -mx-5 flex gap-6 overflow-x-auto px-5 pb-2 lg:mx-0 lg:block lg:overflow-visible lg:px-0 lg:pb-0">
              {(["I", "II", "III"] as const).map((e) => (
                <div key={e} className="flex shrink-0 flex-col gap-2 lg:mb-6 lg:last:mb-0">
                  <p className="mb-1 flex items-center gap-2 px-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-300 lg:mb-2">
                    {eixos[e].label}
                    <span className="font-medium normal-case tracking-normal text-slate-500">
                      · {eixos[e].name}
                    </span>
                  </p>
                  <div className="flex gap-2 lg:flex-col">
                    {modules
                      .map((m, i) => ({ m, i }))
                      .filter(({ m }) => m.eixo === e)
                      .map(({ m, i }) => {
                        const isActive = i === active;
                        return (
                          <button
                            key={m.n}
                            type="button"
                            aria-pressed={isActive}
                            aria-controls="module-panel"
                            onClick={() => setActive(i)}
                            className={cn(
                              "group relative flex w-[220px] shrink-0 items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition-all duration-400 lg:w-full",
                              isActive
                                ? "border-gold-300/40 bg-gradient-to-r from-gold-400/[0.12] to-transparent"
                                : "border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05]",
                            )}
                          >
                            <span
                              className={cn(
                                "absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r-full bg-gradient-to-b from-gold-300 to-blue-400 transition-opacity duration-400",
                                isActive ? "opacity-100" : "opacity-0",
                              )}
                            />
                            <span
                              className={cn(
                                "font-display text-[12px] font-bold tabular-nums transition-colors",
                                isActive ? "text-gold-300" : "text-slate-600",
                              )}
                            >
                              {String(m.n).padStart(2, "0")}
                            </span>
                            <span
                              className={cn(
                                "font-display text-[13.5px] font-semibold leading-snug tracking-tight transition-colors",
                                isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200",
                              )}
                            >
                              {m.short}
                            </span>
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Painel do módulo */}
          <Reveal dir="right" delay={120}>
            <div
              id="module-panel"
              aria-live="polite"
              className="glass relative h-full overflow-hidden rounded-[1.75rem] shadow-[0_40px_100px_-50px_rgba(0,0,0,1)]"
            >
              <div className={cn("relative flex h-56 items-end overflow-hidden bg-gradient-to-br p-7 sm:h-64 sm:p-9", eixo.grad)}>
                <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
                <div
                  aria-hidden
                  className="anim-floaty absolute -right-10 -top-10 h-56 w-56 rounded-full border border-white/10"
                />
                <div
                  aria-hidden
                  className="anim-floaty absolute -right-2 top-6 h-36 w-36 rounded-full border border-dashed border-white/15"
                  style={{ animationDelay: "-3s" }}
                />
                <span
                  key={`num-${current.n}`}
                  className="anim-rise absolute right-7 top-4 font-display text-[7rem] font-extrabold leading-none tracking-[-0.06em] text-white/[0.09] sm:right-10 sm:text-[9rem]"
                >
                  {String(current.n).padStart(2, "0")}
                </span>
                <div className="relative flex w-full items-end justify-between gap-4">
                  <span className={cn("flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-ink-950/50 backdrop-blur", eixo.ring)}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="glass rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-200">
                    {eixo.label} · Módulo {current.n} de 12
                  </span>
                </div>
              </div>

              <div key={current.n} className="anim-rise p-7 sm:p-9">
                <h3 className="font-display text-[21px] font-bold leading-snug tracking-tight text-white sm:text-[24px]">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400">{current.body}</p>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {current.chips.map((c, i) => (
                    <li
                      key={c}
                      className="anim-rise inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-[13px] text-slate-300"
                      style={{ animationDelay: `${120 + i * 90}ms` }}
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                        <IconCheck className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <div className="mb-2 flex items-center justify-between text-[11.5px] text-slate-500">
                    <span>Progresso da trilha</span>
                    <span className="tabular-nums">{Math.round(((active + 1) / modules.length) * 100)}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-blue-400 transition-[width] duration-700 ease-out"
                      style={{ width: `${((active + 1) / modules.length) * 100}%` }}
                    />
                  </div>
                </div>

                <a
                  href="#inscricao"
                  className="group mt-8 inline-flex items-center gap-2 font-display text-[14px] font-semibold text-gold-200 transition-colors hover:text-gold-300"
                >
                  Quero cursar a trilha completa
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
