import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import TopicsOverview from "./sections/TopicsOverview";
import DailyActions from "./sections/DailyActions";
import TopicSection from "./sections/TopicSection";
import Participe from "./sections/Participe";
import About from "./sections/About";
import References from "./sections/References";
import { economiaDeAgua, hortaEmCasa, preservacaoAmbiental, sustentabilidade } from "./data/content";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <TopicsOverview />
        <TopicSection topic={hortaEmCasa} tone="sand" />
        <TopicSection topic={sustentabilidade} reverse />
        <TopicSection topic={economiaDeAgua} tone="sand" />
        <TopicSection topic={preservacaoAmbiental} reverse />
        <DailyActions />
        <Participe />
        <About />
        <References />
      </main>
      <Footer />
    </>
  );
}
