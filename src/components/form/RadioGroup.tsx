interface RadioGroupProps {
  name: string;
  legend: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  /** Exibe as opções lado a lado (útil para escalas de 1 a 5). */
  layout?: "stack" | "scale";
}

export default function RadioGroup({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  required = true,
  layout = "stack",
}: RadioGroupProps) {
  const errorId = `${name}-error`;
  return (
    <fieldset aria-describedby={error ? errorId : undefined} aria-invalid={error ? true : undefined}>
      <legend className="mb-3 text-base font-semibold text-leaf-900">
        {legend}
        {required && (
          <span className="ml-1 text-clay-600" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only"> (obrigatório)</span>}
      </legend>

      <div className={layout === "scale" ? "grid gap-2 sm:grid-cols-5" : "grid gap-2"}>
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 text-[0.97rem] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-clay-500 ${
                checked ? "border-leaf-600 bg-leaf-100 font-medium" : "border-sand-300 bg-white hover:border-leaf-300"
              } ${layout === "scale" ? "sm:flex-col sm:justify-center sm:text-center" : ""}`}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                className="h-5 w-5 shrink-0 accent-leaf-700"
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>

      {error && (
        <p id={errorId} role="alert" className="mt-2 text-sm font-medium text-clay-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
