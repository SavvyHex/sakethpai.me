"use client";
import { useEffect } from "react";

export default function SpoilerScript() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (el.classList.contains("spoiler")) {
        el.classList.toggle("revealed");
      }
    }
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  return null;
}
