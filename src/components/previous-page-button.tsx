"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PreviousPageButton() {
  const router = useRouter();
  return (
    <button
      className="bg-white dark:bg-[hsl(209,23%,22%)] drop-shadow-xl px-3 py-2 font-medium rounded-sm mt-16 mb-12 flex gap-2 items-center"
      onClick={() => router.back()}
    >
      <MoveLeft size={18} />
      Go back
    </button>
  );
}
