import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio website built using HTML, CSS, and JavaScript — showcasing my skills, projects, and contact information.</p>
          <a href="https://dharanis22102006-afk.github.io/portfolio/" target="_blank" rel="noreferrer" className="btn">🔗 View Live</a>
        </div>
        <div className="project-card">
          <h3>E-Commerce Website</h3>
          <p>An elegant and responsive e-commerce website that provides a seamless online shopping experience with product listings and modern design.</p>
          <a href="https://dharanis22102006-afk.github.io/E-commerce-website/" target="_blank" rel="noreferrer" className="btn">🔗 View Live</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
