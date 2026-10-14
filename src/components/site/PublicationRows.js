import { ExternalLink } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

// Design PublicationRows (pages.tsx L62-78), fed with the repo's publication fields.
export default function PublicationRows({ items }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      {items.map((item) => (
        <article
          key={item.doi}
          className="grid gap-3 border-b border-border p-5 last:border-0 md:grid-cols-[5rem_1fr_auto]"
        >
          <p className="font-semibold text-terracotta">{item.year}</p>
          <div className="min-w-0">
            <h2 className="font-semibold leading-7 text-primary">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.authors}</p>
            {/* redesign-data: design shows the journal here and links DOIs for 5 papers only; repo shows a DOI link for every paper. Kept repo. */}
            <a
              href={item.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block break-all text-sm italic text-muted-foreground hover:text-terracotta"
            >
              DOI: {item.doi}
            </a>
          </div>
          <a
            href={item.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses({ variant: "ghost", size: "sm", className: "self-start" })}
          >
            View Paper
            <ExternalLink />
          </a>
        </article>
      ))}
    </div>
  );
}
