import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESEARCH_THEMES } from "@/lib/researchData";
import { buttonClasses } from "@/lib/ui";

export default function Research() {
  return (
    <section id="research" className="px-5 pt-8 pb-16 md:px-8 md:pt-10 md:pb-20">
      <div className="mx-auto max-w-7xl">
        {/* 4 Research Theme Cards formatted exactly per Figma specifications */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESEARCH_THEMES.map((theme) => (
            <article
              key={theme.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-terracotta/50 hover:shadow-md"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-secondary">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug text-primary transition-colors group-hover:text-terracotta">
                  {theme.shortTitle || theme.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground line-clamp-4">
                  {theme.summary}
                </p>
                <Link
                  href={`/research/${theme.slug}`}
                  className={buttonClasses({
                    variant: "link",
                    className: "mt-4 self-start px-0 text-terracotta",
                  })}
                >
                  <span>Explore theme</span>
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
