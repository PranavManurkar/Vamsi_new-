import Image from "next/image";

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function PersonCard({ name, role, detail, image, objectPosition }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
      <div className="relative mx-auto mb-5 flex size-24 items-center justify-center overflow-hidden rounded-full bg-secondary text-2xl font-semibold text-primary ring-4 ring-background">
        {image ? (
          <Image src={image} alt={name} fill sizes="96px" className="object-cover" style={{ objectPosition }} />
        ) : (
          // Design PersonCard initials avatar (pages.tsx L55) when no photo exists.
          <span aria-hidden="true">{initials(name)}</span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-primary">{name}</h3>
      <p className="mt-1 text-sm font-medium text-primary/75">{role}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
    </article>
  );
}
