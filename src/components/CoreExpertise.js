import { FlaskConical, Grid3x3, Microscope, Zap } from "lucide-react";

const icons = { microscope: Microscope, flask: FlaskConical, bolt: Zap, grid: Grid3x3 };

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

export default function CoreExpertise() {
  return (
    <section id="core-expertise" className="bg-secondary px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-primary md:text-5xl">Core Expertise</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseItems.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article key={item.title} className="rounded-xl border border-border bg-card p-6">
                <div className="flex size-11 items-center justify-center rounded-lg bg-secondary text-terracotta">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
