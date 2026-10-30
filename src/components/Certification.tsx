import { SectionHeading } from "./primitives";
export default function Certification() {
 const items = [
 ["Natureza da formação", "Certificação para médicos"],
 ["Instituição responsável", "ISSCA BRASIL"],
 ["Organização", "360 horas · 12 módulos EAD · 3 eixos"],
 ["Webinar ao vivo", "Encontro mensal para aprofundar o conteúdo"],
 ["Fórum de discussão", "Discussão do tema do módulo do mês"],
 ["Atividade dirigida", "Elaboração de protocolos próprios como atividade educacional, com análise crítica de evidências e limites"],
 ["Mentoria em grupo", "Discussão mensal em grupo"],
 ["Conclusão", "Consulte a coordenação sobre avaliações e eventual trabalho final"],
 ];
 return <section id="certificacao" className="scroll-mt-28 pt-12 pb-10 sm:pt-16 sm:pb-12"><div className="mx-auto max-w-7xl px-5 sm:px-8">
 <SectionHeading eyebrow="Formação e certificação" title="Como funciona a sua formação" description="Conteúdo EAD e encontros mensais para estudar, discutir e aprofundar temas de diferentes especialidades da medicina." />
 <dl className="mt-12 grid gap-5 md:grid-cols-2">{items.map(([title,body])=><div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><dt className="font-semibold text-gold-200">{title}</dt><dd className="mt-2 leading-relaxed text-slate-300">{body}</dd></div>)}</dl>
 <p className="mt-8 text-sm leading-relaxed text-slate-400">Antes da matrícula, consulte a coordenação sobre início da turma, duração, prazo de acesso, documentação e condições de emissão do certificado.</p>
 <a href="https://wa.me/5541995337000" className="mt-6 inline-block rounded-full bg-gold-300 px-6 py-3 font-semibold text-navy-900">Conhecer as informações da certificação</a>
 </div></section>;
}

