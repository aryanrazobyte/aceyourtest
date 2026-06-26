"use client";

import React, { useEffect, useState } from "react";
import DemoPopup from "./Popup/DemoPopup";

const POPUP_SHOWN_KEY = "aceyourtest-popup-shown";
const POPUP_DELAY_MS = 5000;

export default function SitePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_SHOWN_KEY) === "1") return;

    const autoOpen = setTimeout(() => {
      sessionStorage.setItem(POPUP_SHOWN_KEY, "1");
      setOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(autoOpen);
  }, []);

  return <DemoPopup isOpen={open} onClose={() => setOpen(false)} />;
}
