"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import DemoForm from "./DemoForm";

interface DemoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoPopup({ isOpen, onClose }: DemoPopupProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="relative flex w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-white max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-gray-500 hover:text-gray-800 hover:bg-white transition-all shadow-sm"
          aria-label="Close popup"
        >
          <X size={16} />
        </button>

        {/* Left — Image Panel */}
        <div className="relative hidden md:flex md:w-[42%] flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1781780949/arb_qebzqg.png"
            alt="Graduate celebrating achievement"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Text overlay removed as requested */}
        </div>

        {/* Right — Form Panel */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <p
              id="popup-title"
              className="text-2xl font-bold text-gray-900 leading-tight mb-1"
            >
              The start to your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500">
                99% Score
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Schedule a one-on-one demo session and a call
            </p>
          </div>

          <DemoForm onSuccess={onClose} />

          <p className="text-xs text-gray-400 mt-4 text-center">
            By clicking you agree to accept{" "}
            <a
              href="#"
              className="text-indigo-500 underline hover:text-indigo-700 transition-colors"
            >
              terms and conditions
            </a>{" "}
            of Top One Percent
          </p>
        </div>
      </div>
    </div>
  );
}
