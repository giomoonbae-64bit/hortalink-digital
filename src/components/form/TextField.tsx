interface BaseProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  maxLength: number;
}

interface InputProps extends BaseProps {
  multiline?: false;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
}

interface TextareaProps extends BaseProps {
  multiline: true;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

const fieldClass =
  "mt-2 block w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-base text-leaf-900 placeholder:text-leaf-800/40 focus:border-leaf-600";

export default function TextField(props: InputProps | TextareaProps) {
  const { id, label, hint, error, optional = true, maxLength, value, onChange } = props;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="block text-base font-semibold text-leaf-900">
        {label}
        {optional && <span className="ml-2 text-sm font-normal text-leaf-800/70">(opcional)</span>}
      </label>
      {hint && (
        <p id={hintId} className="mt-1 text-sm text-leaf-800/70">
          {hint}
        </p>
      )}

      {props.multiline ? (
        <textarea
          id={id}
          rows={props.rows ?? 4}
          maxLength={maxLength + 200 /* permite colar e ver o erro em vez de cortar silenciosamente */}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={fieldClass}
        />
      ) : (
        <input
          id={id}
          type="text"
          maxLength={maxLength + 20}
          value={value}
          autoComplete={props.autoComplete}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={fieldClass}
        />
      )}

      <div className="mt-1 flex items-start justify-between gap-3">
        <p id={errorId} role={error ? "alert" : undefined} className="text-sm font-medium text-clay-600">
          {error}
        </p>
        {props.multiline && (
          <p className="shrink-0 text-xs text-leaf-800/60" aria-hidden="true">
            {value.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}
