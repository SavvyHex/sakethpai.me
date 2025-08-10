"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import FaceIntro from "./FaceIntro";
import FaceEducation from "./FaceEducation";
import FaceProjects from "./FaceProjects";

export default function Cube() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <group>
          {/* Cube Geometry */}
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
              attach="material"
              color="#222"
              opacity={0.05}
              transparent
            />
          </mesh>

          {/* Intro Face */}
          <Html position={[0, 0, 1.01]} transform occlude>
            <div className="w-64 h-64">
              <FaceIntro />
            </div>
          </Html>

          {/* Education Face */}
          <Html
            position={[1.01, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
            transform
            occlude
          >
            <div className="w-64 h-64">
              <FaceEducation />
            </div>
          </Html>

          {/* Projects Face */}
          <Html
            position={[-1.01, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            transform
            occlude
          >
            <div className="w-64 h-64">
              <FaceProjects />
            </div>
          </Html>

          {/* TODO: Skills, Experience, Contact faces */}
        </group>

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
