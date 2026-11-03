export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="dot-field border-b border-border/40 px-5 pb-8 pt-24 md:px-8 md:pb-10 md:pt-28">
      <div className="mx-auto max-w-7xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta md:text-sm">{eyebrow}</p>
        )}
        <h1
          className={`${eyebrow ? "mt-3 " : ""}max-w-4xl text-3xl font-semibold leading-tight text-primary md:text-5xl lg:text-6xl`}
        >
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">{intro}</p>}
      </div>
    </header>
  );
}
