// src/pages/About.js ← FINAL WORKING – Photo + Background + Text + BACK BUTTON
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// IMAGES
const BACKGROUND = "/background.png";
const PHOTO = "/dharani.png";

export default function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${BACKGROUND})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "7vw",
        padding: "0 5vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* ⭐ BACK BUTTON */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          padding: "12px 24px",
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "white",
          background: "linear-gradient(90deg, #ec4899, #a78bfa)",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          zIndex: 999,
          boxShadow: "0 0 25px rgba(167,139,250,0.6)",
        }}
      >
        ⬅ Back
      </motion.button>

      {/* LEFT SIDE PHOTO */}
      <motion.img
        src={PHOTO}
        alt="Dharani"
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          maxWidth: "42%",
          height: "auto",
          borderRadius: "28px",
          boxShadow: "0 0 90px rgba(168, 85, 247, 0.7)",
          border: "4px solid rgba(139, 92, 246, 0.5)",
          zIndex: 10,
        }}
      />

      {/* RIGHT SIDE TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        style={{ maxWidth: "680px", zIndex: 10 }}
      >
        <h1
          style={{
            fontSize: "7.5rem",
            fontWeight: "900",
            color: "#fff",
            textShadow: "0 0 50px #c084fc, 0 0 100px #e879f9",
            margin: "0 0 40px 0",
            letterSpacing: "2px",
          }}
        >
          ABOUT ME
        </h1>

        <div
          style={{
            padding: "50px 60px",
            borderRadius: "40px",
            background: "rgba(25, 10, 80, 0.52)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            border: "2px solid rgba(180, 120, 255, 0.5)",
            boxShadow:
              "0 20px 70px rgba(0,0,0,0.7), inset 0 0 80px rgba(180,140,255,0.1)",
          }}
        >
          <p
            style={{
              fontSize: "2.2rem",
              color: "#ffffff",
              margin: "0 0 30px 0",
              fontWeight: "500",
            }}
          >
            Hi, I’m Dharani — a frontend developer who believes code should feel
            like magic.
          </p>
          <p
            style={{
              fontSize: "1.9rem",
              color: "#e8dfff",
              lineHeight: "1.9",
              margin: "0 0 40px 0",
            }}
          >
            I build immersive web experiences that blend art, technology, and
            emotion.
          </p>
          <p
            style={{
              fontSize: "1.8rem",
              color: "#d4bbff",
              fontStyle: "italic",
            }}
          >
            “Turning ideas into universes, one line at a time.”
          </p>
        </div>
      </motion.div>
    </div>
  );
}
