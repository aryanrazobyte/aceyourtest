"use client";

import React, { useEffect, useState } from "react";
import DemoPopup from "./Popup/DemoPopup";

export default function SitePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 5000);

    function onOpenEvent() {
      setOpen(true);
    }

    window.addEventListener("open-site-popup", onOpenEvent as EventListener);

    return () => {
      clearTimeout(t);
      window.removeEventListener("open-site-popup", onOpenEvent as EventListener);
    };
  }, []);

  return <DemoPopup isOpen={open} onClose={() => setOpen(false)} />;
}
