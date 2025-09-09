import React from "react";

export function parseSpoilers(text: string): React.ReactNode[] {
  // Matches ||spoiler||
  const regex = /\|\|([^|]+)\|\|/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      React.createElement(
        require("../components/Spoiler").default,
        { key: match.index },
        match[1]
      )
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}
