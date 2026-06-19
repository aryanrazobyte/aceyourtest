"use client";

import React, { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import DemoPopup from "./Popup/DemoPopup";
import { BOOK_CONSULTATION_PATH } from "@/lib/site-constants";

export default function SitePopup() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    function onOpenEvent() {
      setOpen(true);
    }

    window.addEventListener("open-site-popup", onOpenEvent as EventListener);

    const autoOpen =
      location.pathname !== BOOK_CONSULTATION_PATH
        ? setTimeout(() => setOpen(true), 5000)
        : undefined;

    return () => {
      if (autoOpen) clearTimeout(autoOpen);
      window.removeEventListener("open-site-popup", onOpenEvent as EventListener);
    };
  }, [location.pathname]);

  return <DemoPopup isOpen={open} onClose={() => setOpen(false)} />;
}
