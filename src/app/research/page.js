import Research from "@/components/Research";
import CoreExpertise from "@/components/CoreExpertise";

export default function ResearchPage() {
  return (
    <div className="min-h-screen text-black">
      <main className="mx-auto w-full max-w-[1240px] px-4 pt-8 sm:px-6 md:px-8 lg:px-10">
        <Research />
        <CoreExpertise />
      </main>
    </div>
  );
}
