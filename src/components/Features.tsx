import { Reveal, SectionHeading, SpotlightCard } from "./primitives";
import { IconClock, IconGlobe, IconPlane, IconSpark, IconUsers, IconVideo } from "./icons";

const features = [
  {
    icon: IconClock,
    tag: "Carga horária",
    title: "360 horas de formação completa",
    body: "Um percurso denso e progressivo, da biologia do envelhecimento à produção científica, pensado para resultados clínicos reais.",
  },
  {
    icon: IconVideo,
    tag: "Ensino EAD",
    title: "12 módulos 100% a distância",
    body: "Estude no seu ritmo, com aulas dinâmicas, casos clínicos e acompanhamento da coordenação.",
  },
  {
    icon: IconUsers,
    tag: "Corpo docente",
    title: "Professores nacionais e internacionais",
    body: "Docentes de referência reúnem experiência clínica, científica e de sala de cirurgia em diferentes países.",
  },
  {
    icon: IconSpark,
    tag: "Inovação",
    title: "A inovação como meta da formação médica",
    body: "Do conteúdo às práticas, a formação acompanha o que há de mais atual em Medicina Regenerativa no mundo.",
  },
  {
    icon: IconPlane,
    tag: "Opcional",
    title: "Imersão prática em Cancún",
    body: "Uma semana no Cellular Hope Institute (Cellular Institute), com as práticas regenerativas mais atuais. Complemento com valor à parte.",
  },
  {
    icon: IconGlobe,
    tag: "Opcional",
    title: "Acesso à pós ISSCA americana",
    body: "Conteúdo online da pós-graduação ISSCA dos Estados Unidos, com os melhores especialistas do mundo. Incluído na Opção 2.",
  },
];

export default function Features() {
  return (
    <section id="programa" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(47,124,246,0.12),transparent_70%)] blur-2xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Por que a ISSCA Brasil"
          title={
            <>
              Muito mais que 360 horas de <span className="text-gradient">conteúdo de ponta</span>
            </>
          }
          description="Uma formação desenhada para médicos que querem liderar a Medicina Regenerativa no Brasil, com ciência, prática e conexão internacional."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} dir="up">
              <SpotlightCard className="group h-full rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300/30 hover:shadow-[0_30px_70px_-40px_rgba(240,178,64,0.55)]">
                <div className="relative z-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-gold-400/20 to-blue-500/15 text-gold-200 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {f.tag}
                  </p>
                  <h3 className="mt-2 font-display text-[19px] font-bold leading-snug tracking-tight text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slate-400">{f.body}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
