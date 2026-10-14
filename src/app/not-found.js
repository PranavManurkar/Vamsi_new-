import Link from "next/link";
import { buttonClasses } from "@/lib/ui";

// redesign-data: 404 copy from the design NotFoundPage (pages.tsx L310); repo had no custom 404 (Next default text).
export default function NotFound() {
  return (
    <section className="dot-field flex min-h-[70vh] items-center px-5 pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-primary">Page not found</h1>
        <p className="mt-4 text-muted-foreground">The requested page does not exist.</p>
        <Link href="/" className={buttonClasses({ className: "mt-6" })}>
          Return home
        </Link>
      </div>
    </section>
  );
}
