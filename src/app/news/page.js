import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText, ArrowRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import { buttonClasses } from "@/lib/ui";
import { NEWS_UPDATES } from "@/data/newsData";

export const metadata = {
  title: "More News | VAMSI Research Group",
  description:
    "Recent announcements, conference presentations, student milestones, and research opportunities from Dr. Venkata Vamsi and the VAMSI Research Group at IIT Indore.",
};

function NewsCard({ item }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md md:p-6">
      {item.image && (
        <div className="flex flex-col">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border/60 bg-secondary sm:aspect-[4/3]">
            <Image
              src={item.image}
              alt={item.alt || item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {item.caption && (
            <p className="mt-3 text-xs sm:text-sm italic leading-relaxed text-muted-foreground border-l-2 border-terracotta/70 pl-3">
              {item.caption}
            </p>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-semibold uppercase tracking-wider text-terracotta">
            {item.category}
          </span>
          <span className="font-medium text-muted-foreground">{item.date}</span>
        </div>

        <h2 className="mt-2 text-lg sm:text-xl font-semibold leading-snug text-primary group-hover:text-terracotta transition-colors">
          {item.title}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.summary}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3 pt-3 border-t border-border/60">
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({
                variant: "outline",
                size: "sm",
                className: "gap-1.5 text-xs sm:text-sm",
              })}
            >
              {item.externalLabel || "View on LinkedIn"} <ExternalLink className="size-3.5" />
            </a>
          )}

          {item.pdf && (
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({
                variant: "ghost",
                size: "sm",
                className: "gap-1.5 text-xs sm:text-sm text-terracotta",
              })}
            >
              <FileText className="size-3.5" /> {item.pdfLabel || "Download PDF"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Updates & Activity"
        title="More News"
        intro="Recent announcements, conference presentations, student milestones, and open research positions from the VAMSI Research Group."
      />

      <section className="px-5 pt-8 pb-16 md:px-8 md:pt-10 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS_UPDATES.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-secondary/60 p-6 text-center sm:p-8">
            <h3 className="text-lg font-semibold text-primary">
              Stay Connected with Our Research
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Follow Dr. Venkata Vamsi on LinkedIn for real-time publications, lab events, and new project positions.
            </p>
            <div className="mt-5 flex justify-center">
              <a
                href="https://www.linkedin.com/in/kvvamsi/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ size: "sm", className: "gap-2" })}
              >
                Follow on LinkedIn <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
