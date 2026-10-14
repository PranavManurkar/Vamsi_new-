import { Suspense } from "react";
import PublicationsContent from "@/components/PublicationsContent";

export default function Publications() {
  return (
    <Suspense fallback={<div className="bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16"><div className="mx-auto h-64 w-full max-w-[1160px]"></div></div>}>
      <PublicationsContent />
    </Suspense>
  );
}