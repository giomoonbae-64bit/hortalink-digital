import SectionHeading from "../components/SectionHeading";
import { AlertIcon, SunIcon } from "../components/Icons";
import type { TopicContent } from "../data/content";

interface TopicSectionProps {
  topic: TopicContent;
  /** Alterna o fundo para criar ritmo visual entre as seções. */
  tone?: "light" | "sand";
  /** Inverte a posição da imagem no desktop. */
  reverse?: boolean;
}

export default function TopicSection({ topic, tone = "light", reverse = false }: TopicSectionProps) {
  const titleId = `${topic.id}-title`;
  return (
    <section
      id={topic.id}
      aria-labelledby={titleId}
      className={`section-pad ${tone === "sand" ? "bg-sand-100" : "bg-sand-50"}`}
    >
      <div className="container-page">
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <SectionHeading id={titleId} kicker={topic.kicker} title={topic.title} intro={topic.intro} />
          <img
            src={topic.image}
            alt={topic.imageAlt}
            width={640}
            height={420}
            loading="lazy"
            decoding="async"
            className="w-full rounded-3xl border border-sand-200 bg-white shadow-md"
          />
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topic.items.map((item) => (
            <li key={item.title} className="card">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-[0.98rem] text-leaf-800/85">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sand-200 sm:p-8 lg:col-span-3">
            <h3 className="text-2xl font-bold">{topic.stepsTitle}</h3>
            <ol className="mt-5 space-y-4">
              {topic.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-700 text-sm font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <span className="text-[0.98rem]">
                    <span className="sr-only">Passo {index + 1}: </span>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="rounded-2xl bg-leaf-100 p-6 sm:p-8 lg:col-span-2" aria-label={topic.tipTitle}>
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <SunIcon className="h-6 w-6 text-clay-500" />
              {topic.tipTitle}
            </h3>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-[0.98rem] marker:text-leaf-500">
              {topic.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </aside>
        </div>

        {topic.note && (
          <p className="mt-6 flex items-start gap-2 rounded-xl bg-water-50 p-4 text-sm text-water-700">
            <AlertIcon className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{topic.note}</span>
          </p>
        )}
      </div>
    </section>
  );
}
