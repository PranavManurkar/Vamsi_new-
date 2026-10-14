export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="dot-field px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-7xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">{eyebrow}</p>
        )}
        <h1
          className={`${eyebrow ? "mt-4 " : ""}max-w-4xl text-4xl font-semibold leading-tight text-primary md:text-6xl`}
        >
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{intro}</p>}
      </div>
    </header>
  );
}
