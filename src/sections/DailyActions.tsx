import { CheckIcon } from "../components/Icons";
import { dailyActions } from "../data/content";

export default function DailyActions() {
  return (
    <section aria-labelledby="atitudes-title" className="bg-leaf-800 py-16 text-sand-100 sm:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-leaf-300">No dia a dia</p>
          <h2 id="atitudes-title" className="font-display text-3xl font-bold text-white sm:text-4xl">
            Pequenas atitudes fazem diferença
          </h2>
          <p className="mt-4 text-lg text-leaf-100/90">
            Você não precisa mudar tudo de uma vez. Escolha uma ação por semana e transforme-a em hábito.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dailyActions.map((action) => (
            <li key={action.title} className="flex gap-4 rounded-2xl bg-leaf-700/60 p-5">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-300 text-leaf-900">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-sans text-lg font-semibold text-white">{action.title}</h3>
                <p className="mt-1 text-[0.97rem] text-leaf-100/90">{action.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
