import Image from "next/image";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const members = [
  { name: "Burra Vijayusha", role: "Undergraduate Student", summary: "Computational modeling of alloy properties and phase stability", image: "/vijusha.jpeg" },
  { name: "Pohrselvan", role: "Undergraduate Student", summary: "Atomistic simulations and material deformation mechanisms", image: "/pohrselvan.jpg" },
  { name: "Keerthan", role: "Undergraduate Student", summary: "High-throughput screening and machine learning for materials", image: "/kirtan.jpeg" },
  { name: "Arham Aneeq", role: "Undergraduate Student", summary: "Thermodynamic modeling of multi-component alloy systems", image: "/arham.jpg" },
];

function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <a href="#contact" aria-label="Email" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#0f172b] bg-white text-[#800020] transition-colors hover:bg-[#0f172b] hover:text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
      </a>
      <a href="#contact" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#0f172b] bg-white text-[#800020] transition-colors hover:bg-[#0f172b] hover:text-white">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M6.9 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.5 10h2.8v8.5H5.5V10Zm4.4 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.4v4.4h-2.8v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.8V10Z"/></svg>
      </a>
      <a href="#publications" aria-label="Scholar" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#0f172b] bg-white text-[#800020] transition-colors hover:bg-[#0f172b] hover:text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4"><path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4"/></svg>
      </a>
    </div>
  );
}

export default function Team() {
  return (
    <section id="people" className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2 className={`${playfair.className} text-[2.2rem] font-bold leading-none tracking-[-0.01em] text-[#800020] sm:text-[3rem]`}>
            Our Team
          </h2>
          <p className={`${inter.className} mx-auto mt-4 max-w-4xl text-base text-black sm:text-[1.05rem]`}>
            A multidisciplinary team pushing the frontiers of computational materials science
          </p>
        </div>

        {/* PI — clickable link */}
        <Link href="/faculty" className="group mt-10 block">
          <article className="rounded-2xl border border-[#0f172b] bg-white px-6 py-6 shadow-[0_2px_14px_rgba(15,23,43,0.06)] transition-all duration-200 hover:border-[#0f172b]/80 hover:shadow-[0_8px_28px_rgba(15,23,43,0.12)] sm:px-8 sm:py-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <Image src="/photo.png" alt="Dr. K. V. Vamsi" width={108} height={108}
                className="h-24 w-24 rounded-full object-cover sm:h-[104px] sm:w-[104px]" />
              <div className="min-w-0 flex-1">
                <span className={`${inter.className} inline-flex rounded-full border border-[#0f172b] bg-white px-3 py-1 text-xs font-medium text-[#800020]`}>
                  Principal Investigator
                </span>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <h3 className={`${playfair.className} text-[2rem] font-semibold leading-tight text-[#800020] transition-colors group-hover:text-[#5F0017] sm:text-[2.3rem]`}>
                    Dr. K. V. Vamsi
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#0f172b] bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#800020] opacity-0 transition-opacity group-hover:opacity-100">
                    View Profile
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </span>
                </div>
                <p className={`${inter.className} mt-2 text-[1.05rem] leading-relaxed text-black`}>
                  Assistant Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore
                </p>
                <p className={`${inter.className} mt-4 max-w-4xl text-[1rem] leading-relaxed text-black`}>
                  Leading the VAMSI Research Group with expertise in computational materials science,
                  high-temperature alloys, and ICME frameworks. Previously postdoctoral researcher at UC Santa Barbara.
                </p>
                <div className="mt-5"><SocialIcons /></div>
              </div>
            </div>
          </article>
        </Link>

        {/* Students */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member, index) => (
            <article key={member.name} className="rounded-2xl border border-[#0f172b] bg-white px-5 py-6 text-center shadow-[0_2px_14px_rgba(15,23,43,0.06)]">
              <Image src={member.image} alt={member.name} width={96} height={96}
                className="mx-auto h-24 w-24 rounded-full object-cover"
                style={{ objectPosition: `${35 + index * 10}% 35%` }} />
              <h4 className={`${playfair.className} mt-5 text-[1.55rem] font-semibold leading-tight text-[#800020]`}>
                {member.name}
              </h4>
              <p className={`${inter.className} mt-2 text-sm font-medium text-black`}>{member.role}</p>
              <p className={`${inter.className} mt-3 min-h-[56px] text-[0.98rem] leading-relaxed text-black`}>{member.summary}</p>
              <div className="mt-4 border-t border-[#0f172b]/10 pt-3">
                <div className="flex items-center justify-center gap-3"><SocialIcons /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}