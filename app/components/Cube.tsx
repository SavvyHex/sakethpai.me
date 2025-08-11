"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect, JSX } from "react";

// Faces
import FaceIntro from "./FaceIntro";
import FaceEducation from "./FaceEducation";
import FaceSkills from "./FaceSkills";
import FaceProjects from "./FaceProjects";
import FaceExperience from "./FaceExperience";
import FaceContact from "./FaceContact";

type FaceConfig = { rotX: number; rotY: number; component: JSX.Element };

const faces: FaceConfig[] = [
  { rotX: 0, rotY: 0, component: <FaceIntro /> },        // Intro
  { rotX: 0, rotY: -90, component: <FaceEducation /> },  // Education
  { rotX: 90, rotY: -90, component: <FaceSkills /> },    // Skills
  { rotX: 0, rotY: -180, component: <FaceProjects /> },  // Projects
  { rotX: 0, rotY: -270, component: <FaceExperience />}, // Experience
  { rotX: -90, rotY: -270, component: <FaceContact /> }, // Contact
];

export default function Cube() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const lastRotationRef = useRef({ x: 0, y: 0 });

  // Mouse / touch handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    startRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!startRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;

    // Rotate based on drag distance
    const rotY = lastRotationRef.current.y + dx * 0.4; // horizontal drag → Y rotation
    const rotX = lastRotationRef.current.x - dy * 0.4; // vertical drag → X rotation
    setRotation({ x: rotX, y: rotY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!startRef.current) return;
    lastRotationRef.current = rotation;
    startRef.current = null;

    // Snap to nearest face
    const nearest = getNearestFace(rotation.x, rotation.y);
    setRotation(nearest);
    lastRotationRef.current = nearest;
  };

  // Find nearest face based on current angles
  const getNearestFace = (x: number, y: number) => {
    let nearest = faces[0];
    let minDist = Infinity;
    for (const face of faces) {
      const dist = Math.hypot(normAngle(face.rotX - x), normAngle(face.rotY - y));
      if (dist < minDist) {
        minDist = dist;
        nearest = face;
      }
    }
    return { x: nearest.rotX, y: nearest.rotY };
  };

  // Normalize to [-180, 180]
  const normAngle = (angle: number) => {
    let a = ((angle + 180) % 360) - 180;
    if (a < -180) a += 360;
    return a;
  };

  return (
    <div className="cube-container flex items-center justify-center h-screen bg-black">
      <motion.div
        className="relative"
        style={{
          width: "var(--face-size)",
          height: "var(--face-size)",
          transformStyle: "preserve-3d",
          touchAction: "none",
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 18,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {faces.map((face, i) => {
          const transforms = [
            "rotateY(0deg) translateZ(calc(var(--face-size) / 2))",
            "rotateY(90deg) translateZ(calc(var(--face-size) / 2))",
            "rotateX(-90deg) translateZ(calc(var(--face-size) / 2)) rotateZ(90deg)",
            "rotateY(180deg) translateZ(calc(var(--face-size) / 2))",
            "rotateY(-90deg) translateZ(calc(var(--face-size) / 2))",
            "rotateX(90deg) translateZ(calc(var(--face-size) / 2)) rotateZ(90deg)",
          ];
          return (
            <div
              key={i}
              className="cube-face"
              style={{
                transform: transforms[i],
              }}
            >
              {face.component}
            </div>
          );
        })}
      </motion.div>

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
