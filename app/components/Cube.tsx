"use client";

import { motion } from "framer-motion";
import { useState, useRef, JSX } from "react";

// Faces
import FaceIntro from "./FaceIntro";
import FaceEducation from "./FaceEducation";
import FaceSkills from "./FaceSkills";
import FaceProjects from "./FaceProjects";
import FaceExperience from "./FaceExperience";
import FaceContact from "./FaceContact";

type FaceConfig = {
  label: string;
  rotX: number;
  rotY: number;
  component: JSX.Element;
};

const faces: FaceConfig[] = [
  { label: "Intro", rotX: 0, rotY: 0, component: <FaceIntro /> },
  { label: "Education", rotX: 0, rotY: -90, component: <FaceEducation /> },
  { label: "Skills", rotX: 90, rotY: -90, component: <FaceSkills /> },
  { label: "Projects", rotX: 0, rotY: -180, component: <FaceProjects /> },
  { label: "Experience", rotX: 0, rotY: -270, component: <FaceExperience /> },
  { label: "Contact", rotX: -90, rotY: -270, component: <FaceContact /> },
];

export default function Cube() {
  // current rotation state (degrees). These can be any numbers (not normalized)
  const [rotation, setRotation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // last rotation before drag start (used as baseline while dragging)
  const lastRotationRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // pointer start info
  const pointerStartRef = useRef<{ x: number; y: number; id: number } | null>(
    null
  );

  // TUNING: drag sensitivity (degrees per pixel). Lower = slower / finer.
  const DRAG_SENSITIVITY = 0.35;

  // ---- helpers for angle math ----
  // modulus helper
  const mod = (n: number, m = 360) => ((n % m) + m) % m;

  // minimal angle difference in range (-180, 180]
  const minimalAngleDiff = (target: number, current: number) => {
    // compute ((target - current + 180) % 360) - 180
    return mod(target - current + 180, 360) - 180;
  };

  // find nearest face index (using shortest angular distances on both axes)
  const getNearestFaceIndex = (curX: number, curY: number) => {
    let bestIndex = 0;
    let bestDist = Infinity;
    for (let i = 0; i < faces.length; i++) {
      const dx = minimalAngleDiff(faces[i].rotX, curX);
      const dy = minimalAngleDiff(faces[i].rotY, curY);
      const dist = Math.hypot(dx, dy);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }
    return bestIndex;
  };

  // Given a face index and current angles, compute a target rotation that is the
  // canonical face angles shifted by the minimal diffs (so animation takes shortest path)
  const computeTargetRotationForFace = (
    faceIndex: number,
    curX: number,
    curY: number
  ) => {
    const face = faces[faceIndex];
    const dx = minimalAngleDiff(face.rotX, curX);
    const dy = minimalAngleDiff(face.rotY, curY);
    return { x: curX + dx, y: curY + dy };
  };

  // ---- Pointer handlers for drag ----
  function onPointerDown(e: React.PointerEvent) {
    // capture pointer so we keep receiving move/up
    (e.target as Element).setPointerCapture(e.pointerId);
    pointerStartRef.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
    lastRotationRef.current = { ...rotation };
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!pointerStartRef.current) return;
    // how far have we dragged
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;

    // compute new rotation based on drag
    const newY = lastRotationRef.current.y + dx * DRAG_SENSITIVITY;
    const newX = lastRotationRef.current.x - dy * DRAG_SENSITIVITY;

    setRotation({ x: newX, y: newY });
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!pointerStartRef.current) return;
    // release pointer capture
    try {
      (e.target as Element).releasePointerCapture(pointerStartRef.current.id);
    } catch {
      /* ignore */
    }
    pointerStartRef.current = null;
    lastRotationRef.current = { ...rotation };

    // snap to nearest face along shortest path
    const nearestIndex = getNearestFaceIndex(rotation.x, rotation.y);
    const target = computeTargetRotationForFace(
      nearestIndex,
      rotation.x,
      rotation.y
    );
    setRotation(target);
    lastRotationRef.current = target;
  }

  // Clickable face selection
  const onSelectFace = (index: number) => {
    const target = computeTargetRotationForFace(index, rotation.x, rotation.y);
    setRotation(target);
    lastRotationRef.current = target;
  };

  // active face index for UI highlight
  const activeFaceIndex = getNearestFaceIndex(rotation.x, rotation.y);

  return (
    <div className="cube-container flex items-center justify-center h-screen bg-black relative">
      <motion.div
        className="relative"
        style={{
          width: "var(--face-size)",
          height: "var(--face-size)",
          transformStyle: "preserve-3d",
          touchAction: "none", // allow pointer events without scrolling
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 18,
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* faces in original mapping/order */}
        <div
          className="cube-face"
          style={{
            transform: "rotateY(0deg) translateZ(calc(var(--face-size) / 2))",
          }}
        >
          <FaceIntro />
        </div>

        <div
          className="cube-face"
          style={{
            transform: "rotateY(90deg) translateZ(calc(var(--face-size) / 2))",
          }}
        >
          <FaceEducation />
        </div>

        <div
          className="cube-face"
          style={{
            transform:
              "rotateX(-90deg) translateZ(calc(var(--face-size) / 2)) rotateZ(90deg)",
          }}
        >
          <FaceSkills />
        </div>

        <div
          className="cube-face"
          style={{
            transform: "rotateY(180deg) translateZ(calc(var(--face-size) / 2))",
          }}
        >
          <FaceProjects />
        </div>

        <div
          className="cube-face"
          style={{
            transform: "rotateY(-90deg) translateZ(calc(var(--face-size) / 2))",
          }}
        >
          <FaceExperience />
        </div>

        <div
          className="cube-face"
          style={{
            transform:
              "rotateX(90deg) translateZ(calc(var(--face-size) / 2)) rotateZ(90deg)",
          }}
        >
          <FaceContact />
        </div>
      </motion.div>

      {/* Clickable selector - pills */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {faces.map((f, i) => (
          <button
            key={f.label}
            onClick={() => onSelectFace(i)}
            className={`px-3 py-1 rounded-full text-sm select-none focus:outline-none transition-all
              ${
                i === activeFaceIndex
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            aria-pressed={i === activeFaceIndex}
            aria-label={`Go to ${f.label}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <style jsx>{`
        .cube-face {
          position: absolute;
          width: var(--face-size);
          height: var(--face-size);
          background: #1e1e1e;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
