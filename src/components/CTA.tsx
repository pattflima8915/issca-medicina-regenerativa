import { useEffect, useRef, useState, type FormEvent } from "react";
import { Aurora, Reveal } from "./primitives";
import { IconArrow, IconBook, IconPlane, IconVideo } from "./icons";

const perks = [
  { icon: IconBook, text: "360 horas · 12 módulos em 3 eixos" },
  { icon: IconVideo, text: "Aulas 100% EAD, no seu ritmo" },
  { icon: IconPlane, text: "Imersão opcional em Cancún" },
];

export default function CTA() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const submitting = useRef(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/5541995337000");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current || status === "success") return;
    submitting.current = true;
    setEmailWarning(false);
    const data = new FormData(event.currentTarget);
    const message = `Olá! Gostaria de informações sobre a formação ISSCA Brasil.\nNome: ${data.get("nome")}\nE-mail: ${data.get("email")}\nCRM / UF: ${data.get("crm")}\nWhatsApp: ${data.get("tel")}\nEspecialidade: ${data.get("esp")}`;
    setWhatsappUrl(`https://wa.me/5541995337000?text=${encodeURIComponent(message)}`);
    setStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/salvar-cadastro.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(data.entries()),
          name: data.get("nome"),
          message,
        }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== "true")) throw new Error("Submission failed");
      setStatus("success");
      // A falha do aviso não desfaz o cadastro confirmado no banco.
      const emailController = new AbortController();
      const emailTimeout = window.setTimeout(() => emailController.abort(), 15000);
      try {
        const emailResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...Object.fromEntries(data.entries()), name: data.get("nome"), message }),
          signal: emailController.signal,
        });
        const emailResult = await emailResponse.json();
        if (!emailResponse.ok || (emailResult.success !== true && emailResult.success !== "true")) {
          throw new Error("Email notification failed");
        }
      } catch {
        setEmailWarning(true);
      } finally {
        window.clearTimeout(emailTimeout);
      }
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
    }
  }
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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="subject" value="ISSCA Brasil — solicitação de informações do curso" />
                    <input type="hidden" name="access_key" value="8de615d0-f114-4a0b-bbef-a1d544074829" />
                    <input type="hidden" name="from_name" value="Site ISSCA Brasil" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
{status === "success" && (
  <p role="status" className="rounded-xl bg-green-900/40 p-4 text-sm text-green-200">
    Cadastro salvo com sucesso. A equipe da ISSCA poderá consultar sua solicitação.
  </p>
)}
{status === "success" && emailWarning && (
  <p role="status" className="rounded-xl bg-ink-950 p-4 text-sm text-slate-200">
    Seu cadastro está salvo, mas o aviso por e-mail não foi confirmado. Não é necessário reenviar.
  </p>
)}
{status === "error" && (
  <div role="alert" className="rounded-xl border border-gold-300/30 bg-ink-950 p-4 text-sm text-slate-200">
    <p>Não foi possível confirmar o cadastro. Seus dados continuam preenchidos. Você pode tentar novamente ou continuar pelo WhatsApp.</p>
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-gold-200 underline">Continuar pelo WhatsApp com meus dados</a>
    <p className="mt-2 text-xs">A mensagem será preparada; toque em enviar no WhatsApp para concluir.</p>
  </div>
)}
                 <h3 className="font-display text-[17px] font-bold tracking-tight text-white">
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
                      disabled={!ready || status === "sending" || status === "success"}
                      className="btn-glow group relative mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-6 py-3.5 font-display text-[15px] font-bold tracking-tight text-navy-900 shadow-[0_12px_40px_-12px_rgba(240,178,64,0.8)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70"
                    >
                      <span className="relative z-10 inline-flex items-center gap-2">
                        {!ready ? "Preparando formulário…" : status === "sending" ? "Enviando…" : status === "success" ? "Cadastro recebido" : "Solicitar informações"}
                        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>

                    <p className="text-center text-[11.5px] leading-relaxed text-slate-500">
                      Os dados serão armazenados pela ISSCA para contato sobre o curso. Uma cópia será encaminhada por e-mail por meio do Web3Forms.
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
              <a href="https://wa.me/5541995337000?text=Ol%C3%A1%21%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20forma%C3%A7%C3%A3o%20ISSCA%20Brasil." className="font-semibold text-white transition-colors hover:text-gold-200">
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

