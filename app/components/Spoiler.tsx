"use client";

import React, { useState } from "react";

export default function Spoiler({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <span
      onClick={() => setRevealed((r) => !r)}
      style={{
        background: revealed ? "none" : "#444",
        color: revealed ? "inherit" : "#444",
        borderRadius: "4px",
        cursor: "pointer",
        padding: "0 0.3em",
        transition: "all 0.2s",
        userSelect: "none",
      }}
      title={revealed ? undefined : "Click to reveal spoiler"}
    >
      {revealed ? children : "Spoiler"}
    </span>
  );
}
