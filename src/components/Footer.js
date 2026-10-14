import Image from "next/image";
import Link from "next/link";

function IconLinkedIn() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.9 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.5 10h2.8v8.5H5.5V10Zm4.4 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.4v4.4h-2.8v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.8V10Z" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M22 5.8a8.8 8.8 0 0 1-2.5.7 4.2 4.2 0 0 0 1.8-2.4c-.9.6-2 .9-3 .1a4.3 4.3 0 0 0-7.4 4A12.1 12.1 0 0 1 3 4.9a4.3 4.3 0 0 0 1.3 5.8 4.2 4.2 0 0 1-1.9-.5v.1a4.3 4.3 0 0 0 3.4 4.2c-.4.1-.8.1-1.2 0a4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1A12.2 12.2 0 0 0 9 21c8 0 12.5-6.8 12.2-12.8A8.8 8.8 0 0 0 22 5.8Z" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 .1 2.1.8 2.6 1.8.9.1 1.9 0 2.7-.4.1-.7.4-1.3.9-1.7-2.2-.2-4.5-1.1-4.5-4.9 0-1 .3-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.8 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.6 0 3.8-2.3 4.7-4.5 4.9.5.5.9 1.1.9 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

const socialClass =
  "inline-flex size-10 items-center justify-center rounded-lg bg-card text-primary transition-colors hover:text-terracotta pointer-coarse:size-11";
const headingClass = "text-sm font-semibold uppercase tracking-[0.18em] text-terracotta";
const linkClass = "font-medium text-primary transition-colors hover:text-terracotta";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-5 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* redesign: design footer has 2 columns (wordmark + inline links, SiteLayout.tsx:11); repo's 3 columns kept. */}
        <div className="grid gap-8 md:grid-cols-[1.35fr_0.7fr_0.7fr] md:items-start">
          <div>
            <Image
              src="/Vamsi_iiti_informal.png"
              alt="VAMSI Research Group"
              width={200}
              height={80}
              className="h-12 w-auto"
            />

            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Virtual Alloys Modelling, Simulation & Informatics Research
              Group at IIT Indore
            </p>

            {/* redesign-data: social links — design: none; repo: placeholder hrefs "#contact". Kept repo. */}
            <div className="mt-5 flex items-center gap-2.5">
              <a href="#contact" aria-label="LinkedIn" className={socialClass}>
                <IconLinkedIn />
              </a>
              <a href="#contact" aria-label="Twitter" className={socialClass}>
                <IconTwitter />
              </a>
              <a href="#contact" aria-label="GitHub" className={socialClass}>
                <IconGithub />
              </a>
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-6">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/people" className={linkClass}>People</Link></li>
              <li><Link href="/research" className={linkClass}>Research</Link></li>
              <li><Link href="/projects" className={linkClass}>Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Resources</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-6">
              <li><Link href="/publications" className={linkClass}>Contributions</Link></li>
              <li><Link href="/resources" className={linkClass}>Resources</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
          <p>© 2026 VAMSI Research Group, IIT Indore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
