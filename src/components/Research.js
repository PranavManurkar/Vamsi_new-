import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESEARCH_THEMES } from "@/lib/researchData";
import { buttonClasses } from "@/lib/ui";

export default function Research() {
  return (
    <section id="research" className="px-5 pt-8 pb-16 md:px-8 md:pt-10 md:pb-20">
      <div className="mx-auto max-w-7xl">
        {/* 4 Research Theme Cards (2 per row as in Figma) */}
        <div className="grid gap-8 md:grid-cols-2">
          {RESEARCH_THEMES.map((theme) => (
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
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-semibold leading-tight text-primary transition-colors group-hover:text-terracotta md:text-2xl">
                  {theme.shortTitle || theme.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {theme.summary}
                </p>
                <div className="mt-5">
                  <Link
                    href={`/research/${theme.slug}`}
                    className={buttonClasses({
                      variant: "link",
                      className: "px-0 text-terracotta inline-flex items-center gap-1.5 font-medium hover:underline",
                    })}
                  >
                    <span>Explore theme</span>
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
