import Image from "next/image";

const researchItems = [
  {
    title: "Computational Design of Advanced Alloys",
    description:
      "Design of complex alloy systems guided by physics-based modelling and thermodynamics:",
    bullets: [
      "Superalloys for high-temperature applications",
      "Multi-principal element alloys (FCC, BCC, BCC+B2 systems)",
      "Intermetallic systems",
    ],
    icon: "flask",
    image: "/hero-placeholder.svg",
  },
  {
    title: "Phase Stability & Defect Physics",
    description:
      "Understanding how composition and defects control microstructure and properties:",
    bullets: [
      "Phase stability and evolution in multi-component systems",
      "Defect energetics (stacking faults, diffusion, interfaces)",
      "Microstructure-property relationships",
    ],
    icon: "bolt",
    image: "/hero-placeholder.svg",
  },
  {
    title: "Multiscale Modelling & ICME",
    description: "Bridging length scales for predictive materials design:",
    bullets: [
      "Linking atomistic mechanisms to macroscopic properties",
      "Process-structure-property-performance relationships",
      "ICME frameworks for alloy optimization",
    ],
    icon: "grid",
    image: "/hero-placeholder.svg",
  },
];

function Icon({ type }) {
  if (type === "flask") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M9 3h6" />
        <path d="M10 3v5l-5.1 8.5A3 3 0 0 0 7.5 21h9a3 3 0 0 0 2.6-4.5L14 8V3" />
        <path d="M8.6 14h6.8" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

export default function Research() {
  return (
    <section id="research" className="py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="ml-2 sm:ml-4 lg:ml-6">
          <h2
            className="text-[2.25rem] font-bold leading-none tracking-[-0.01em] text-[#0f172b] sm:text-[2.9rem]"
          >
            Research
          </h2>
          {/* <p
            className="mx-auto mt-3 max-w-3xl text-base text-black sm:text-lg"
          >
            Advancing computational materials science through multi-scale modeling and simulation
          </p> */}
        </div>

        <div className="mt-8 space-y-5 lg:space-y-6">
          {researchItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_14px_rgba(15,23,43,0.06)]"
            >
              <div className="grid gap-0 sm:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                <div className="relative h-[220px] sm:h-[260px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="px-6 py-7 sm:px-8 sm:py-8">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f172b] text-white">
                    <Icon type={item.icon} />
                  </div>

                  <h3
                    className="text-[1.65rem] font-semibold leading-[1.2] text-[#0f172b] sm:text[2rem]"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 text-[0.98rem] leading-[1.6] text-black"
                  >
                    {item.description}
                  </p>

                  <ul
                    className="mt-4 space-y-1.5 text-[0.95rem] leading-[1.5] text-black"
                  >
                    {item.bullets.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="text-[#0f172b]">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
