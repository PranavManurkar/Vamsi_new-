import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Mail, MapPin } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M6.9 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.5 10h2.8v8.5H5.5V10Zm4.4 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.4v4.4h-2.8v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.8V10Z" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M22 5.8a8.8 8.8 0 0 1-2.5.7 4.2 4.2 0 0 0 1.8-2.4c-.9.6-2 .9-3 .1a4.3 4.3 0 0 0-7.4 4A12.1 12.1 0 0 1 3 4.9a4.3 4.3 0 0 0 1.3 5.8 4.2 4.2 0 0 1-1.9-.5v.1a4.3 4.3 0 0 0 3.4 4.2c-.4.1-.8.1-1.2 0a4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1A12.2 12.2 0 0 0 9 21c8 0 12.5-6.8 12.2-12.8A8.8 8.8 0 0 0 22 5.8Z" />
    </svg>
  );
}

function IconGoogleScholar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path d="M12 4 3 9l9 5 9-5-9-5Z" />
      <path d="M6 11v4.2c0 1.9 2.7 3.8 6 3.8s6-1.9 6-3.8V11" />
      <path d="M12 14V9" />
    </svg>
  );
}

const socialClass =
  "inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground";

function InfoTile({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-terracotta">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div>
        <p className="font-semibold text-primary">{label}</p>
        <p className="mt-1 leading-6 text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Page title comes from the /contact PageHeader (design ContactPage). Repo heading was "Get in Touch". */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h3 className="text-xl font-semibold text-primary">Contact Information</h3>

            <div className="mt-5 space-y-4">
              {/* redesign-data: email — design: "kvvamsi@iiti.ac.in" (pages.tsx L302); repo here: "kvamsi@iiti.ac.in"; faculty/page.js uses "kvvamsi@…". Kept repo. */}
              <InfoTile icon={Mail} label="Email">kvamsi@iiti.ac.in</InfoTile>
              <InfoTile icon={MapPin} label="Office Address">
                FC-504, 4th Floor<br />
                Learning Resource Centre<br />
                IIT Indore, Simrol-453552<br />
                Indore, Madhya Pradesh, India
              </InfoTile>
              <InfoTile icon={GraduationCap} label="Department Office">
                Metallurgical Engineering and Materials Science<br />
                Indian Institute of Technology Indore<br />
                Khandwa Road, Simrol-453552<br />
                Indore, Madhya Pradesh, India
              </InfoTile>
              {/* redesign-data: phone — design shows a Phone tile "+91-731-660-5568" (pages.tsx L302); repo contact section has none. Omitted. */}
            </div>

            <div className="mt-8 border-t border-border pt-7">
              <h4 className="font-semibold text-primary">Connect With Us</h4>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/kvvamsi/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className={socialClass}
                >
                  <IconLinkedIn />
                </a>
                <a
                  href="https://x.com/kvvamsi"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Twitter"
                  className={socialClass}
                >
                  <IconTwitter />
                </a>
                <a
                  href="https://www.researchgate.net/profile/K-V-Vamsi"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="ResearchGate"
                  className={`group ${socialClass}`}
                >
                  <Image
                    src="/Researchgate--Streamline-Simple-Icons.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="h-4 w-4 brightness-0 group-hover:invert"
                  />
                </a>
                <a
                  href="https://scholar.google.co.in/citations?user=ducGUjAAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Google Scholar"
                  className={socialClass}
                >
                  <IconGoogleScholar />
                </a>
              </div>
            </div>
          </div>

          {/* redesign: design contact page has a mailto form here (pages.tsx L303); repo has map + gallery link. Kept repo. */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <h3 className="p-6 pb-4 text-xl font-semibold text-primary">Location</h3>
            <div className="h-80 w-full">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                allow="unload"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.454568700153!2d75.92313709999999!3d22.524638500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sin!4v1777623614680!5m2!1sen!2sin"
                title="IIT Indore Location"
              />
            </div>
            <div className="p-6">
              <Link href="/gallery" className={buttonClasses({ size: "lg", className: "w-full justify-between" })}>
                Explore Our Gallery
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
