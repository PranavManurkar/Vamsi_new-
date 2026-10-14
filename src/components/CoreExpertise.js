const expertiseItems = [
  {
    title: "Atomistic Simulations",
    description:
      "First-principles (DFT) and molecular dynamics for fundamental materials behaviour",
    icon: "microscope",
  },
  {
    title: "Computational Thermodynamics",
    description:
      "CALPHAD-based phase stability and thermodynamic predictions",
    icon: "flask",
  },
  {
    title: "High-Throughput & Materials Informatics",
    description:
      "Automated alloy screening and data-driven materials design",
    icon: "bolt",
  },
  {
    title: "ICME Integration",
    description:
      "Multiscale integration of physics-based and data-driven models",
    icon: "grid",
  },
];

function Icon({ type }) {
  if (type === "microscope") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M6 21h12" />
        <path d="M8 21a4 4 0 0 0 4-4v-1" />
        <path d="M9 3h4v4H9z" />
        <path d="M13 5l3 3" />
        <path d="M11 7l-2 2v3" />
        <path d="M9 12h5" />
      </svg>
    );
  }

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

export default function CoreExpertise() {
  return (
    <section id="core-expertise" className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2
            className="text-[2.2rem] font-bold leading-none tracking-[-0.01em] text-[#0f172b] sm:text-[3rem]"
          >
            Core Expertise
          </h2>
          {/* <p
            className="mx-auto mt-4 max-w-4xl text-base text-black sm:text-[1.05rem]"
          >
            Integrating physics-based models with atomistic simulations and computational
            thermodynamics
          </p> */}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {expertiseItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-[#0f172b] px-6 py-6"
            >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-transparent text-white">
                <Icon type={item.icon} />
              </div>

              <h3
                className="text-[1.35rem] font-semibold leading-[1.25] text-white"
              >
                {item.title}
              </h3>

              <p
                className="mt-3 text-[0.95rem] leading-[1.5] text-gray-200"
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
