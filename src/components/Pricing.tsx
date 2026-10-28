import { Button, Reveal, SectionHeading, SpotlightCard } from "./primitives";
import { IconCheck, IconGlobe, IconPlane, IconShield } from "./icons";

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

const INSTALLMENTS = 12;

const plans = [
  {
    id: "opcao-1",
    label: "Opção 1",
    title: "Certificação EAD ISSCA Brasil",
    monthly: 2500,
    highlight: false,
    badge: null as string | null,
    features: [
      "360 horas de conteúdo certificado",
      "12 módulos 100% EAD em 3 eixos",
      "Professores nacionais e internacionais",
      "Certificado de conclusão ISSCA Brasil",
      "Aulas no seu ritmo, com acompanhamento",
    ],
  },
  {
    id: "opcao-2",
    label: "Opção 2",
    title: "Certificação EAD ISSCA Brasil + conteúdo da formação ISSCA EUA",
    monthly: 4200,
    highlight: true,
    badge: "Mais completa",
    features: [
      "Tudo da Opção 1",
      "Acesso online ao conteúdo da certificação ISSCA americana",
      "Conteúdo com os professores internacionais",
      "Visão internacional da Medicina Regenerativa",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="investimento" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-16 h-96 w-[55rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(47,124,246,0.14),transparent_70%)] blur-2xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Investimento"
          title={
            <>
              Escolha a sua <span className="text-gradient">formação ISSCA Brasil</span>
            </>
          }
          description="Duas opções de matrícula, em 12 parcelas mensais. O complemento opcional de imersão em Cancún pode ser somado a qualquer uma delas, com valor à parte."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 120} dir={i === 0 ? "left" : "right"}>
              <SpotlightCard
                className={
                  p.highlight
                    ? "relative h-full overflow-hidden rounded-[1.75rem] border border-gold-300/35 bg-gradient-to-b from-gold-400/[0.12] via-white/[0.035] to-transparent p-8 shadow-[0_40px_100px_-45px_rgba(240,178,64,0.6)] transition-all duration-500 hover:-translate-y-1.5 sm:p-10"
                    : "relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15 sm:p-10"
                }
              >
                {p.badge && (
                  <span className="absolute right-6 top-6 rounded-full bg-gold-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-200">
                    {p.badge}
                  </span>
                )}

                <div className="relative z-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-200">{p.label}</p>
                  <h3 className="mt-3 max-w-md font-display text-[22px] font-bold leading-snug tracking-tight text-white sm:text-[24px]">
                    {p.title}
                  </h3>

                  <div className="mt-8">
                    <p className="text-[12px] text-slate-500">Valor mensal</p>
                    <p className="mt-1 font-display text-[2.6rem] font-extrabold leading-none tracking-[-0.045em] text-white sm:text-[3rem]">
                      {brl(p.monthly)}
                    </p>
                    <p className="mt-3 text-[14px] text-slate-300">
                      {INSTALLMENTS} parcelas mensais de{" "}
                      <span className="font-semibold text-white">{brl(p.monthly)}</span>
                    </p>
                  </div>

                  <Button href={`https://wa.me/5541995337000?text=${encodeURIComponent(`Olá! Tenho interesse em fazer a matrícula na ${p.label} da certificação ISSCA Brasil.`)}`} variant={p.highlight ? "primary" : "outline"} className="mt-8 w-full">
                    Fazer matrícula · WhatsApp
                  </Button>

                  <ul className="mt-8 space-y-3.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14.5px] leading-snug text-slate-300">
                        <span
                          className={
                            p.highlight
                              ? "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-gold-200"
                              : "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-slate-300"
                          }
                        >
                          <IconCheck className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* complementos opcionais */}
        <div className="mt-12">
          <Reveal>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Complementos opcionais
            </p>
          </Reveal>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Reveal delay={60}>
              <div className="glass flex h-full items-start gap-4 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-200">
                  <IconPlane className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[15.5px] font-bold text-white">Semana de imersão em Cancún</p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-400">
                    No Cellular Hope Institute (Cellular Institute). Complemento opcional, com valor à parte, não
                    incluso na formação.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="glass flex h-full items-start gap-4 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <IconGlobe className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[15.5px] font-bold text-white">Acesso à formação ISSCA EUA</p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-400">
                    Conteúdo online da certificação ISSCA americana. Incluído na Opção 2.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <p className="glass inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl px-5 py-3.5 text-center text-[13.5px] text-slate-300">
            <IconShield className="h-5 w-5 shrink-0 text-gold-300" />
            Dúvidas? Fale com a coordenação pelo WhatsApp{" "}
            <a
              href="https://wa.me/5541995337000"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-gold-300/60 underline-offset-4 transition-colors hover:text-gold-200"
            >
              (41) 99533-7000
            </a>
            ·
            <a
              href="https://www.issca.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-gold-300/60 underline-offset-4 transition-colors hover:text-gold-200"
            >
              www.issca.com.br
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
