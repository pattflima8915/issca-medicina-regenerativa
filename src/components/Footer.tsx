import { IssCaLogo } from "./Logo";

const columns = [
  {
    title: "Programa",
    links: [
      { label: "Grade curricular", href: "#modulos" },
      { label: "Corpo docente", href: "#docentes" },
      { label: "Investimento", href: "#investimento" },
      { label: "Imersão opcional em Cancún", href: "#cancun" },
      { label: "Perguntas frequentes", href: "#faq" },
    ],
  },
  {
    title: "ISSCA",
    links: [
      { label: "17 anos de Medicina Regenerativa", href: "#programa" },
      { label: "Presença em mais de 25 países", href: "#programa" },
      { label: "A inovação como meta", href: "#programa" },
      { label: "Cellular Hope Institute", href: "#cancun" },
    ],
  },
];

const contacts = [
  { label: "WhatsApp", value: "(41) 99533-7000", href: "https://wa.me/5541995337000?text=Ol%C3%A1%21%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20forma%C3%A7%C3%A3o%20ISSCA%20Brasil." },
  { label: "WhatsApp", value: "Falar com a coordenação", href: "https://wa.me/5541995337000" },
  { label: "Site", value: "www.issca.com.br", href: "https://www.issca.com.br" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-950">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.5fr_1.3fr]">
          <div>
            <div className="logo-plate inline-flex rounded-2xl px-5 py-4">
              <IssCaLogo size="md" />
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-slate-500">
              A ISSCA Brasil leva a formação da International Society for Stem Cell Application ao médico
              brasileiro: 360 horas em 12 módulos EAD, professores nacionais e internacionais e inovação como
              meta para a formação médica.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-[14px] text-slate-500 transition-colors duration-300 hover:text-white"
                      >
                        <span className="h-px w-0 bg-gold-300 transition-all duration-300 group-hover:w-3" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white">Contato</p>
            <ul className="mt-5 space-y-4 text-[14px]">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex flex-col gap-0.5 text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {c.label}
                    </span>
                    {c.value}
                  </a>
                </li>
              ))}
              <li className="flex flex-col gap-0.5 text-slate-300">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Sede</span>
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-slate-600">
            © {new Date().getFullYear()} ISSCA Brasil · Certificação EAD em Medicina Regenerativa. Todos os direitos
            reservados.
          </p>
          <p className="text-[12.5px] text-slate-600">Conteúdo destinado a profissionais de saúde habilitados.</p>
        </div>
      </div>
    </footer>
  );
}

