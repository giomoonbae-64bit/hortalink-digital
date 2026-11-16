import Logo from "./Logo";
import { navItems } from "../data/navigation";
import { project } from "../data/project";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-leaf-900 text-leaf-100">
      <div className="container-page grid gap-8 py-12 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-leaf-200">
            Iniciativa de educação ambiental desenvolvida por estudantes da {project.institution.short}.
          </p>
          <p className="mt-3 text-sm text-leaf-200">
            {project.team.name}
            <br />
            {project.mentor.role}: {project.mentor.name}
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-leaf-300">Navegação</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#participe" className="hover:text-white hover:underline">
                Participe da pesquisa
              </a>
            </li>
            <li>
              <a href="#referencias" className="hover:text-white hover:underline">
                Referências
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-leaf-300">O projeto</h2>
          <p className="mt-3 text-sm text-leaf-200">
            Projeto de extensão da {project.institution.name} ({project.institution.short}), desenvolvido no
            DreamShaper, voltado à educação ambiental e a práticas sustentáveis nas residências.
          </p>
          <p className="mt-3 text-sm text-leaf-200">
            Contato:{" "}
            <a href={`mailto:${project.contact.email}`} className="underline hover:text-white">
              {project.contact.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-leaf-800">
        <p className="container-page py-5 text-xs text-leaf-300">
          © {year} HortaLink Digital · {project.institution.short}. Conteúdo educativo, sem fins lucrativos.
        </p>
      </div>
    </footer>
  );
}
