"use client";

import React, { useEffect, useCallback } from "react";
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
      <div className="relative flex w-full max-w-3xl rounded-2xl overflow-hidden shadow-elevated bg-card max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-card/90 text-muted-foreground hover:text-foreground hover:bg-card transition-all shadow-sm"
          aria-label="Close popup"
        >
          <X size={16} />
        </button>

        {/* Left — Image Panel */}
        <div className="relative hidden md:flex md:w-[42%] flex-shrink-0">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1781780949/arb_qebzqg.png"
            alt="Graduate celebrating achievement"
            className="object-cover w-full h-full"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Text over image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-white text-xl font-bold leading-snug mb-2 font-display">
              Make Your Ivy-League Dream School A Reality
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              A call/demo appointment focused on maximizing your efforts and
              reaching the 99th percentile on the GMAT / GRE.
            </p>
          </div>
        </div>

        {/* Right — Form Panel */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <p id="popup-title" className="text-2xl font-bold text-foreground leading-tight mb-1 font-display">
              The start to your <span className="text-primary">99%ile Score</span>
            </p>
            <p className="text-sm text-muted-foreground">Schedule a one-on-one demo session and a call</p>
          </div>

          <DemoForm onSuccess={onClose} />

          <p className="text-xs text-muted-foreground mt-4 text-center">
            By clicking you agree to accept{' '}
            <a href="#" className="text-primary underline hover:text-secondary transition-colors">terms and conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
}
