import SectionHeading from "../components/SectionHeading";
import RadioGroup from "../components/form/RadioGroup";
import TextField from "../components/form/TextField";
import { AlertIcon, CheckIcon, LockIcon } from "../components/Icons";
import { useSurveyForm } from "../hooks/useSurveyForm";
import { getStorageProvider } from "../services/surveyService";
import { MAX_COMMENTS, MAX_NAME } from "../services/validation";
import {
  hadGardenOptions,
  learnedNewOptions,
  mostInterestingOptions,
  preparedScale,
  qualityScale,
  willApplyOptions,
  wouldRecommendOptions,
} from "../data/surveyOptions";

export default function Participe() {
  const { form, errors, status, formRef, setField, handleSubmit, reset } = useSurveyForm();
  const configured = getStorageProvider() !== "none";
  const submitting = status.kind === "submitting";
  const errorCount = Object.keys(errors).length;

  return (
    <section id="participe" aria-labelledby="participe-title" className="section-pad bg-leaf-50">
      <div className="container-page">
        <SectionHeading
          id="participe-title"
          kicker="Sua opinião é importante"
          title="Participe da nossa pesquisa"
          intro="Depois de conhecer os conteúdos, conte para nós o que você achou. Leva cerca de 3 minutos e ajuda a melhorar este projeto de educação ambiental."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1" aria-labelledby="privacidade-title">
            <div className="card">
              <h3 id="privacidade-title" className="flex items-center gap-2 text-xl font-bold">
                <LockIcon className="h-5 w-5 text-leaf-600" />
                Aviso de privacidade
              </h3>
              <div className="mt-3 space-y-3 text-[0.95rem] text-leaf-800/85">
                <p>
                  <strong>Finalidade:</strong> as respostas serão usadas apenas para avaliar os conteúdos educativos do
                  HortaLink Digital e melhorar o projeto de extensão universitária.
                </p>
                <p>
                  <strong>Dados coletados:</strong> apenas as respostas do questionário. O nome é opcional. Não pedimos
                  e-mail, telefone, CPF, endereço ou qualquer outro dado pessoal.
                </p>
                <p>
                  <strong>Cuidado ao comentar:</strong> não escreva informações pessoais ou de terceiros no campo de
                  comentários.
                </p>
                <p>
                  <strong>Uso dos resultados:</strong> os dados poderão ser analisados de forma agrupada e apresentados
                  sem identificar quem respondeu. A participação é voluntária e você pode deixar de responder a qualquer
                  momento.
                </p>
                <p>
                  Para pedir a exclusão de uma resposta enviada com seu nome, entre em contato com a equipe do projeto
                  pelo canal divulgado na atividade.
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2">
            {status.kind === "success" ? (
              <div
                role="status"
                className="rounded-2xl border border-leaf-300 bg-white p-8 text-center shadow-sm sm:p-12"
              >
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                  <CheckIcon className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-2xl font-bold sm:text-3xl">Obrigado por participar!</h3>
                <p className="mx-auto mt-3 max-w-md text-leaf-800/85">
                  Sua resposta foi enviada. Ela vai nos ajudar a melhorar o HortaLink Digital. Que tal começar com um
                  vasinho de tempero hoje?
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 inline-flex min-h-12 items-center rounded-full border border-leaf-300 px-6 py-3 font-semibold text-leaf-800 hover:bg-leaf-50"
                >
                  Enviar outra resposta
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Questionário de avaliação do HortaLink Digital"
                className="space-y-8 rounded-2xl border border-sand-200 bg-white p-6 shadow-sm sm:p-8"
              >
                {!configured && (
                  <p
                    role="note"
                    className="flex items-start gap-2 rounded-xl bg-sand-100 p-4 text-sm text-leaf-900 ring-1 ring-sand-300"
                  >
                    <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay-600" />
                    <span>
                      <strong>Aviso para a equipe:</strong> o armazenamento das respostas ainda não foi configurado
                      (veja o README). Enquanto isso, nenhuma resposta será enviada.
                    </span>
                  </p>
                )}

                {errorCount > 0 && (
                  <p role="alert" className="rounded-xl bg-clay-500/10 p-4 text-sm font-semibold text-clay-600">
                    Faltam {errorCount} {errorCount === 1 ? "item" : "itens"} para enviar. Confira os campos marcados.
                  </p>
                )}

                <TextField
                  id="name"
                  label="1. Seu nome"
                  hint="Você pode deixar em branco e participar de forma anônima."
                  maxLength={MAX_NAME}
                  autoComplete="given-name"
                  value={form.name}
                  onChange={(v) => setField("name", v)}
                  error={errors.name}
                />

                <RadioGroup
                  name="hadGarden"
                  legend="2. Você já cultivava plantas ou alimentos em casa antes de conhecer o projeto?"
                  options={hadGardenOptions}
                  value={form.hadGarden}
                  onChange={(v) => setField("hadGarden", v as typeof form.hadGarden)}
                  error={errors.hadGarden}
                />

                <RadioGroup
                  name="learnedNew"
                  legend="3. Você aprendeu algo novo com os conteúdos apresentados?"
                  options={learnedNewOptions}
                  value={form.learnedNew}
                  onChange={(v) => setField("learnedNew", v as typeof form.learnedNew)}
                  error={errors.learnedNew}
                />

                <RadioGroup
                  name="mostInteresting"
                  legend="4. Qual conteúdo foi mais interessante?"
                  options={mostInterestingOptions}
                  value={form.mostInteresting}
                  onChange={(v) => setField("mostInteresting", v as typeof form.mostInteresting)}
                  error={errors.mostInteresting}
                />

                <RadioGroup
                  name="willApply"
                  legend="5. Você pretende aplicar alguma das práticas apresentadas?"
                  options={willApplyOptions}
                  value={form.willApply}
                  onChange={(v) => setField("willApply", v as typeof form.willApply)}
                  error={errors.willApply}
                />

                <RadioGroup
                  name="feelsPrepared"
                  legend="6. Depois de conhecer o projeto, você se sente mais preparado(a) para iniciar uma pequena horta?"
                  options={preparedScale}
                  value={form.feelsPrepared}
                  onChange={(v) => setField("feelsPrepared", v as typeof form.feelsPrepared)}
                  error={errors.feelsPrepared}
                  layout="scale"
                />

                <RadioGroup
                  name="infoQuality"
                  legend="7. Como você avalia a qualidade das informações?"
                  options={qualityScale}
                  value={form.infoQuality}
                  onChange={(v) => setField("infoQuality", v as typeof form.infoQuality)}
                  error={errors.infoQuality}
                  layout="scale"
                />

                <RadioGroup
                  name="wouldRecommend"
                  legend="8. Você recomendaria o conteúdo para outras pessoas?"
                  options={wouldRecommendOptions}
                  value={form.wouldRecommend}
                  onChange={(v) => setField("wouldRecommend", v as typeof form.wouldRecommend)}
                  error={errors.wouldRecommend}
                />

                <TextField
                  id="comments"
                  label="9. Sugestões, comentários ou críticas"
                  hint="Não inclua dados pessoais seus ou de outras pessoas."
                  multiline
                  rows={5}
                  maxLength={MAX_COMMENTS}
                  value={form.comments}
                  onChange={(v) => setField("comments", v)}
                  error={errors.comments}
                />

                {/* Campo-isca: invisível para pessoas, robôs costumam preencher. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Não preencha este campo</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setField("website", e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="consent"
                    className="flex cursor-pointer items-start gap-3 rounded-xl bg-leaf-50 p-4 text-[0.95rem] has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-clay-500"
                  >
                    <input
                      id="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setField("consent", e.target.checked)}
                      aria-invalid={errors.consent ? true : undefined}
                      aria-describedby={errors.consent ? "consent-error" : undefined}
                      className="mt-1 h-5 w-5 shrink-0 accent-leaf-700"
                    />
                    <span>
                      Li o aviso de privacidade e concordo em enviar minhas respostas para fins de avaliação do projeto.
                      <span className="ml-1 text-clay-600" aria-hidden="true">
                        *
                      </span>
                      <span className="sr-only"> (obrigatório)</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" role="alert" className="mt-2 text-sm font-medium text-clay-600">
                      {errors.consent}
                    </p>
                  )}
                </div>

                {status.kind === "error" && (
                  <p
                    role="alert"
                    className="flex items-start gap-2 rounded-xl bg-clay-500/10 p-4 text-[0.95rem] font-medium text-clay-600"
                  >
                    <AlertIcon className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>{status.message}</span>
                  </p>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-leaf-700 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-leaf-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Enviando..." : "Enviar minhas respostas"}
                  </button>
                  <p className="text-sm text-leaf-800/70">Campos com * são obrigatórios.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
