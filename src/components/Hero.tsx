import { Aurora, Button, CountUp, Eyebrow } from "./primitives";
import { IssCaLogo } from "./Logo";
import { IconArrow, IconBook, IconPin, IconPlane, IconUsers, IconVideo } from "./icons";

// dpr trimmed from 2 to 1.5: cuts transferred bytes for the LCP image while
// still looking sharp on retina screens at the rendered size.
const HERO_IMG =
  "https://images.pexels.com/photos/8532858/pexels-photo-8532858.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=1100&w=820";

const stats = [
  { value: 360, suffix: "h", label: "Carga horária" },
  { value: 12, suffix: "", label: "Módulos EAD" },
  { value: 17, suffix: " anos", label: "Medicina Regenerativa" },
  { value: 25, suffix: "+", label: "Países de atuação" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-36">
      <Aurora />
      <div aria-hidden className="absolute inset-0 grid-lines opacity-70" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* -------- Copy -------- */}
        <div className="max-w-2xl">
          <div className="">
            <Eyebrow>Matrículas abertas · ISSCA Brasil</Eyebrow>
          </div>

          <h1
            className="mt-7 font-display text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.042em] text-white"
          >
            <span className="text-shimmer">Medicina Regenerativa:</span> conhecimento para avaliar evidências e ampliar sua formação
          </h1>

          <p
            className="mt-5 max-w-xl text-[16px] leading-relaxed text-slate-400 sm:text-[16px]"
          >
            Certificação para médicos, sob responsabilidade da ISSCA Internacional, com 360 horas e 12 módulos EAD. Conteúdo com professores nacionais e internacionais, webinar ao vivo mensal, fórum de discussão e mentoria em grupo.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#inscricao" size="lg">
              Receber a ementa completa
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="https://wa.me/5541995337000" variant="outline" size="lg">
              <IconBook className="h-4 w-4 text-gold-300" />
              Conversar sobre matrícula
            </Button>
          </div>

          <div
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-slate-400"
          >
            <span className="inline-flex items-center gap-2">
              <IconVideo className="h-4 w-4 text-blue-400" />
              EAD + encontros mensais ao vivo
            </span>
            <span className="inline-flex items-center gap-2">
              <IconUsers className="h-4 w-4 text-blue-400" />
              Docentes nacionais e internacionais
            </span>
            <span className="inline-flex items-center gap-2">
              <IconPin className="h-4 w-4 text-blue-400" />
              Sede em São Paulo
            </span>
          </div>

          <dl
            className="mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.05] sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-950/70 px-4 py-5 backdrop-blur-sm">
                <dt className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-[1.6rem]">
                  <CountUp to={s.value} suffix={s.suffix} immediate />
                </dt>
                <dd className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-slate-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* -------- Visual -------- */}
        <div className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="anim-spin-slow absolute -inset-10 rounded-full border border-dashed border-gold-300/10"
            />
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 shadow-[0_50px_120px_-40px_rgba(0,0,0,1)]">
              <img
                src={HERO_IMG}
                alt="Médico pesquisador analisando amostras em laboratório de Medicina Regenerativa"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={820}
                height={1100}
                className="h-[26rem] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 sm:h-[32rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 pb-28">
                <p className="font-display text-sm font-semibold text-white">Atualização e discussão científica</p>
                <p className="mt-1 text-[13px] text-slate-300">
                  Fundamentos, aplicações e pesquisa em Medicina Regenerativa
                </p>
              </div>
            </div>

            {/* placa com a logo vetorizada */}
            <div className="logo-plate anim-floaty absolute -bottom-8 left-4 rounded-2xl px-5 py-4 sm:left-6">
              <IssCaLogo size="md" />
            </div>

            <div
              className="glass anim-floaty absolute -right-3 top-10 hidden rounded-2xl px-4 py-3 shadow-2xl sm:block lg:-right-8"
              style={{ animationDelay: "-4.5s" }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-400/20 text-gold-200">
                  <IconPlane className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-white">Imersão opcional</p>
                  <p className="text-[11px] text-slate-400">Cancún · Cellular Hope Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

