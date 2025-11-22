// src/App.js  ← Cosmic Version with separate Chat page
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import DreamScene from "./components/DreamScene";
import AsteroidTransition from "./components/AsteroidTransition";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

// Simple wrapper page for the chat route
function ChatScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          fontSize: "2.6rem",
          marginBottom: "10px",
          textShadow: "0 0 30px rgba(129,140,248,0.9)",
        }}
      >
        Chat with my Digital Twin
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          maxWidth: "520px",
          color: "#c7d2fe",
        }}
      >
        Ask me about my projects, skills, or how to contact me. 
        Type <span style={{ color: "#f9a8d4" }}>"projects"</span>,{" "}
        <span style={{ color: "#f9a8d4" }}>"about"</span>, or{" "}
        <span style={{ color: "#f9a8d4" }}>"contact"</span> and I&apos;ll 
        take you there.
      </p>
    </div>
  );
}

function AppWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");

  // 🔹 INITIAL CHAT: load from localStorage OR show first welcome message
  const [chat, setChat] = useState(() => {
    const saved = localStorage.getItem("twin_chat");
    if (saved) return JSON.parse(saved);

    // First-time visitor → twin speaks first
    return [
      {
        sender: "twin",
        text:
          "Hi, I’m Dharani’s Digital Twin 👋✨ Welcome to my cosmic space! " +
          "You can ask me about my projects, skills, or how to contact me.",
      },
    ];
  });

  const [transitioning, setTransitioning] = useState(false);
  const [nextRoute, setNextRoute] = useState(null);

  // persist chat
  useEffect(() => {
    localStorage.setItem("twin_chat", JSON.stringify(chat));
  }, [chat]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = message.trim();

    // append user message + "Thinking..." in one update
    setChat((prev) => [
      ...prev,
      { sender: "user", text: userMsg },
      { sender: "twin", text: "Thinking..." },
    ]);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMsg }),
      });

      if (!res.ok) throw new Error("Network error");
      const data = await res.json();

      let replyText = data.reply || "I'm here in the stars...";

      const lower = userMsg.toLowerCase();
      if (lower.includes("project")) {
        replyText = "Launching into my projects... Hold tight!";
        setTimeout(() => {
          setNextRoute("/projects");
          setTransitioning(true);
        }, 1000);
      } else if (
        lower.includes("contact") ||
        lower.includes("reach") ||
        lower.includes("email")
      ) {
        replyText = "Opening cosmic communication channel...";
        setTimeout(() => {
          setNextRoute("/contact");
          setTransitioning(true);
        }, 1000);
      } else if (
        lower.includes("about") ||
        lower.includes("who") ||
        lower.includes("story") ||
        lower.includes("yourself")
      ) {
        replyText =
          "Traveling through my universe to tell you my story...";
        setTimeout(() => {
          setNextRoute("/about");
          setTransitioning(true);
        }, 1000);
      }

      // replace the last "Thinking..." with the real reply
      setChat((prev) => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;
        if (lastIndex >= 0 && updated[lastIndex].sender === "twin") {
          updated[lastIndex] = { sender: "twin", text: replyText };
        } else {
          updated.push({ sender: "twin", text: replyText });
        }
        return updated;
      });
    } catch (err) {
      console.error("Chat backend error:", err);
      setChat((prev) => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;
        if (lastIndex >= 0 && updated[lastIndex].sender === "twin") {
          updated[lastIndex] = {
            sender: "twin",
            text: "Lost in space... Try again?",
          };
        } else {
          updated.push({
            sender: "twin",
            text: "Lost in space... Try again?",
          });
        }
        return updated;
      });
    }
  };

  const handleClearChat = () => {
    localStorage.removeItem("twin_chat");
    setChat([
      {
        sender: "twin",
        text:
          "Hi, I’m Dharani’s Digital Twin 👋✨ Welcome back! " +
          "Ask me about my projects, skills, or how to contact me.",
      },
    ]);
  };

  // Chat only on /chat
  const isChatPage = location.pathname === "/chat";

  return (
    <>
      {/* Cosmic Background Everywhere */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <DreamScene />
      </div>

      {/* Asteroid Transition */}
      <AnimatePresence>
        {transitioning && (
          <AsteroidTransition
            onComplete={() => {
              setTransitioning(false);
              if (nextRoute) {
                navigate(nextRoute);
                setNextRoute(null);
              }
            }}
          />
        )}
      </AnimatePresence>

      {/* Chat UI only on /chat page */}
      {isChatPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 60,
            pointerEvents: "auto",
          }}
        >
          {/* Chat history */}
          <div
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "12px",
              background: "rgba(0,0,0,0.45)",
              padding: "10px",
              borderRadius: "10px",
              width: "340px",
              backdropFilter: "blur(8px)",
            }}
          >
            {chat.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  background:
                    msg.sender === "user"
                      ? "linear-gradient(90deg, #8b5cf6, #ec4899)"
                      : "rgba(255,255,255,0.15)",
                  color: "white",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  maxWidth: "85%",
                  fontSize: "1rem",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input row */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              background: "rgba(255,255,255,0.08)",
              padding: "12px 16px",
              borderRadius: "16px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <input
              type="text"
              value={message}
              placeholder="Ask your twin..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                outline: "none",
                fontSize: "1.1rem",
                width: "240px",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
                border: "none",
                color: "white",
                padding: "10px 16px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Send
            </button>
          </div>

          {chat.length > 0 && (
            <button
              onClick={handleClearChat}
              style={{
                marginTop: "12px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ff6b6b",
                padding: "8px 16px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Clear Chat
            </button>
          )}
        </motion.div>
      )}

      {/* Routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
