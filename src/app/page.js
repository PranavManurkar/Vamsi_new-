import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { buttonClasses } from "@/lib/ui";
import { news, selectedPublications } from "@/lib/homeData";
import HeroCarousel from "@/components/site/HeroCarousel";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="dot-field px-5 pb-8 pt-24 md:px-8 md:pb-10 md:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.1fr] xl:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
              VAMSI Research Group · IIT Indore
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-primary md:text-5xl xl:text-6xl">
              Virtual Alloys Modelling, Simulation & Informatics
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Computational metallurgy · Advanced structural alloys · Materials informatics
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/research" className={buttonClasses({ size: "lg" })}>
                Research directions <ArrowRight />
              </Link>
              <Link href="/people" className={buttonClasses({ size: "lg", variant: "outline" })}>
                Meet the group
              </Link>
              <Link href="/publications" className={buttonClasses({ size: "lg", variant: "ghost" })}>
                Latest publications
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xl">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* Brown card CTA banner from Figma design */}
      <section className="bg-terracotta px-5 py-12 text-white md:px-8 md:py-14">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80 md:text-sm">
              Research openings · Applications welcome
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl lg:text-4xl text-white">
              Join the VAMSI Research Group
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
              We are recruiting a Junior Research Fellow with a potential pathway to a PhD, PhD students, and motivated postdoctoral researchers.
            </p>
          </div>
          <div className="flex shrink-0 items-center">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-xl bg-[#fbf5eb] px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition hover:bg-white"
            >
              View opportunities <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured research section */}
      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Featured research</p>
          <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold text-primary md:text-5xl">
                Mechanisms first. Design follows.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Physics-guided and AI-enabled design of advanced structural alloys across length and time scales.
              </p>
            </div>
            <Link href="/research" className={buttonClasses({ variant: "outline" })}>
              View all research <ArrowRight />
            </Link>
          </div>

          {/* Integrated framework overview diagram */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6 lg:p-8">
            <Link href="/research" className="group block">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-background">
                <Image
                  src="/images/research/research_landing_page.png"
                  alt="Integrated Framework: Physics-Guided and AI-Enabled Design of Advanced Alloys"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent news and Selected publications */}
      <section className="bg-secondary px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Recent news</p>
            <div className="mt-6 space-y-4">
              {news.map(([date, title, text]) => (
                <article className="rounded-xl border border-border bg-card p-5" key={title}>
                  <p className="text-sm font-semibold text-terracotta">{date}</p>
                  <h3 className="mt-1 font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
            <Link href="/news" className={buttonClasses({ variant: "outline", className: "mt-5" })}>
              More news <ArrowRight />
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Selected publications</p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
              {selectedPublications.map((publication) => (
                <article
                  className="grid gap-3 border-b border-border p-5 last:border-0 md:grid-cols-[5rem_1fr_auto]"
                  key={publication.title}
                >
                  <p className="font-semibold text-terracotta">{publication.year}</p>
                  <div>
                    <h3 className="font-semibold leading-7 text-primary">{publication.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{publication.authors}</p>
                    <p className="mt-1 text-sm italic text-muted-foreground">{publication.journal}</p>
                  </div>
                  {(publication.doi || publication.url) && (
                    <a
                      href={publication.doi || publication.url}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonClasses({ variant: "ghost", size: "sm", className: "self-start" })}
                    >
                      {publication.linkLabel || "DOI"} <ExternalLink />
                    </a>
                  )}
                </article>
              ))}
            </div>
            <Link href="/news" className={buttonClasses({ variant: "outline", className: "mt-5" })}>
              More news <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
