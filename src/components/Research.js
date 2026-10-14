import { AlloyDesignDiagram, FaultDiagram, MethodsDiagram } from "@/components/site/ScientificDiagrams";

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
    // redesign: placeholder image replaced by the design diagram (frontend imagery only).
    diagram: AlloyDesignDiagram,
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
    diagram: FaultDiagram,
  },
  {
    title: "Multiscale Modelling & ICME",
    description: "Bridging length scales for predictive materials design:",
    bullets: [
      "Linking atomistic mechanisms to macroscopic properties",
      "Process-structure-property-performance relationships",
      "ICME frameworks for alloy optimization",
    ],
    diagram: MethodsDiagram,
  },
];

export default function Research() {
  return (
    <section id="research" className="px-5 py-16 md:px-8 md:py-24">
      {/* redesign: 3 columns at lg for 3 areas (design uses 2 columns for its 4 themes). */}
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {researchItems.map(({ title, description, bullets, diagram: Diagram }) => (
          <article key={title} className="overflow-hidden rounded-2xl border border-border bg-card">
            <Diagram />
            <div className="p-7">
              <h2 className="text-2xl font-semibold text-primary">{title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
              <ul className="mt-4 space-y-3">
                {bullets.map((point) => (
                  <li key={point} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
