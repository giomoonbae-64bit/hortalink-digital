import SectionHeading from "../components/SectionHeading";
import { CapIcon, HeartIcon, UsersIcon } from "../components/Icons";
import { project } from "../data/project";

export default function About() {
  const { institution, team, mentor } = project;

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section-pad bg-sand-100">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <SectionHeading
            id="sobre-title"
            kicker="Quem somos"
            title="Sobre o HortaLink"
            intro="O HortaLink Digital é uma iniciativa de educação ambiental desenvolvida por estudantes da UNIFRAN, com o propósito de compartilhar conhecimentos e incentivar práticas sustentáveis nas residências e na comunidade."
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
                  Este site é a ferramenta principal de uma intervenção educativa realizada de forma online com pessoas
                  da comunidade, desenvolvida no DreamShaper.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 id="realizacao-title" className="text-2xl font-bold sm:text-3xl">
            Quem realiza o projeto
          </h3>
          <ul aria-labelledby="realizacao-title" className="mt-6 grid gap-5 md:grid-cols-3">
            <li className="card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
                <CapIcon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-leaf-600">Instituição</p>
              <p className="mt-1 text-xl font-bold">{institution.short}</p>
              <p className="text-[0.98rem] text-leaf-800/85">
                {institution.name} · {institution.city}
              </p>
            </li>
            <li className="card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
                <UsersIcon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-leaf-600">Equipe</p>
              <p className="mt-1 text-xl font-bold">{team.name}</p>
              <p className="text-[0.98rem] text-leaf-800/85">{team.description}</p>
              {team.members.length > 0 && (
                <p className="mt-2 text-[0.95rem] text-leaf-800/85">{team.members.join(" · ")}</p>
              )}
            </li>
            <li className="card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
                <HeartIcon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-leaf-600">{mentor.role}</p>
              <p className="mt-1 text-xl font-bold">{mentor.name}</p>
              <p className="text-[0.98rem] text-leaf-800/85">{mentor.description}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
