import { useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { Reveal, SectionHeading } from "./primitives";
import { IconChevron } from "./icons";

const faqs = [
  {
    q: "Qual é a carga horária e como o curso é organizado?",
    a: "A pós-graduação tem 360 horas de conteúdo, distribuídas em 12 módulos organizados em três eixos: Fundamentos e terapias (módulos 1 a 3), Aplicações clínicas (módulos 4 a 10) e Fronteiras e pesquisa (módulos 11 e 12).",
  },
  {
    q: "As aulas são presenciais ou a distância?",
    a: "Os 12 módulos são 100% EAD, para você estudar no seu ritmo e conciliar com a rotina de consultório e hospital.",
  },
  {
    q: "O que é a imersão prática em Cancún?",
    a: "É uma semana presencial opcional no Cellular Hope Institute (Cellular Institute), em Cancún, para aprender na prática as aplicações regenerativas mais atuais. Não está incluída na formação base e tem valor à parte.",
  },
  {
    q: "O que inclui o acesso ao conteúdo da pós ISSCA americana?",
    a: "É um complemento online opcional: o conteúdo da pós-graduação da ISSCA dos Estados Unidos, com os melhores especialistas do mundo. Ele está incluído na Opção 2 da matrícula.",
  },
  {
    q: "Quais são as opções de investimento?",
    a: "A Opção 1 é a pós-graduação EAD ISSCA Brasil, em 12 parcelas mensais de R$ 2.500,00. A Opção 2 combina a pós EAD ISSCA Brasil com o conteúdo da pós ISSCA EUA, em 12 parcelas mensais de R$ 4.200,00.",
  },
  {
    q: "Quem são os professores?",
    a: "O corpo docente reúne professores nacionais e internacionais, com experiência clínica, científica e de sala de cirurgia.",
  },
  {
    q: "Há quanto tempo a ISSCA atua com Medicina Regenerativa?",
    a: "A ISSCA é uma Instituição Educacional que há 17 anos trabalha com Medicina Regenerativa no mundo, atuando em mais de 25 países, com a inovação como meta para a formação médica.",
  },
  {
    q: "Preciso ter experiência prévia com Medicina Regenerativa?",
    a: "Não é obrigatório. A formação começa pelos fundamentos da biologia do envelhecimento e das células-tronco, e avança para as aplicações clínicas. Médicos de diferentes especialidades podem se inscrever.",
  },
];

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `faq-panel-${index}`;
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Reveal delay={index * 60}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border transition-all duration-500",
          open
            ? "border-gold-300/30 bg-gradient-to-b from-gold-400/[0.08] to-transparent"
            : "border-white/[0.08] bg-white/[0.02] hover:border-white/15",
        )}
      >
        <h3>
          <button
            ref={btnRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
          >
            <span className="font-display text-[15.5px] font-semibold leading-snug tracking-tight text-white sm:text-[16.5px]">
              {q}
            </span>
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-400",
                open
                  ? "rotate-180 border-gold-300/40 bg-gold-400/15 text-gold-200"
                  : "border-white/10 text-slate-400",
              )}
            >
              <IconChevron className="h-4 w-4" />
            </span>
          </button>
        </h3>
        <div
          id={panelId}
          role="region"
          className={cn(
            "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-6 pr-12 text-[14.5px] leading-relaxed text-slate-400">{a}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Perguntas frequentes"
              title={
                <>
                  Tudo o que você precisa saber antes de <span className="text-gradient">se inscrever</span>
                </>
              }
              description="Não encontrou sua dúvida? A coordenação da ISSCA Brasil responde pessoalmente."
            />
            <Reveal delay={200}>
              <a
                href="https://wa.me/5541995337000"
                target="_blank"
                rel="noopener noreferrer"
                className="glass mt-8 inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <span className="relative flex h-2 w-2 text-gold-300 pulse-ring">
                  <span className="h-2 w-2 rounded-full bg-gold-300" />
                </span>
                Falar com a coordenação · (41) 99533-7000
              </a>
            </Reveal>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
