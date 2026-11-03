import { ExternalLink } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

// Design PublicationRows (pages.tsx L62-78)
export default function PublicationRows({ items }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {items.map((item) => (
        <article
          key={item.doi || item.title}
          className="grid gap-3 border-b border-border p-5 last:border-0 md:grid-cols-[5rem_1fr_auto]"
        >
          <p className="font-semibold text-terracotta">{item.year}</p>
          <div className="min-w-0">
            <h2 className="font-semibold leading-7 text-primary">{item.title}</h2>
            <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.authors}</p>
            {item.journal && (
              <p className="mt-1 text-sm italic text-muted-foreground">{item.journal}</p>
            )}
            {item.venue && (
              <p className="mt-1 text-xs italic text-muted-foreground">{item.venue}</p>
            )}
            {item.doi && (
              <a
                href={item.scholarUrl || item.url || `https://doi.org/${item.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block text-xs font-medium text-terracotta hover:underline"
              >
                DOI: {item.doi}
              </a>
            )}
          </div>
          {(item.scholarUrl || item.url) && (
            <a
              href={item.scholarUrl || item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ variant: "ghost", size: "sm", className: "self-start shrink-0" })}
            >
              View Paper
              <ExternalLink className="ml-1.5 size-3.5" />
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
