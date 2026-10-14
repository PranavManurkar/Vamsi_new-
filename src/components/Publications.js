import { Suspense } from "react";
import PublicationsContent from "@/components/PublicationsContent";

export default function Publications() {
  return (
    <Suspense fallback={<div className="px-5 pb-16 pt-32 md:px-8 md:pt-40"><div className="mx-auto h-64 max-w-7xl" /></div>}>
      <PublicationsContent />
    </Suspense>
  );
}