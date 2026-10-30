import { Reveal, SectionHeading, SpotlightCard } from "./primitives";
import photo0 from "../assets/docentes/edson-peracchi.jpg";
import photo1 from "../assets/docentes/gisele-werneck.jpg";
import photo2 from "../assets/docentes/sideny-strey.jpg";
import photo3 from "../assets/docentes/rafael-rivas-pasco.jpg";
import photo4 from "../assets/docentes/rauph-guimaraes.jpg";
import photo5 from "../assets/docentes/elizete-kaffer.jpg";
import photo6 from "../assets/docentes/gilberto-kocerginsky.jpg";
import photo7 from "../assets/docentes/leticia-mason.jpg";
import photo8 from "../assets/docentes/marcio-kume.jpg";
const faculty = [
{ name: "Dr. Edson Luiz Peracchi", area: "Terreno Biológico", bio: "Médico, professor e empresário, com mais de três décadas de atuação profissional. Atua em medicina integrativa, regenerativa e longevidade ativa.", registration: "", photo: photo0 },
{ name: "Dra. Gisele Werneck", area: "Saúde metabólica e longevidade", bio: "Atuação voltada à saúde metabólica, nutrição, estética e longevidade, com abordagem individualizada do cuidado.", registration: "", photo: photo1 },
{ name: "Dr. Sideny Strey", area: "Dor e neuromodulação periférica", bio: "Graduado em Medicina pela UFCSPA. Tem experiência na Atenção Básica de Saúde do Rio Grande do Sul e no ensino de neuromodulação periférica. Foi diretor do Colégio Médico de Acupuntura do RS (2016–2017) e membro da Câmara Técnica de Acupuntura do CREMERS (2022–2023).", registration: "", photo: photo2 },
{ name: "Dr. Rafael Rivas Pasco", area: "Medicina do esporte e ultrassonografia", bio: "Médico do esporte e ultrassonografista. Membro do American College of Sports Medicine.", registration: "RQE 15008 · RQE 12184", photo: photo3 },
{ name: "Dr. Rauph Batista Guimarães", area: "Neurologia e neuromodulação", bio: "Graduado em Medicina pela UFJF, com residência pela PUCPR. Atua em neurologia e neuromodulação. Fundador do Neurobrain Integrative Institute, em Curitiba, e idealizador do Projeto Paraná Sem Dor.", registration: "", photo: photo4 },
{ name: "Dra. Elizete Kaffer", area: "Dermatologia e envelhecimento saudável", bio: "Formação em Medicina, Clínica Médica e Dermatologia pela Santa Casa de São Paulo. Formação complementar em Nutriendocrinologia Funcional e Gerenciamento do Envelhecimento Saudável pela FACIS. Fundadora e diretora clínica do Instituto Shalon desde 2004.", registration: "", photo: photo5 },
{ name: "Dr. Gilberto Kocerginsky", area: "Cirurgia geral e medicina esportiva", bio: "Graduado em Medicina pela Universidade Federal Fluminense (2001), com residência em Cirurgia Geral no HFSE. Fellow in Metabolic and Nutritional Medicine (MMI-USA) e pós-graduado em Medicina Esportiva pela APM/FAN.", registration: "", photo: photo6 },
{ name: "Dra. Letícia Vianna Mason", area: "Saúde metabólica e longevidade", bio: "Médica com atuação em medicina integrativa, saúde metabólica e longevidade, com foco no cuidado individualizado e no envelhecimento saudável.", registration: "", photo: photo7 },
{ name: "Dr. Márcio Kume", area: "Ortobiológicos", bio: "Mestre e doutor em Reparação Tecidual, com atuação no tratamento da dor e da artrose.", registration: "", photo: photo8 }
];
export default function Faculty() {
 return (
  <section id="docentes" className="relative py-24 sm:py-32">
   <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
    <SectionHeading eyebrow="Corpo docente" title={<>Conheça os <span className="text-gradient">professores da formação</span></>} description="Conheça a formação e as áreas de atuação dos nove docentes do programa ISSCA Brasil." />
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
     {faculty.map((person, index) => (
      <Reveal key={person.name} delay={(index % 3) * 70} dir="up">
       <SpotlightCard className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <article className="relative z-10 h-full">
         <div className="aspect-[4/5] overflow-hidden bg-ink-800">
          <img src={person.photo} alt={`Retrato de ${person.name}`} loading="lazy" className="h-full w-full object-cover" style={{objectPosition:"50% 20%"}} />
         </div>
         <div className="p-6">
          <h3 className="font-display text-lg font-bold leading-snug text-white">{person.name}</h3>
          <p className="mt-2 text-sm font-medium text-gold-200">{person.area}</p>
          {person.registration && <p className="mt-2 text-xs text-slate-400">{person.registration}</p>}
          <details className="mt-5 text-sm text-slate-300">
           <summary className="cursor-pointer rounded font-semibold text-gold-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-300">Conheça o currículo</summary>
           <p className="mt-3 leading-relaxed">{person.bio}</p>
          </details>
         </div>
        </article>
       </SpotlightCard>
      </Reveal>
     ))}
    </div>
   </div>
  </section>
 );
}

