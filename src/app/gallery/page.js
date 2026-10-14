"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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

function GalleryCard({ image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_rgba(15,23,43,0.08)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(15,23,43,0.15)]"
    >
        <div className="relative h-64 w-full overflow-hidden bg-[#e2e8f0]">
        <Image
          src={image.src}
          alt={image.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172b]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">{image.title}</h3>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-black">
      <Header />
      <main className="mx-auto w-full max-w-[1240px] px-4 py-12 sm:px-6 md:px-8 lg:px-10">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#0f172b] sm:text-5xl">Gallery</h1>
              {/* <p className="mt-3 max-w-2xl text-base leading-relaxed text-black sm:text-lg">
                Explore our research group activities, collaborations, and moments from our journey in computational materials science.
              </p> */}
        </section>

        {/* Gallery Grid */}
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <GalleryCard key={image.id} image={image} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
