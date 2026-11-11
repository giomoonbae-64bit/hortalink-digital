import LinkButton from "../components/LinkButton";

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-leaf-50">
      <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-3 inline-block rounded-full bg-leaf-100 px-4 py-1.5 text-sm font-semibold text-leaf-700">
            Educação ambiental · Projeto de extensão universitária
          </p>
          <h1 id="hero-title" className="text-4xl font-bold sm:text-5xl lg:text-[3.4rem]">
            Cultive sustentabilidade, transforme seu espaço!
          </h1>
          <p className="mt-5 max-w-xl text-lg text-leaf-800/85">
            O HortaLink Digital reúne dicas simples para começar uma horta em casa, reaproveitar materiais, aproveitar
            resíduos orgânicos e economizar água. Tudo em linguagem clara, para quem está começando agora.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#horta-em-casa">Explore nossos conteúdos</LinkButton>
            <LinkButton href="#participe" variant="secondary">
              Participe da nossa pesquisa
            </LinkButton>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/hero-horta.svg"
            alt="Ilustração de uma janela com vasos de temperos, folhosas e um regador, com luz do sol entrando."
            width={640}
            height={520}
            className="w-full rounded-3xl border border-leaf-100 shadow-lg"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
