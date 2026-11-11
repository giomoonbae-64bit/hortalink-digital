import SectionHeading from "../components/SectionHeading";
import { HeartIcon, UsersIcon } from "../components/Icons";

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section-pad bg-sand-100">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
        <SectionHeading
          id="sobre-title"
          kicker="Quem somos"
          title="Sobre o HortaLink"
          intro="O HortaLink Digital é uma iniciativa de educação ambiental desenvolvida por estudantes universitários, com o propósito de compartilhar conhecimentos e incentivar práticas sustentáveis nas residências e na comunidade."
        />
        <div className="space-y-5">
          <div className="card flex gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
              <HeartIcon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-xl font-bold">Nosso propósito</h3>
              <p className="mt-1 text-[0.98rem] text-leaf-800/85">
                Conscientizar e incentivar mudanças positivas por meio da informação e da participação comunitária,
                valorizando atitudes simples que cabem na rotina de qualquer pessoa.
              </p>
            </div>
          </div>
          <div className="card flex gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
              <UsersIcon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-xl font-bold">Projeto de extensão universitária</h3>
              <p className="mt-1 text-[0.98rem] text-leaf-800/85">
                Este site é a ferramenta principal de uma intervenção educativa realizada de forma online com pessoas da
                comunidade, desenvolvida no DreamShaper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
