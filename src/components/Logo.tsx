interface LogoProps {
  className?: string;
  /** Texto claro para uso sobre fundo escuro. */
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" role="img" aria-label="Logotipo HortaLink Digital">
        <rect width="64" height="64" rx="14" fill={light ? "#f4efe3" : "#2f5a2f"} />
        <path d="M32 50V30" stroke={light ? "#2f5a2f" : "#f4efe3"} strokeWidth="4" strokeLinecap="round" />
        <path d="M32 32C32 20 24 14 14 14c0 11 7 18 18 18Z" fill={light ? "#2f5a2f" : "#f4efe3"} />
        <path d="M32 38c0-9 6-14 16-14 0 9-6 14-16 14Z" fill={light ? "#74a966" : "#a0c78f"} />
      </svg>
      <span className={`font-display text-xl font-bold leading-none ${light ? "text-sand-100" : "text-leaf-800"}`}>
        HortaLink
        <span className={`ml-1 font-sans text-sm font-semibold ${light ? "text-leaf-200" : "text-leaf-500"}`}>Digital</span>
      </span>
    </span>
  );
}
