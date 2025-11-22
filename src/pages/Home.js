// src/pages/Home.jsx – Cinematic Home + "Click me" → Chat launch
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [launching, setLaunching] = useState(false);

  // Layout + orbit controls
  const TITLE_SIZE = "3rem";
  const PAGE_TOP_OFFSET = "7vh";
  const EARTH_TOP = "56%";
  const ORBIT_RADIUS = 170;
  const SHIP_SIZE = 130;
  const EARTH_SIZE = 240;

  const ORBIT_DURATION = 22; // seconds for a full revolution

  const handleLaunchClick = () => {
    if (launching) return;
    setLaunching(true);
    // allow the spaceship animation to play, then go to chat page
    setTimeout(() => {
      navigate("/chat");
    }, 2200);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 20%, #15002c 0%, #050010 45%, #000000 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: PAGE_TOP_OFFSET,
        color: "white",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ===== TITLE + HOLOGRAM ROW ===== */}
      <div
        style={{
          width: "100%",
          maxWidth: 1400,
          padding: "0 24px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 16,
          zIndex: 10,
        }}
      >
        {/* Title with shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{
            margin: 0,
            fontSize: TITLE_SIZE,
            fontWeight: 900,
            lineHeight: 1.1,
            textAlign: "center",
            position: "relative",
            display: "inline-block",
            letterSpacing: "1.5px",
          }}
        >
          <span
            style={{
              background:
                "linear-gradient(90deg, #ec4899, #a78bfa, #c084fc, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(236,72,153,0.45)",
              padding: "6px 10px",
            }}
          >
            Welcome to Dharani’s Digital Twin
          </span>

          {/* Shimmer overlay */}
          <motion.span
            aria-hidden
            initial={{ x: "-120%" }}
            animate={{ x: "140%" }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "35%",
              height: "100%",
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent)",
              mixBlendMode: "screen",
              pointerEvents: "none",
            }}
          />
        </motion.h1>

        {/* Hologram twin image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          style={{
            position: "relative",
            width: 70,
            height: 70,
            borderRadius: 18,
            overflow: "hidden",
            boxShadow:
              "0 0 25px rgba(167,139,250,0.8), 0 0 60px rgba(236,72,153,0.7)",
            border: "2px solid rgba(244,244,255,0.4)",
            background:
              "radial-gradient(circle at 30% 0%, rgba(244,244,255,0.4), transparent 55%)",
            flexShrink: 0,
          }}
        >
          <motion.div
            aria-hidden
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(59,130,246,0.4), transparent)",
              mixBlendMode: "soft-light",
            }}
          />
          <img
            src="/twinimage.png"
            alt="Hologram of Dharani"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* scanline */}
          <motion.div
            aria-hidden
            animate={{ y: ["-120%", "120%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "26%",
              background:
                "linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)",
              mixBlendMode: "screen",
            }}
          />
        </motion.div>
      </div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 1 }}
        style={{
          marginTop: 12,
          marginBottom: 24,
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontSize: "1.6rem",
            color: "#e0d4ff",
            textShadow: "0 0 24px rgba(139,92,246,0.5)",
            margin: 0,
          }}
        >
          Ask me about my projects, skills, or how to contact me.
        </p>
      </motion.div>

      {/* Click Me button */}
      <motion.button
        onClick={handleLaunchClick}
        whileHover={!launching ? { scale: 1.05 } : {}}
        whileTap={!launching ? { scale: 0.97 } : {}}
        style={{
          padding: "10px 26px",
          borderRadius: "999px",
          border: "none",
          cursor: launching ? "default" : "pointer",
          background: launching
            ? "linear-gradient(90deg,#4b5563,#6b7280)"
            : "linear-gradient(90deg,#8b5cf6,#ec4899)",
          boxShadow: launching
            ? "0 0 10px rgba(107,114,128,0.6)"
            : "0 0 20px rgba(236,72,153,0.8)",
          color: "white",
          fontSize: "1.05rem",
          fontWeight: 600,
          marginBottom: 28,
          zIndex: 10,
        }}
        disabled={launching}
      >
        {launching ? "Launching the twin..." : "To know more about me, click me"}
      </motion.button>

      {/* ===== CENTER CLUSTER: NEBULA + CONSTELLATION + EARTH + ORBIT ===== */}

      {/* Base nebula glow (static, gentle) */}
      <div
        style={{
          position: "absolute",
          top: EARTH_TOP,
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: EARTH_SIZE * 3,
          height: EARTH_SIZE * 3,
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "10%",
            background:
              "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.5), transparent 55%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.4), transparent 60%)",
            filter: "blur(40px)",
            opacity: 0.9,
          }}
        />
      </div>

      {/* Constellation lines behind Earth */}
      <div
        style={{
          position: "absolute",
          top: EARTH_TOP,
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: EARTH_SIZE * 2.1,
          height: EARTH_SIZE * 2.1,
          pointerEvents: "none",
          zIndex: 4,
          opacity: 0.45,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          style={{ filter: "drop-shadow(0 0 10px rgba(191,219,254,0.7))" }}
        >
          <motion.path
            d="M20 40 L80 20 L150 40 L180 90 L140 150 L70 160 L30 120 Z"
            fill="none"
            stroke="rgba(191,219,254,0.6)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          />
          {[
            [20, 40],
            [80, 20],
            [150, 40],
            [180, 90],
            [140, 150],
            [70, 160],
            [30, 120],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r={2.3}
              fill="rgba(239,246,255,0.9)"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Earth */}
      <motion.div
        style={{
          position: "absolute",
          top: EARTH_TOP,
          left: "50%",
          width: EARTH_SIZE,
          height: EARTH_SIZE,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 5,
        }}
      >
        {/* Extra aura */}
        <div
          style={{
            position: "absolute",
            width: "260%",
            height: "260%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4), transparent 60%)",
            filter: "blur(35px)",
            zIndex: -1,
          }}
        />
        <motion.img
          src="/earth.png"
          alt="Earth"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow:
              "0 0 45px rgba(59,130,246,0.8), 0 0 100px rgba(56,189,248,0.5)",
          }}
        />
      </motion.div>

      {/* Spaceship orbiting Earth + nebula trail (with launch animation) */}
      <div
        style={{
          position: "absolute",
          top: EARTH_TOP,
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 6,
        }}
      >
        <motion.div
          style={{
            position: "relative",
            width: ORBIT_RADIUS * 2 + SHIP_SIZE,
            height: ORBIT_RADIUS * 2 + SHIP_SIZE,
          }}
          animate={launching ? { rotate: 0 } : { rotate: 360 }}
          transition={
            launching
              ? { duration: 0 }
              : {
                  repeat: Infinity,
                  ease: "linear",
                  duration: ORBIT_DURATION,
                }
          }
        >
          {/* Nebula trail that orbits with the ship */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(${ORBIT_RADIUS - 40}px, -50%)`,
              width: SHIP_SIZE * 1.8,
              height: SHIP_SIZE * 1.2,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 50%, rgba(236,72,153,0.6), transparent 70%)",
              filter: "blur(26px)",
            }}
            animate={
              launching
                ? { opacity: [0.8, 0.2], scale: [1, 0.5] }
                : { opacity: [0.1, 0.8, 0.2], scale: [0.9, 1.1, 1] }
            }
            transition={
              launching
                ? { duration: 1.5, ease: "easeInOut" }
                : {
                    duration: ORBIT_DURATION,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />

          {/* Spaceship at orbit radius */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(${ORBIT_RADIUS}px, -50%)`,
              width: SHIP_SIZE,
              height: SHIP_SIZE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            animate={
              launching
                ? {
                    scale: [1, 1.4, 0.2],
                    y: [0, -120, -260],
                    opacity: [1, 1, 0],
                  }
                : {}
            }
            transition={
              launching
                ? { duration: 1.9, ease: "easeInOut" }
                : undefined
            }
          >
            <img
              src="/spaceship.png"
              alt="Spaceship"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter:
                  "drop-shadow(0 0 60px rgba(167,139,250,0.6)) drop-shadow(0 0 120px rgba(236,72,153,0.5))",
                display: "block",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom floating nav stays as in your previous version if you want */}
      {/* You can keep or remove it; not required for the chatbot flow */}
    </div>
  );
}
