// Ported verbatim from the design (components/ScientificDiagrams.tsx); TypeScript annotations removed.
const navy = "#172c3d";
const cream = "#fbf5eb";
const sand = "#efe2d1";
const terra = "#b56c62";
const gold = "#d8a844";
const line = "#9ca7ad";

function Arrow({ x1, y1, x2, y2, color = navy }) {
  return (
    <g stroke={color} strokeWidth="2.5" fill="none">
      <path d={`M${x1} ${y1}H${x2}`} />
      <path d={`M${x2 - 8} ${y2 - 6}L${x2} ${y2}L${x2 - 8} ${y2 + 6}`} />
    </g>
  );
}

export function AlloyDesignDiagram() {
  const steps = [
    ["01", "COMPOSITION", "chemistry space"],
    ["02", "PHASE STABILITY", "CALPHAD + DFT"],
    ["03", "MICROSTRUCTURE", "phases + defects"],
    ["04", "PROPERTIES", "mechanisms"],
    ["05", "VALIDATION", "target response"],
  ];
  return (
    <svg className="block h-auto w-full" viewBox="0 0 760 330" role="img" aria-label="Closed-loop alloy design workflow from composition through phase stability, microstructure, properties, validation, and optimisation">
      <rect width="760" height="330" fill={cream} />
      <text x="42" y="46" fill={navy} fontSize="17" fontWeight="600">CLOSED-LOOP COMPUTATIONAL ALLOY DESIGN</text>
      {steps.map(([number, title, subtitle], index) => {
        const x = 30 + index * 146;
        return (
          <g key={number}>
            <rect x={x} y="94" width="120" height="110" rx="7" fill={index === 4 ? navy : "white"} stroke={index === 4 ? navy : line} />
            <text x={x + 14} y="117" fill={index === 4 ? "#e7aaa0" : terra} fontSize="11" fontWeight="700">{number}</text>
            <text x={x + 60} y="150" fill={index === 4 ? "white" : navy} fontSize="11" fontWeight="700" textAnchor="middle">{title}</text>
            <text x={x + 60} y="176" fill={index === 4 ? "#d9e0e4" : "#64737c"} fontSize="10" textAnchor="middle">{subtitle}</text>
            {index < 4 && <Arrow x1={x + 120} y1={149} x2={x + 143} y2={149} />}
          </g>
        );
      })}
      <rect x="291" y="246" width="178" height="48" rx="24" fill={terra} />
      <text x="380" y="275" fill="white" fontSize="12" fontWeight="700" textAnchor="middle">OPTIMISATION + ML</text>
      <path d="M701 205v65H476" fill="none" stroke={terra} strokeWidth="2.5" />
      <path d="M484 264l-8 6 8 6" fill="none" stroke={terra} strokeWidth="2.5" />
      <path d="M291 270H62V211" fill="none" stroke={terra} strokeWidth="2.5" />
      <path d="M56 219l6-8 6 8" fill="none" stroke={terra} strokeWidth="2.5" />
      <text x="593" y="259" fill={terra} fontSize="10" fontWeight="600">ERROR / EXPERIMENT</text>
      <text x="126" y="259" fill={terra} fontSize="10" fontWeight="600">UPDATED DESIGN SPACE</text>
    </svg>
  );
}

function Cube({ x, y, size, ordered = false }) {
  const dx = size * 0.42;
  const dy = size * 0.28;
  const front = [[x, y], [x + size, y], [x + size, y + size], [x, y + size]];
  const back = front.map(([px, py]) => [px + dx, py - dy]);
  const corners = [...front, ...back];
  return (
    <g>
      <path d={`M${x} ${y}h${size}v${size}h-${size}zM${x + dx} ${y - dy}h${size}v${size}h-${size}zM${x} ${y}l${dx}-${dy}M${x + size} ${y}l${dx}-${dy}M${x + size} ${y + size}l${dx}-${dy}M${x} ${y + size}l${dx}-${dy}`} fill="none" stroke={navy} strokeWidth="1.5" />
      {corners.map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r={size * 0.07} fill={ordered ? terra : index % 3 === 0 ? terra : navy} />)}
      <circle cx={x + size / 2 + dx / 2} cy={y + size / 2 - dy / 2} r={size * 0.085} fill={ordered ? gold : terra} stroke={cream} strokeWidth="1" />
    </g>
  );
}

export function LatticeDiagram() {
  return (
    <svg className="block h-auto w-full" viewBox="0 0 760 330" role="img" aria-label="Coherent BCC matrix and B2 precipitate microstructure with magnified disordered BCC and chemically ordered B2 unit cells">
      <rect width="760" height="330" fill={sand} />
      <text x="34" y="38" fill={navy} fontSize="16" fontWeight="600">COHERENT BCC + B2 MICROSTRUCTURE</text>
      <g>
        <path d="M42 91l214-40 122 66-215 42z" fill="#d6dde0" stroke={navy} strokeWidth="1.5" />
        <path d="M42 91l121 68v127L42 216z" fill="#c2cdd2" stroke={navy} strokeWidth="1.5" />
        <path d="M163 159l215-42v126l-215 43z" fill="#aebdc4" stroke={navy} strokeWidth="1.5" />
        <path d="M142 127l93-19 57 31-94 19z" fill="#c9897f" stroke={terra} strokeWidth="1.5" />
        <path d="M142 127l56 31v65l-56-31z" fill={terra} stroke={navy} strokeWidth="1.5" />
        <path d="M198 158l94-19v65l-94 19z" fill="#9f5f58" stroke={navy} strokeWidth="1.5" />
        {[0, 1, 2, 3].map((row) => [0, 1, 2, 3, 4].map((column) => <circle key={`${row}-${column}`} cx={75 + column * 48 + row * 9} cy={104 + row * 34} r="4" fill={row > 0 && row < 3 && column > 1 && column < 4 ? gold : navy} opacity="0.85" />))}
        <text x="75" y="310" fill={navy} fontSize="11" fontWeight="600">BCC MATRIX</text>
        <text x="224" y="245" fill={cream} fontSize="10" fontWeight="700">B2</text>
        <path d="M293 150C346 135 392 128 429 124" fill="none" stroke={terra} strokeWidth="2" strokeDasharray="5 5" />
      </g>
      <rect x="426" y="61" width="302" height="235" rx="9" fill={cream} stroke={terra} strokeWidth="2" />
      <text x="452" y="91" fill={navy} fontSize="11" fontWeight="700">COHERENT LATTICE PLANES</text>
      {[0, 1, 2, 3].map((index) => <path key={index} d={`M452 ${113 + index * 20}H703`} stroke={index === 2 ? terra : line} strokeWidth={index === 2 ? 2 : 1} />)}
      <Cube x={468} y={184} size={64} />
      <Cube x={606} y={184} size={64} ordered />
      <text x="510" y="279" fill={navy} fontSize="10" fontWeight="700" textAnchor="middle">DISORDERED BCC</text>
      <text x="647" y="279" fill={terra} fontSize="10" fontWeight="700" textAnchor="middle">ORDERED B2</text>
      <circle cx="455" cy="309" r="5" fill={terra} /><text x="466" y="313" fill={navy} fontSize="9">A / matrix species</text>
      <circle cx="578" cy="309" r="5" fill={gold} /><text x="589" y="313" fill={navy} fontSize="9">B body-centre sublattice</text>
    </svg>
  );
}

function Plane({ x, y, count, shift = 0, ordered = false }) {
  return (
    <g>
      {Array.from({ length: count }, (_, index) => (
        <circle key={index} cx={x + index * 28 + shift} cy={y} r="6" fill={ordered ? (index % 2 ? gold : cream) : cream} stroke={ordered && index % 2 ? terra : navy} strokeWidth="1" />
      ))}
    </g>
  );
}

export function FaultDiagram() {
  return (
    <svg className="block h-auto w-full" viewBox="0 0 760 330" role="img" aria-label="Separate scientific schematics of an intrinsic stacking fault in an FCC lattice and an antiphase boundary in an ordered alloy">
      <rect width="760" height="330" fill={navy} />
      <line x1="380" y1="34" x2="380" y2="298" stroke="#607584" />
      <text x="28" y="38" fill="white" fontSize="14" fontWeight="600">INTRINSIC STACKING FAULT</text>
      <text x="408" y="38" fill="white" fontSize="14" fontWeight="600">ANTIPHASE BOUNDARY</text>
      {[
        [78, 0, "A"], [112, 14, "B"], [146, 28, "C"], [180, 0, "A"], [214, 14, "B"], [254, 0, "A"], [288, 14, "B"],
      ].map(([y, shift, label], index) => (
        <g key={index}><Plane x={44} y={Number(y)} count={10} shift={Number(shift)} /><text x="344" y={Number(y) + 4} fill={index === 5 ? "#e7aaa0" : "#b9c6cc"} fontSize="10">{label}</text></g>
      ))}
      <rect x="34" y="226" width="326" height="38" fill={terra} opacity="0.22" />
      <path d="M83 238h116" stroke="#e7aaa0" strokeWidth="2.5" />
      <path d="M191 232l8 6-8 6" fill="none" stroke="#e7aaa0" strokeWidth="2.5" />
      <text x="48" y="221" fill="#e7aaa0" fontSize="10" fontWeight="600">FAULT PLANE · MISSING C LAYER</text>
      <text x="208" y="242" fill="#e7aaa0" fontSize="9">b = a/6〈112〉</text>
      {[0, 1, 2, 3, 4, 5, 6].map((row) => <Plane key={row} x={418} y={78 + row * 34} count={10} shift={row % 2 ? 14 : 0} ordered />)}
      <rect x="563" y="59" width="18" height="235" fill={terra} opacity="0.35" />
      <path d="M572 58v238" stroke="#e7aaa0" strokeWidth="2.5" strokeDasharray="6 5" />
      <path d="M592 125h70" stroke="#e7aaa0" strokeWidth="2.5" /><path d="M654 119l8 6-8 6" fill="none" stroke="#e7aaa0" strokeWidth="2.5" />
      <text x="589" y="111" fill="#e7aaa0" fontSize="10" fontWeight="600">ORDER-PHASE SHIFT</text>
      <text x="589" y="284" fill="#b9c6cc" fontSize="9">wrong-neighbour bonds across APB</text>
    </svg>
  );
}

export function MethodsDiagram() {
  const stages = [
    ["ELECTRONS", "DFT", "energies · bonding"],
    ["ATOMS", "MD / potentials", "defects · kinetics"],
    ["PHASES", "CALPHAD", "stability · equilibria"],
    ["MICROSTRUCTURE", "evolution", "size · morphology"],
    ["PERFORMANCE", "mechanics", "strength · creep"],
  ];
  return (
    <svg className="block h-auto w-full" viewBox="0 0 760 330" role="img" aria-label="Hierarchical ICME workflow transferring information from electronic structure to atoms, phases, microstructure, and mechanical performance, with machine learning across every scale">
      <rect width="760" height="330" fill={cream} />
      <text x="34" y="39" fill={navy} fontSize="16" fontWeight="600">MULTISCALE INFORMATION FLOW</text>
      {stages.map(([scale, method, output], index) => {
        const x = 25 + index * 147;
        return (
          <g key={scale}>
            <rect x={x} y="76" width="124" height="132" rx="8" fill={index % 2 ? sand : "white"} stroke={line} />
            <text x={x + 62} y="102" fill={terra} fontSize="9" fontWeight="700" textAnchor="middle">{scale}</text>
            <text x={x + 62} y="144" fill={navy} fontSize="14" fontWeight="700" textAnchor="middle">{method}</text>
            <line x1={x + 22} y1="161" x2={x + 102} y2="161" stroke="#d5dcdf" />
            <text x={x + 62} y="185" fill="#64737c" fontSize="9" textAnchor="middle">{output}</text>
            {index < 4 && <Arrow x1={x + 124} y1={142} x2={x + 146} y2={142} color={terra} />}
          </g>
        );
      })}
      <rect x="79" y="245" width="602" height="49" rx="8" fill={navy} />
      <text x="380" y="267" fill="white" fontSize="12" fontWeight="700" textAnchor="middle">MACHINE LEARNING + MATERIALS INFORMATICS</text>
      <text x="380" y="283" fill="#bcc9cf" fontSize="9" textAnchor="middle">surrogates · uncertainty · active learning · inverse design</text>
      {stages.map((_, index) => <path key={index} d={`M${87 + index * 147} 208v37`} stroke={terra} strokeWidth="1.5" strokeDasharray="4 3" />)}
      <path d="M681 270h42V59H88" fill="none" stroke={terra} strokeWidth="2" />
      <path d="M96 53l-8 6 8 6" fill="none" stroke={terra} strokeWidth="2" />
      <text x="577" y="54" fill={terra} fontSize="9" fontWeight="600">DESIGN FEEDBACK</text>
    </svg>
  );
}
