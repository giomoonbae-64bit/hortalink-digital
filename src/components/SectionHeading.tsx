interface SectionHeadingProps {
  id?: string;
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ id, kicker, title, intro, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {kicker && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-leaf-500">{kicker}</p>
      )}
      <h2 id={id} className="text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-leaf-800/80">{intro}</p>}
    </div>
  );
}
