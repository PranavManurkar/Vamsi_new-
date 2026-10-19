// 4 Research Themes with full scientific details and schematic figures

export const RESEARCH_THEMES = [
  {
    id: "advanced-structural-alloys-superalloys",
    slug: "advanced-structural-alloys-superalloys",
    title: "Advanced Structural Alloys & Superalloys",
    shortTitle: "Superalloys & Structural Alloys",
    tagline: "Unravelling precipitate shearing, planar faults, and high-temperature deformation in complex alloy systems.",
    summary:
      "Investigation of coherent γ/γ' superalloy microstructures, planar-fault energetics (APB, SISF), dislocation shearing mechanisms, and high-temperature creep behaviour.",
    image: "/images/research/advanced_structural_alloys_superalloys.png",
    overview:
      "High-temperature structural alloys, particularly nickel- and cobalt-base superalloys, derive their exceptional mechanical performance from a coherent two-phase microstructure consisting of a disordered FCC matrix (γ) and ordered L1₂ intermetallic precipitates (γ'). Understanding the energetic barriers to dislocation motion across these ordered precipitates is central to designing alloys capable of operating under extreme stress and temperature conditions.",
    focusAreas: [
      {
        title: "Dislocation Shearing & Planar Faults",
        description:
          "Dislocation cutting of ordered L1₂ precipitates creates planar defects including antiphase boundaries (APB) and superlattice intrinsic stacking faults (SISF). We quantify how leading and trailing dislocation pairs interact with the precipitate lattice to dictate overall shear resistance.",
      },
      {
        title: "Microstructural Strengthening Mechanisms",
        description:
          "Analysis of transition points between weak-pair cutting, strong-pair cutting, and Orowan looping as a function of precipitate size, volume fraction, and temperature, enabling optimal precipitate size distributions.",
      },
      {
        title: "Solute Segregation to Planar Faults",
        description:
          "Investigation of creep-induced solute segregation to planar faults in single-crystal superalloys, uncovering local chemistry changes that enhance creep resistance.",
      },
      {
        title: "Alloy Design Principles",
        description:
          "Exploration of multi-element substitution (Ni-Co-X, Ru additions) and off-stoichiometry in ordered phases to elevate fault energies and improve high-temperature phase stability.",
      },
    ],
    keyFeatures: [
      "γ (FCC solid solution) and γ' (ordered L1₂ Ni₃(Al,Ti)) phase interactions",
      "Calculated APB(111) and SISF(111) energies across multicomponent chemistries",
      "Critical resolved shear stress (CRSS) modelling as a function of precipitate radius",
      "Creep-driven planar-fault segregation mechanisms",
    ],
    relatedPublications: [
      {
        title: "Creep-Driven Solute Segregation to Planar Faults in Ni-Base Single-Crystal Superalloys",
        journal: "Metallurgical and Materials Transactions A (2026)",
        doi: "10.1007/s11661-026-08173-4",
      },
      {
        title: "Precipitate shearing, fault energies, and solute segregation to planar faults in Ni-, CoNi-, and Co-base superalloys",
        journal: "Annual Review of Materials Research (2021)",
        doi: "10.1146/annurev-matsci-102419-011433",
      },
      {
        title: "Modeling APB energies in multicomponent Ni-base superalloys",
        journal: "Intermetallics (2021)",
        doi: "10.1016/j.intermet.2020.107124",
      },
      {
        title: "A new proximate structure for the APB(111) in L1₂ compounds",
        journal: "Scripta Materialia (2020)",
        doi: "10.1016/j.scriptamat.2020.02.021",
      },
    ],
  },
  {
    id: "defect-energetics-mechanical-behaviour-deformation-mechanisms",
    slug: "defect-energetics-mechanical-behaviour-deformation-mechanisms",
    title: "Defect Energetics, Mechanical Behaviour & Deformation Mechanisms",
    shortTitle: "Defect Energetics & Deformation",
    tagline: "Atomic-scale defects and local chemical order govern dislocation processes and mechanical behaviour.",
    summary:
      "Atomic-scale investigation of generalized stacking fault energies (GSFE), short-range order (SRO), vacancy defects, and crystal defect thermodynamics.",
    image: "/images/research/defect_energetics_mechanical_behaviour.png",
    overview:
      "The mechanical behaviour of metallic materials originates from the competition and synergy among atomic interactions, point defects, planar faults, and line defects. By computing generalized stacking fault energy (GSFE) surfaces and local chemical order, we establish direct physical links between atomic-scale defect energetics and macroscopic mechanical phenomena including yield anomalies, twinning, and strain hardening.",
    focusAreas: [
      {
        title: "Generalized Stacking Fault Energies (GSFE)",
        description:
          "First-principles mapping of full 1D and 2D GSFE energy landscapes (γ-surfaces) for FCC and BCC systems, quantifying intrinsic stacking fault energies (ISF) and unstable fault barriers (γ_max) that govern dislocation dissociation and twinning.",
      },
      {
        title: "Short-Range Order (SRO) in Concentrated Alloys",
        description:
          "Quantitative evaluation of Warren-Cowley SRO parameters across coordinate neighbor shells in multi-principal element alloys (MPEAs), explaining how local chemical clustering alters dislocation glide and planar slip.",
      },
      {
        title: "Point Defects & Vacancy Dynamics",
        description:
          "Simulation of vacancy formation, migration energies, and atomic relaxations in ordered and disordered lattices, governing diffusion kinetics and high-temperature creep.",
      },
      {
        title: "Mechanisms-First Deformation Pathways",
        description:
          "Hierarchical linking: atomic interactions → defect energetics → dislocation pathways → mechanical behaviour across temperature regimes.",
      },
    ],
    keyFeatures: [
      "Intrinsic stacking faults (ISF) and unstable stacking faults in FCC & BCC",
      "Cowley short-range order (SRO) parameters vs. neighbor shell",
      "Vacancy defect energetics and atomic relaxation surrounding defect sites",
      "Deformation mode competition: slip vs. twinning vs. phase transformation",
    ],
    relatedPublications: [
      {
        title: "High-throughput approach for estimation of intrinsic barriers in FCC structures for alloy design",
        journal: "Scripta Materialia (2021)",
        doi: "10.1016/j.scriptamat.2021.114126",
      },
      {
        title: "Deformation modes and yield strength anomaly in L1₂ compounds",
        journal: "Journal of Alloys and Compounds (2021)",
        doi: "10.1016/j.jallcom.2021.158411",
      },
      {
        title: "High-throughput estimation of planar fault energies in A₃B compounds with L1₂ structure",
        journal: "Acta Materialia (2018)",
        doi: "10.1016/j.actamat.2017.11.051",
      },
      {
        title: "Yield anomaly in L1₂ Co₃Al_x W_{1-x} vis-à-vis Ni₃Al",
        journal: "Scripta Materialia (2017)",
        doi: "10.1016/j.scriptamat.2016.11.019",
      },
    ],
  },
  {
    id: "computational-thermodynamics-property-driven-alloy-design",
    slug: "computational-thermodynamics-property-driven-alloy-design",
    title: "Computational Thermodynamics & Property-Driven Alloy Design",
    shortTitle: "Thermodynamics & Alloy Design",
    tagline: "Closed-loop computational alloy design: from multicomponent chemistry to optimal performance.",
    summary:
      "Closed-loop design connecting alloy composition, phase stability (CALPHAD/DFT), microstructure prediction, mechanical properties, and optimization.",
    image: "/images/research/computational_thermodynamics_alloy_design.png",
    overview:
      "Designing novel structural alloys requires navigating astronomical compositional spaces. We employ a closed-loop framework combining CALPHAD thermodynamics, ab initio calculations, and property models to rapidly screen, predict phase stability, control multi-phase microstructures (e.g. FCC + B2, BCC + B2), and identify optimal compositions for targeted operating environments.",
    focusAreas: [
      {
        title: "1. Multicomponent Alloy Composition Space",
        description:
          "Systematic exploration of ternary, quaternary, and high-entropy alloy spaces (A-B-C) to identify compositional regions with desirable balance of cost, density, and functional elements.",
      },
      {
        title: "2. Phase Stability (CALPHAD + DFT)",
        description:
          "Thermodynamic modeling of phase boundaries, solvus temperatures, and liquidus-solidus intervals, ensuring stable matrix-precipitate systems (FCC, B2, FCC+B2) free from deleterious brittle phases.",
      },
      {
        title: "3. Microstructure Engineering",
        description:
          "Predicting coherent precipitate morphology, volume fractions, and phase partitioning between matrix and strengthening phases.",
      },
      {
        title: "4 & 5. Property Correlation & Optimisation",
        description:
          "Mapping composition-property relationships (elastic moduli, yield strength, oxidation resistance) and executing multi-objective optimization to locate ideal compositional targets.",
      },
    ],
    keyFeatures: [
      "Closed-loop cyclic alloy design framework",
      "CALPHAD-based phase diagram computation across temperatures and compositions",
      "BCC + B2 and FCC + L1₂ coherent microstructural design",
      "Multi-objective property optimisation and Pareto frontier exploration",
    ],
    relatedPublications: [
      {
        title: "Antiphase boundaries in B2 intermetallics: Proximate structures, formation energies, and chemical stability",
        journal: "Physical Review Materials (2024)",
        doi: "10.1103/PhysRevMaterials.8.013605",
      },
      {
        title: "Design of Nickel-Cobalt-Ruthenium multi-principal element alloys",
        journal: "Acta Materialia (2020)",
        doi: "10.1016/j.actamat.2020.04.040",
      },
      {
        title: "Modelling Elastic Moduli in γ′-Ni₃(Al,X) via a CALPHAD Approach",
        journal: "ASME IMECE-INDIA (2026)",
        url: "https://asme.pinetec.com/imece-india2026/data/pdfs/trk-3/IMECE-INDIA2026-188347.pdf",
      },
    ],
  },
  {
    id: "physics-guided-modelling-machine-learning-surrogate-models",
    slug: "physics-guided-modelling-machine-learning-surrogate-models",
    title: "Physics-Guided Modelling, Machine Learning & Surrogate Models",
    shortTitle: "Physics-Guided ML & Surrogate Models",
    tagline: "Connecting DFT to macroscopic performance via machine learning interatomic potentials and surrogate models.",
    summary:
      "Multiscale modelling across electronic, atomistic, phase, and microstructure scales using ML potentials, surrogate property models, and inverse alloy design.",
    image: "/images/research/physics_guided_modelling_ml.png",
    overview:
      "Bridging the vast gap between electronic-structure calculations (Angstroms) and macroscopic mechanical performance (centimeters) requires synergistic multiscale modelling. We develop and apply machine-learning interatomic potentials (MACE, MTP, MEAM), surrogate property regression models, and physics-guided screening algorithms to explore vast candidate alloy spaces with high fidelity and reduced computational cost.",
    focusAreas: [
      {
        title: "Multiscale Hierarchy (DFT to Performance)",
        description:
          "Integration of Electronic structure (DFT) → Atoms (MD/MC) → Phases (CALPHAD/DFT) → Microstructure (Matrix + Precipitate) → Properties & performance (Stress-strain, creep).",
      },
      {
        title: "ML Interatomic Potentials (MLIPs)",
        description:
          "Training machine-learning potentials on high-throughput DFT databases to enable large-scale atomistic simulations of defect dynamics and phase transformations with ab initio accuracy.",
      },
      {
        title: "Surrogate Property Models",
        description:
          "Developing regression, classification, and uncertainty-aware surrogate models for rapid estimation of fault energies, elastic constants, and phase stability.",
      },
      {
        title: "Inverse Design & Physics-Guided Screening",
        description:
          "Constraining candidate alloy spaces with fundamental domain physics to efficiently screen and pinpoint optimized alloys for extreme high-temperature environments.",
      },
    ],
    keyFeatures: [
      "Multiscale hierarchy bridging Ångström to centimeter scales",
      "ML potentials (MACE, MTP, 2NN-MEAM) calibrated to DFT datasets",
      "Structure-property learning with physics-based compositional & structural descriptors",
      "Inverse alloy design with uncertainty quantification",
    ],
    relatedPublications: [
      {
        title: "High-throughput approach for estimation of intrinsic barriers in FCC structures for alloy design",
        journal: "Scripta Materialia (2021)",
        doi: "10.1016/j.scriptamat.2021.114126",
      },
      {
        title: "Precipitate shearing, fault energies, and solute segregation to planar faults in Ni-, CoNi-, and Co-base superalloys",
        journal: "Annual Review of Materials Research (2021)",
        doi: "10.1146/annurev-matsci-102419-011433",
      },
      {
        title: "High-throughput estimation of planar fault energies in A₃B compounds with L1₂ structure",
        journal: "Acta Materialia (2018)",
        doi: "10.1016/j.actamat.2017.11.051",
      },
    ],
  },
];
