import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const alumniMembers = [
  {
    name: "Amirthan",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/photo.png",
  },
  {
    name: "Nitheesvar",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/photo.png",
  },
  {
    name: "Vamshi Krishna Rao",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/photo.png",
  },
];

export default function Alumni() {
  return (
    <section id="alumni" className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2
            className={`${playfair.className} text-[2.2rem] font-bold leading-none tracking-[-0.01em] text-[#800020] sm:text-[3rem]`}
          >
            Alumni
          </h2>
          <p
            className={`${inter.className} mx-auto mt-4 max-w-3xl text-base text-black sm:text-[1.05rem]`}
          >
            Former members who have contributed to our research excellence
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {alumniMembers.map((member, index) => (
            <article
              key={member.name}
              className="rounded-2xl border border-[#0f172b]/10 bg-white px-6 py-7 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={92}
                height={92}
                className="mx-auto h-[92px] w-[92px] rounded-full object-cover"
                style={{ objectPosition: `${34 + index * 14}% 35%` }}
              />

              <h3 className={`${playfair.className} mt-5 text-[1.55rem] font-semibold leading-tight text-[#800020]`}>
                {member.name}
              </h3>

              <p className={`${inter.className} mt-2 text-sm font-medium text-black`}>
                {member.role}
              </p>

              <p className={`${inter.className} mt-1 text-[0.92rem] text-black`}>
                {member.batch}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
