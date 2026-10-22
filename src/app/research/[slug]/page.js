import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { RESEARCH_THEMES } from "@/lib/researchData";
import { buttonClasses } from "@/lib/ui";

export async function generateStaticParams() {
  return RESEARCH_THEMES.map((theme) => ({
    slug: theme.slug,
  }));
}

export default async function ResearchThemePage({ params }) {
  const { slug } = await params;
  const theme = RESEARCH_THEMES.find((t) => t.slug === slug);

  if (!theme) {
    notFound();
  }

  const currentIndex = RESEARCH_THEMES.findIndex((t) => t.slug === slug);
  const prevTheme = currentIndex > 0 ? RESEARCH_THEMES[currentIndex - 1] : null;
  const nextTheme = currentIndex < RESEARCH_THEMES.length - 1 ? RESEARCH_THEMES[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner / Breadcrumb */}
      <section className="dot-field border-b border-border px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to All Research Themes
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Research Theme 0{currentIndex + 1}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-primary md:text-5xl">
            {theme.title}
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            {theme.tagline}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
        {/* Schematic Figure */}
        <figure className="mb-14 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative aspect-[16/9] w-full bg-secondary">
            <Image
              src={theme.image}
              alt={theme.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1024px"
              className="object-contain"
            />
          </div>
          <figcaption className="border-t border-border bg-secondary/40 p-4 text-center text-xs text-muted-foreground md:text-sm">
            Schematic overview: {theme.title}. High-throughput calculations, defect energetics, and microstructural mechanisms.
          </figcaption>
        </figure>

        {/* Overview */}
        <section className="mb-14 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary">Scientific Overview</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{theme.overview}</p>
        </section>

        {/* Focus Areas */}
        <section className="mb-14">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Methodologies &amp; Thrusts</p>
            <h2 className="mt-1 text-2xl font-semibold text-primary md:text-3xl">Key Research Directions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {theme.focusAreas.map((area, idx) => (
              <article key={area.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-terracotta">
                  Focus 0{idx + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-primary">{area.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-14 rounded-2xl border border-border bg-secondary/50 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-primary">Core Phenomena &amp; Descriptors</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {theme.keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-primary">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Publications */}
        {theme.relatedPublications && theme.relatedPublications.length > 0 && (
          <section className="mb-14">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Group Contributions</p>
              <h2 className="mt-1 text-2xl font-semibold text-primary md:text-3xl">Related Publications</h2>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              {theme.relatedPublications.map((pub) => {
                const link = pub.doi ? `https://doi.org/${pub.doi}` : pub.url;
                return (
                  <article
                    key={pub.title}
                    className="flex flex-col justify-between gap-4 border-b border-border p-5 last:border-0 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h3 className="font-semibold text-primary">{pub.title}</h3>
                      <p className="mt-1 text-sm italic text-muted-foreground">{pub.journal}</p>
                    </div>
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClasses({ variant: "outline", size: "sm", className: "shrink-0" })}
                      >
                        View Article <ExternalLink className="ml-1.5 size-3.5" />
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* Theme Pagination Navigation */}
        <nav aria-label="Theme navigation" className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          {prevTheme ? (
            <Link
              href={`/research/${prevTheme.slug}`}
              className={buttonClasses({ variant: "outline", className: "justify-start text-left" })}
            >
              <ArrowLeft className="mr-2 size-4" />
              <div>
                <p className="text-[10px] uppercase text-muted-foreground">Previous Theme</p>
                <p className="font-semibold text-primary">{prevTheme.shortTitle}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextTheme && (
            <Link
              href={`/research/${nextTheme.slug}`}
              className={buttonClasses({ variant: "outline", className: "justify-end text-right" })}
            >
              <div>
                <p className="text-[10px] uppercase text-muted-foreground">Next Theme</p>
                <p className="font-semibold text-primary">{nextTheme.shortTitle}</p>
              </div>
              <ArrowRight className="ml-2 size-4" />
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
