import React, { useEffect } from "react";
import "./App.css";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    new Typed(".typing", {
      strings: ["Dharani S", "a Web Developer", "a CSE Student", "a Tech Enthusiast"],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });

    ScrollReveal().reveal("section", {
      delay: 200,
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      origin: "bottom",
    });

    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    const toggle = document.getElementById("themeToggle");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  };

  return (
    <div className="App">
      <Navbar />
      <button id="themeToggle" onClick={toggleTheme}>🌙</button>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <button id="backToTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </div>
  );
}

export default App;
