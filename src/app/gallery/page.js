import Image from "next/image";
import PageHeader from "@/components/site/PageHeader";

const galleryImages = [
  {
    id: 1,
    title: "Lab Research",
    src: "/gallery/2c19b0_160c35c9d2da48378c9cf8fbdca1eab4~mv2.jpg.jpeg",
  },
  {
    id: 2,
    title: "Team Collaboration",
    src: "/gallery/2c19b0_172401da6fda496888cbe35ad182164d~mv2.jpg.jpeg",
  },
  {
    id: 3,
    title: "Research Facility",
    src: "/gallery/2c19b0_1952824eabaa4768b7f23518c065af59~mv2.jpg.jpeg",
  },
  {
    id: 4,
    title: "Computational Work",
    src: "/gallery/2c19b0_2d919bc6ebd6476b967b9223f31fa798~mv2.jpg.jpeg",
  },
  {
    id: 5,
    title: "Materials Testing",
    src: "/gallery/2c19b0_32701bb5973446c39c4e8b0b7614ad71~mv2.jpg.jpeg",
  },
  {
    id: 6,
    title: "Lab Equipment",
    src: "/gallery/2c19b0_3d268305d30a49e8a670c355b3d88712~mv2.jpg.jpeg",
  },
  {
    id: 7,
    title: "Seminar Discussion",
    src: "/gallery/2c19b0_71d5910317d24a8fb2ac242cccf48a85~mv2.jpg.jpeg",
  },
  {
    id: 8,
    title: "Data Analysis",
    src: "/gallery/2c19b0_86eeb0a603974fd181954853c48ba8ef~mv2.jpg.jpeg",
  },
  {
    id: 9,
    title: "Group Meeting",
    src: "/gallery/2c19b0_88c1a9506c4a424291e22b5754854fb7~mv2.jpg.jpeg",
  },
];

// Touch devices cannot hover, so the overlay and caption stay visible on coarse pointers.
function GalleryCard({ image }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="relative h-64 w-full overflow-hidden bg-secondary">
        <Image
          src={image.src}
          alt={image.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-coarse:opacity-100" />
      </div>
      <h3
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 p-4 text-lg font-semibold text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-coarse:opacity-100"
      >
        {image.title}
      </h3>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      {/* redesign: no gallery in the design (D1); built from the design card + PageHeader patterns. Zoom eased from 110% to 105%. */}
      <PageHeader title="Gallery" />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}
        </div>
      </section>
    </>
  );
}
