import SectionHeading from "../components/SectionHeading";
import { ExternalLinkIcon } from "../components/Icons";
import { references } from "../data/references";

export default function References() {
  return (
    <section id="referencias" aria-labelledby="referencias-title" className="section-pad">
      <div className="container-page">
        <SectionHeading
          id="referencias-title"
          kicker="Fontes confiáveis"
          title="Referências e fontes consultadas"
          intro="Os conteúdos foram elaborados a partir de materiais de órgãos públicos e instituições de pesquisa. Acesse os documentos originais para se aprofundar."
        />
        <ol className="mt-10 space-y-4">
          {references.map((ref) => (
            <li key={ref.id} className="card">
              <p className="text-[0.95rem] text-leaf-800/90">
                <span className="text-xs font-semibold uppercase tracking-wide text-leaf-600">{ref.authors}.</span>{" "}
                <cite className="font-semibold not-italic text-leaf-900">{ref.title}.</cite> {ref.publisher}, {ref.year}.
              </p>
              <p className="mt-1 text-sm text-leaf-800/70">Utilizada em: {ref.usedIn}</p>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 break-all text-sm font-semibold text-water-700 underline underline-offset-2 hover:text-water-600"
              >
                Acessar documento
                <ExternalLinkIcon className="h-4 w-4 shrink-0" />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-leaf-800/70">
          As orientações do site são educativas e gerais. Para situações específicas (como pragas, uso de defensivos ou
          reuso de água), procure orientação técnica local.
        </p>
      </div>
    </section>
  );
}
