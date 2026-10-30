import { useEffect, useState } from "react";
import { Aurora, Reveal } from "./primitives";
import { IconArrow, IconBook, IconPlane, IconVideo } from "./icons";

const perks = [
  { icon: IconBook, text: "360 horas · 12 módulos em 3 eixos" },
  { icon: IconVideo, text: "Aulas 100% EAD, no seu ritmo" },
  { icon: IconPlane, text: "Imersão opcional em Cancún" },
];

export default function CTA() {
  const [origin, setOrigin] = useState("");
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setOrigin(window.location.origin);
    setSubmitted(new URLSearchParams(window.location.search).get("enviado") === "1");
  }, []);
  return (
    <section id="inscricao" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal dir="scale">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900/70 px-6 py-12 shadow-[0_60px_140px_-60px_rgba(0,0,0,1)] sm:px-10 sm:py-16 lg:px-16">
            <Aurora className="opacity-90" />
            <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />

            <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-300/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-200">
                  Matrículas abertas
                </span>
                <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.2rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-white">
                  Sua formação em{" "}
                  <span className="text-shimmer">Medicina Regenerativa</span> começa aqui
                </h2>
                <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-slate-400">
                  Preencha seus dados e receba a ementa completa, as duas opções de matrícula e o calendário.
                  A coordenação entra em contato para esclarecer tudo.
                </p>

                <ul className="mt-8 space-y-3">
                  {perks.map((p) => (
                    <li key={p.text} className="flex items-center gap-3 text-[14px] text-slate-300">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gold-200">
                        <p.icon className="h-4 w-4" />
                      </span>
                      {p.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* formulário */}
              <div className="glass rounded-[1.5rem] p-6 sm:p-8">
                  <form action="https://formsubmit.co/pyissca@gmail.com" method="POST" className="space-y-4">
                    <input type="hidden" name="_subject" value="ISSCA Brasil — solicitação de informações do curso" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
<input
  type="hidden"
  name="_next"
 value={`${origin}/?enviado=1#inscricao`}
/>   {submitted && (
  <p role="status" className="rounded-xl bg-green-900/40 p-4 text-sm text-green-200">
    Solicitação enviada com sucesso! Nossa equipe entrará em contato com você.
  </p>
)}                 <h3 className="font-display text-[17px] font-bold tracking-tight text-white">
                      Receber informações do curso
                    </h3>

                    <Field id="nome" label="Nome completo" placeholder="Dr(a). Nome Sobrenome" />
                    <Field id="email" label="E-mail" type="email" placeholder="voce@email.com.br" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field id="crm" label="CRM / UF" placeholder="123456 / SP" />
                      <Field id="tel" label="WhatsApp" type="tel" placeholder="(11) 99999-0000" />
                    </div>

                    <div>
                      <label htmlFor="esp" className="mb-1.5 block text-[12px] font-medium text-slate-400">
                        Especialidade
                      </label>
                      <select
                        id="esp"
                        name="esp"
                        defaultValue=""
                        required
                        className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-[14px] text-white outline-none transition-all duration-300 focus:border-gold-300/50 focus:bg-ink-950 focus:shadow-[0_0_0_4px_rgba(240,178,64,0.12)]"
                      >
                        <option value="" disabled>
                          Selecione…
                        </option>
                        {[
                          "Ortopedia e traumatologia",
                          "Dermatologia",
                          "Medicina esportiva",
                          "Clínica médica / Longevidade",
                          "Cirurgia plástica",
                          "Outra especialidade",
                        ].map((o) => (
                          <option key={o} value={o} className="bg-ink-900">
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn-glow group relative mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-6 py-3.5 font-display text-[15px] font-bold tracking-tight text-navy-900 shadow-[0_12px_40px_-12px_rgba(240,178,64,0.8)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70"
                    >
                      <span className="relative z-10 inline-flex items-center gap-2">
                        Solicitar informações
                        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>

                    <p className="text-center text-[11.5px] leading-relaxed text-slate-500">
                      Os dados serão enviados à equipe da ISSCA para contato sobre o curso, por meio do serviço FormSubmit.
                    </p>
                  </form>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-14 flex justify-center">
          <div className="flex flex-col items-center gap-5">
            <p className="text-center text-[14px] text-slate-400">
              Atendimento em São Paulo ·{" "}
              <a href="tel:+5541995337000" className="font-semibold text-white transition-colors hover:text-gold-200">
                (41) 99533-7000
              </a>{" "}
              ·{" "}
              <a
                href="https://www.issca.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition-colors hover:text-gold-200"
              >
                www.issca.com.br
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[12px] font-medium text-slate-400">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-[14px] text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-gold-300/50 focus:bg-ink-950 focus:shadow-[0_0_0_4px_rgba(240,178,64,0.12)]"
      />
    </div>
  );
}

