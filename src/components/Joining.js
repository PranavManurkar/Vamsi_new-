import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

export default function Joining() {
  return (
    <section id="positions" className="bg-terracotta px-5 py-14 text-white md:px-8">
      {/* redesign-data: design CTA band also has eyebrow "Research openings · Applications welcome" and a recruiting paragraph (pages.tsx L140); repo: heading + button only. Omitted. */}
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Join Our Team</h2>
        <Link href="/people" className={buttonClasses({ variant: "secondary", size: "lg" })}>
          Explore
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
