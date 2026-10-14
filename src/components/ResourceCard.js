import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

export default function ResourceCard({ title, description, href, actionLabel = "Open Resource" }) {
  const isExternal = href.startsWith("http");

  return (
    <article className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>

      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
        className={buttonClasses({ variant: "outline", size: "sm", className: "mt-5" })}
      >
        {actionLabel}
        <ArrowUpRight />
      </Link>
    </article>
  );
}
