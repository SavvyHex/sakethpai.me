"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const faces = [
  { content: "Intro", rotX: 0, rotY: 0 },
  { content: "Education", rotX: 0, rotY: -90 },
  { content: "Skills", rotX: 90, rotY: -90 },
  { content: "Projects", rotX: 0, rotY: -180 },
  { content: "Experience", rotX: 0, rotY: -270 },
  { content: "Contact", rotX: -90, rotY: -270 },
];

export default function Cube() {
  const [index, setIndex] = useState(0);

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      setIndex((prev) => (prev + 1) % faces.length);
    } else {
      setIndex((prev) => (prev - 1 + faces.length) % faces.length);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const { rotX, rotY } = faces[index];

  return (
    <div className="cube-container flex items-center justify-center h-screen bg-black">
      <motion.div
        className="relative"
        style={{
          width: "var(--face-size)",
          height: "var(--face-size)",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: rotX,
          rotateY: rotY,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        {/* Intro */}
        <div
          className="cube-face"
          style={{
            transform: "rotateY(0deg) translateZ(calc(var(--face-size) / 2))", // was 100px
          }}
        >
          Intro
        </div>

        {/* Education */}
        <div
          className="cube-face"
          style={{
            transform: "rotateY(90deg) translateZ(calc(var(--face-size) / 2))",
          }}
        >
          Education
        </div>

        {/* Skills - bottom, rotated back upright */}
        <div
          className="cube-face"
          style={{
            transform:
              "rotateX(-90deg) translateZ(calc(var(--face-size) / 2)) rotateZ(90deg)",
          }}
        >
          Skills
        </div>

        {/* Projects */}
        <div
          className="cube-face"
          style={{
            transform: "rotateY(180deg) translateZ(calc(var(--face-size) / 2))",
          }}
        >
          Projects
        </div>

        {/* Experience */}
        <div
          className="cube-face"
          style={{
            transform: "rotateY(-90deg) translateZ(calc(var(--face-size) / 2))",
          }}
        >
          Experience
        </div>

        {/* Contact - top, rotated back upright */}
        <div
          className="cube-face"
          style={{
            transform:
              "rotateX(90deg) translateZ(calc(var(--face-size) / 2)) rotateZ(90deg)",
          }}
        >
          Contact
        </div>
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
          font-size: 20px;
          color: white;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
