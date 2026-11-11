import SectionHeading from "../components/SectionHeading";
import { DropletIcon, RecycleIcon, SproutIcon, TreeIcon } from "../components/Icons";
import { topics } from "../data/content";
import type { ComponentType, SVGProps } from "react";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "horta-em-casa": SproutIcon,
  sustentabilidade: RecycleIcon,
  "economia-de-agua": DropletIcon,
  "preservacao-ambiental": TreeIcon,
};

const summaries: Record<string, string> = {
  "horta-em-casa": "Como começar, o que plantar e como cuidar, mesmo em pouco espaço.",
  sustentabilidade: "Reutilização, compostagem e consumo consciente dentro de casa.",
  "economia-de-agua": "Rega inteligente, melhores horários e reaproveitamento seguro.",
  "preservacao-ambiental": "Áreas verdes, biodiversidade e o papel de cada pessoa.",
};

export default function TopicsOverview() {
  return (
    <section aria-labelledby="temas-title" className="section-pad">
      <div className="container-page">
        <SectionHeading
          id="temas-title"
          kicker="O que você vai encontrar"
          title="Quatro temas para começar a transformar seu espaço"
          intro="Escolha por onde quer começar. Cada tema tem explicações práticas, passo a passo e dicas para o dia a dia."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => {
            const Icon = icons[topic.id];
            return (
              <li key={topic.id}>
                <a
                  href={`#${topic.id}`}
                  className="card group flex h-full flex-col transition hover:-translate-y-1 hover:border-leaf-300 hover:shadow-md"
                >
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold">{topic.navLabel}</h3>
                  <p className="mt-2 flex-1 text-[0.97rem] text-leaf-800/80">{summaries[topic.id]}</p>
                  <span className="mt-4 text-sm font-semibold text-leaf-700 group-hover:underline">Ver conteúdo →</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
