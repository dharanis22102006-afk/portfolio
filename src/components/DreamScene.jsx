// src/components/DreamScene.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function DreamScene() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true }}
        style={{ background: "black", width: "100%", height: "100%" }}
      >
        {/* ⭐ Slightly larger, twinkling stars */}
        <Stars
          radius={180}      // spread of sky
          depth={80}
          count={7000}      // density
          factor={6}        // ⭐ <- ONLY THIS CHANGED (was 4)
          saturation={0}
          fade              // enables subtle twinkle
          speed={1.5}       // twinkle speed
        />

        {/* ✨ Small sparkle layer for realism */}
        <Stars
          radius={120}
          depth={40}
          count={2000}
          factor={2}        // tiny twinkles
          fade
          speed={2.5}
        />
      </Canvas>
    </div>
  );
}
