import Image from "next/image";

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M6.9 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.5 10h2.8v8.5H5.5V10Zm4.4 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.4v4.4h-2.8v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.8V10Z" />
    </svg>
  );
}

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function PersonCard({ name, role, detail, image, objectPosition, linkedin, showLinkedIn = false }) {
  const linkedinUrl = linkedin || `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(name + " IIT Indore")}`;

  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6 text-center shadow-sm">
      <div className="relative mx-auto mb-5 flex size-24 items-center justify-center overflow-hidden rounded-full bg-secondary text-2xl font-semibold text-primary ring-4 ring-background">
        {image ? (
          <Image src={image} alt={name} fill sizes="96px" className="object-cover" style={{ objectPosition }} />
        ) : (
          <span aria-hidden="true">{initials(name)}</span>
        )}
      </div>

      <div className="flex items-center justify-center gap-1.5">
        <h3 className="text-lg font-semibold text-primary">{name}</h3>
        {showLinkedIn && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}'s LinkedIn Profile`}
            className="text-primary/60 transition-colors hover:text-[#0077b5]"
          >
            <IconLinkedIn />
          </a>
        )}
      </div>

      <p className="mt-1 text-sm font-medium text-terracotta">{role}</p>
      <div className="mt-3 flex-1 border-t border-border pt-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project</p>
        <p className="mt-1 text-sm leading-relaxed text-primary/80">{detail}</p>
      </div>
    </article>
  );
}
