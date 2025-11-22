// src/pages/Contact.js
import React from "react";
import { motion } from "framer-motion";
import DreamScene from "../components/DreamScene";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>

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

      {/* Background Universe */}
      <div style={{ position: "absolute", inset: 0 }}>
        <DreamScene />
      </div>

      {/* PAGE TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "5.5rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 60px rgba(59, 130, 246, 0.6)",
          zIndex: 10,
        }}
      >
        Let's Connect
      </motion.h1>

      {/* CONTENT BLOCK */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        style={{
          position: "relative",
          zIndex: 20,
          maxWidth: "800px",
          margin: "0 auto",
          padding: "180px 40px 60px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "2.2rem", color: "white", marginBottom: "60px" }}>
          Send a signal across the cosmos
        </p>

        {/* LINKS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:your.email@gmail.com"
            style={{ color: "#60a5fa", fontSize: "1.8rem", textDecoration: "none" }}
          >
            your.email@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            style={{ color: "#60a5fa", fontSize: "1.8rem", textDecoration: "none" }}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/yourusername"
            style={{ color: "#60a5fa", fontSize: "1.8rem", textDecoration: "none" }}
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}
