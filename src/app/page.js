import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { buttonClasses } from "@/lib/ui";
import { featuredResearch, news, selectedPublications } from "@/lib/homeData";
import HeroCarousel from "@/components/site/HeroCarousel";

export default function Home() {
  return (
    <>
      <section className="dot-field px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-28">
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
            <p className="mt-8 text-sm text-muted-foreground">
              24 publications · 538 citations · h-index 14 · Metrics reported in the supplied 2026 CV.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xl">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
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

          {/* 4 Research Themes with schematic figures */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredResearch.map(({ slug, title, shortTitle, summary, image }) => (
              <article
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-terracotta/50 hover:shadow-md"
                key={slug}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-secondary">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-primary group-hover:text-terracotta">
                    {shortTitle || title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground line-clamp-4">{summary}</p>
                  <Link
                    href={`/research/${slug}`}
                    className={buttonClasses({ variant: "link", className: "mt-4 self-start px-0 text-terracotta" })}
                  >
                    Explore theme <ArrowRight className="ml-1 size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 md:px-8">
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
            <Link href="/publications" className={buttonClasses({ variant: "outline", className: "mt-5" })}>
              Full bibliography <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-terracotta px-5 py-14 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Research openings · Applications welcome
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Join the VAMSI Research Group</h2>
            <p className="mt-2 max-w-3xl text-white/90">
              We are actively hiring a Junior Research Fellow (JRF, ANRF-ARG project) with a pathway to a PhD, PhD students, and motivated postdoctoral researchers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.iiti.ac.in/careers/jrf_srf_positions?tab=jrf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ variant: "secondary", size: "lg", className: "font-semibold" })}
            >
              JRF Advertisement <ExternalLink className="ml-1 size-4" />
            </a>
            <Link
              href="/join"
              className={buttonClasses({ variant: "outline", size: "lg", className: "border-white/40 text-white hover:bg-white hover:text-primary" })}
            >
              All Openings <ArrowRight className="ml-1 size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
