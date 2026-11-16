import SectionHeading from "../components/SectionHeading";
import { ChatIcon, MailIcon } from "../components/Icons";
import { project } from "../data/project";

export default function Contact() {
  const { contact } = project;

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-pad bg-leaf-50">
      <div className="container-page">
        <SectionHeading
          id="contato-title"
          kicker="Fale com a gente"
          title="Contato"
          intro="Tem dúvidas sobre os conteúdos, sobre a pesquisa ou quer fazer uma solicitação? Escolha o canal que for mais fácil para você."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href={`mailto:${contact.email}`}
            className="card flex gap-4 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-clay-500"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
              <MailIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-xl font-bold">E-mail</span>
              <span className="mt-1 block break-all font-semibold text-leaf-700 underline">{contact.email}</span>
              <span className="mt-1 block text-[0.95rem] text-leaf-800/85">Para dúvidas e solicitações em geral.</span>
            </span>
          </a>

          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex gap-4 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-clay-500"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700">
              <ChatIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-xl font-bold">WhatsApp</span>
              <span className="mt-1 block font-semibold text-leaf-700 underline">
                {contact.whatsappLabel}
                <span className="sr-only"> (abre em nova aba)</span>
              </span>
              <span className="mt-1 block text-[0.95rem] text-leaf-800/85">Mensagens de texto. Não atendemos ligações.</span>
            </span>
          </a>
        </div>

        <p className="mt-6 text-[0.95rem] text-leaf-800/85">
          <strong>Atendimento:</strong> {contact.hours}. {contact.responseTime}
        </p>
      </div>
    </section>
  );
}
