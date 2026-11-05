import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESEARCH_THEMES } from "@/lib/researchData";

export default function Research() {
  // Ensure cards display in Figma order: Theme 01, 02, 03, 04
  const orderedThemes = [...RESEARCH_THEMES].sort((a, b) =>
    (a.eyebrow || "").localeCompare(b.eyebrow || "")
  );

  return (
    <section id="research" className="px-5 pt-8 pb-16 md:px-8 md:pt-10 md:pb-20">
      <div className="mx-auto max-w-7xl">
        {/* 4 Research Theme Cards (2 per row as in Figma) */}
        <div className="grid gap-8 md:grid-cols-2">
          {orderedThemes.map((theme) => (
            <article
              key={theme.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-terracotta/50 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {theme.eyebrow && (
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                    {theme.eyebrow}
                  </p>
                )}

                <h3 className="mt-2 text-xl font-bold leading-snug text-primary transition-colors group-hover:text-terracotta md:text-2xl">
                  {theme.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {theme.summary}
                </p>

                {theme.tags && theme.tags.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {theme.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-[#f2ede4] px-3.5 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 pt-2">
                  <Link
                    href={`/research/${theme.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-[#fbf8f3] px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:border-terracotta hover:bg-terracotta hover:text-white shadow-sm"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
