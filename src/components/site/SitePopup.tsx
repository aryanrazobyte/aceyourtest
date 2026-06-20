"use client";

import React, { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import DemoPopup from "./Popup/DemoPopup";

const HOME_PATH = "/";
const POPUP_DELAY_MS = 5000;

export default function SitePopup() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHomePage = location.pathname === HOME_PATH;

  useEffect(() => {
    if (!isHomePage) {
      setOpen(false);
      return;
    }

    const autoOpen = setTimeout(() => setOpen(true), POPUP_DELAY_MS);
    return () => clearTimeout(autoOpen);
  }, [isHomePage]);

  if (!isHomePage) return null;

  return <DemoPopup isOpen={open} onClose={() => setOpen(false)} />;
}
