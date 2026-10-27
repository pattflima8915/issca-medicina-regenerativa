import { useState } from "react";
import { Reveal, SectionHeading, SpotlightCard } from "./primitives";

/* Fotos em src/assets/docentes (ordem alfabética: 01.jpg, 02.jpg …) */
const photoModules = import.meta.glob("../assets/docentes/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const photos = Object.keys(photoModules)
  .sort()
  .map((key) => photoModules[key]);

const faculty = [
  "Gisey Werneck",
  "Marcio Kume",
  "Rafael Rivas",
  "Elizete Kaffer",
  "Sideny Strey",
  "Gilberto Kocerginsky",
  "Edson Luiz Peracchi",
  "Sidnei Stey",
  "Rafael Rivas Pasco",
  "Ralf Batista Guimaraes",
  "Luis Felipe Castro Neves",
];

function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Portrait({ src, name }: { src: string | null; name: string }) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={`Retrato de ${name}`}
        loading="lazy"
        onError={() => setFailed(true)}
        style={{ objectPosition: "50% 22%" }}
        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gold-300/30 via-blue-500/25 to-navy-700/70 font-display text-4xl font-extrabold text-white/90">
      {initials(name)}
    </div>
  );
}

export default function Faculty() {
  return (
    <section id="docentes" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(240,178,64,0.10),transparent_65%)] blur-2xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Corpo docente"
          title={
            <>
              Aprenda com <span className="text-gradient">professores nacionais e internacionais</span>
            </>
          }
          description="Onze docentes de referência, reunidos para uma formação atualizada, prática e conectada ao que há de mais avançado no mundo."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {faculty.map((name, i) => (
            <Reveal key={name} delay={(i % 4) * 90} dir="up">
              <SpotlightCard className="group h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300/30 hover:shadow-[0_30px_60px_-35px_rgba(240,178,64,0.55)]">
                <div className="relative z-10">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
                    <Portrait src={photos[i] ?? null} name={name} />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-900 to-transparent" />
                  </div>
                  <div className="p-4 text-center sm:p-5">
                    <h3 className="font-display text-[14.5px] font-bold leading-snug tracking-tight text-white sm:text-[15.5px]">
                      {name}
                    </h3>
                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-300/80">
                      Docente ISSCA
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
