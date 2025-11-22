// src/pages/Intro.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const [start, setStart] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setStart(true);

    // After animation, go to home
    setTimeout(() => {
      localStorage.setItem("seen_intro", "yes");
      navigate("/");
    }, 3000); // matches animation duration
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(circle at 50% 50%, #130026, #000)",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      {/* Text */}
      {!start && (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
              textShadow: "0 0 25px #e879f9",
            }}
          >
            Let’s make this more interactive!
          </motion.h1>

          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            style={{
              padding: "14px 28px",
              fontSize: "1.4rem",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(90deg,#8b5cf6,#ec4899)",
              boxShadow: "0 0 20px rgba(236,72,153,0.8)",
              color: "white",
            }}
          >
            Click Me
          </motion.button>
        </>
      )}

      {/* Spaceship */}
      <motion.img
        src="/spaceship.png"
        alt="ship"
        initial={{ x: "-200px", y: 150, rotate: -20 }}
        animate={
          start
            ? {
                x: 80,
                y: -80,
                scale: 1.4,
                rotate: 10,
              }
            : {}
        }
        transition={{ duration: 2.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "160px",
          bottom: "10%",
          left: "10%",
          zIndex: 5,
        }}
      />

      {/* Chat Orb */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={
          start
            ? {
                x: -80,
                y: 80,
                scale: 0.2,
                opacity: 0,
              }
            : {}
        }
        transition={{ duration: 2.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "12%",
          right: "14%",
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#f9a8ff,#a78bfa,#4c1d95,#1e1b4b)",
          boxShadow: "0 0 40px rgba(168,85,247,0.8)",
        }}
      />
    </div>
  );
}
