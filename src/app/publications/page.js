import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Publications from "@/components/Publications";

export default function ContributionsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-black">
      <Header />
      <main className="mx-auto w-full max-w-[1240px] px-4 pt-8 sm:px-6 md:px-8 lg:px-10">
        <Publications />
      </main>
      <Footer />
    </div>
  );
}
