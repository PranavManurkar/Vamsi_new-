import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESEARCH_THEMES } from "@/lib/researchData";
import { buttonClasses } from "@/lib/ui";

export default function Research() {
  return (
    <section id="research" className="px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Featured Research Banner with the integrated overview figure */}
        <div className="mb-14 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                Integrated Framework
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-primary md:text-3xl">
                Physics-Guided and AI-Enabled Design of Advanced Alloys
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Mechanisms first. Design follows. From planar faults to thermodynamic phase stability and surrogate models.
              </p>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-background">
            <Image
              src="/images/research/research_landing_page.png"
              alt="Physics-Guided and AI-Enabled Design of Advanced Alloys Overview"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
            />
          </div>
        </div>

        {/* 4 Themes Heading */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Research Thrusts</p>
          <h2 className="mt-1 text-2xl font-semibold text-primary md:text-4xl">Core Research Themes</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Explore each thematic area for detailed methodologies, defect physics, multiscale simulations, and key outcomes.
          </p>
        </div>

        {/* 4 Research Theme Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {RESEARCH_THEMES.map((theme) => (
            <article
              key={theme.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-terracotta/50 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-semibold leading-tight text-primary transition-colors group-hover:text-terracotta">
                  {theme.title}
                </h3>
                <p className="mt-2 text-sm font-medium italic text-terracotta">{theme.tagline}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{theme.summary}</p>

                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">Key Topics</p>
                  <ul className="mt-3 space-y-2.5">
                    {theme.keyFeatures.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href={`/research/${theme.slug}`}
                    className={buttonClasses({
                      variant: "outline",
                      className: "w-full justify-between group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white transition-all",
                    })}
                  >
                    <span>Explore Theme &amp; Findings</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
