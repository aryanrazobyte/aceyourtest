"use client";

import DemoPopup from "@/components/DemoPopup";
import { usePopup } from "@/hooks/usePopup";

export default function Home() {
  const popup = usePopup(true); // open on mount; set to false to open manually

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Top One Percent
        </h1>
        <p className="text-gray-500 mb-8">
          Achieve the 99 percentile on GMAT &amp; GRE
        </p>
        <button
          onClick={popup.open}
          className="px-8 py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-indigo-600 to-rose-500
            hover:from-indigo-700 hover:to-rose-600
            transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          Get a Free Demo
        </button>
      </div>

      <DemoPopup isOpen={popup.isOpen} onClose={popup.close} />
    </main>
  );
}
