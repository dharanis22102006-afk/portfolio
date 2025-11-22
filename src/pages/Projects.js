// src/pages/Projects.js  ← TOP-HEAVY COSMIC VERSION + BACK BUTTON
import React from "react";
import { motion } from "framer-motion";
import DreamScene from "../components/DreamScene";
import { useNavigate } from "react-router-dom";

export default function Projects() {
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

      {/* Floating Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "5rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #ec4899, #8b5cf6, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          textShadow: "0 0 50px rgba(236, 72, 153, 0.6)",
          zIndex: 10,
        }}
      >
        My Projects
      </motion.h1>

      {/* Project Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        style={{
          position: "relative",
          zIndex: 20,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 40px 40px",
          color: "white",
          fontSize: "1.6rem",
          lineHeight: "2.4rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.4rem", opacity: 0.9, marginBottom: "20px" }}>
          Here are the worlds I've built with code and creativity:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            marginTop: "20px",
          }}
        >
          {/* E-commerce Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
              background: "rgba(139,92,246,0.2)",
              padding: "30px",
              borderRadius: "20px",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(139,92,246,0.4)",
              boxShadow: "0 10px 30px rgba(139,92,246,0.2)",
            }}
          >
            <h3 style={{ fontSize: "2rem", marginBottom: "12px", color: "#ec4899" }}>
              E-commerce Platform
            </h3>
            <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>React + Firebase</p>
            <p>Full-stack shopping experience</p>
          </motion.div>

          {/* Mental Health Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              background: "rgba(236,72,153,0.2)",
              padding: "30px",
              borderRadius: "20px",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(236,72,153,0.4)",
              boxShadow: "0 10px 30px rgba(236,72,153,0.2)",
            }}
          >
            <h3 style={{ fontSize: "2rem", marginBottom: "12px", color: "#8b5cf6" }}>
              Mental Health App
            </h3>
            <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>MERN Stack</p>
            <p>Helping people find peace</p>
          </motion.div>

          {/* Digital Twin Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{
              background: "rgba(168,85,247,0.2)",
              padding: "30px",
              borderRadius: "20px",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(168,85,247,0.4)",
              boxShadow: "0 10px 30px rgba(168,85,247,0.2)",
            }}
          >
            <h3 style={{ fontSize: "2rem", marginBottom: "12px", color: "#a78bfa" }}>
              This Digital Twin
            </h3>
            <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>React + Three.js + Groq AI</p>
            <p>You're living in it</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
