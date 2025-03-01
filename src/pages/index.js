import React, { useEffect } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import "../styles/global.css";

const IndexPage = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="container">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#1a1a1a" },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#00d4ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2, direction: "none", random: true },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
        }}
      />

      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Alex Solo Mathew</h1>
          <h2>Web Developer</h2>
          <p>Building the future of the web, one pixel at a time.</p>
          <a href="#projects" className="cta-button">Explore My Work</a>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Projects</h2>
          <div className="project-grid">
            <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>Project 1</h3>
              <p>[Short description]</p>
              <p><strong>Tech:</strong> [e.g., React, Node]</p>
              <a href="[Link]" target="_blank">View Project</a>
            </motion.div>
            <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>Project 2</h3>
              <p>[Short description]</p>
              <p><strong>Tech:</strong> [e.g., Gatsby, API]</p>
              <a href="[Link]" target="_blank">View Project</a>
            </motion.div>
            <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>Project 3</h3>
              <p>[Short description]</p>
              <p><strong>Tech:</strong> [e.g., JS, CSS]</p>
              <a href="[Link]" target="_blank">View Project</a>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Contact Me</h2>
          <p>Email: alexsolomathew2@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/alexsolomathew/" target="_blank">Alex Solo Mathew</a></p>
          <p>GitHub: <a href="https://github.com/alexsolomathew/" target="_blank">@alexsolomathew</a></p>
        </motion.section>
      </main>

      <footer>
        <p>      © 2025 Alex Solo Mathew. Built with passion.</p>
      </footer>
    </div>
  );
};

export default IndexPage;
export const Head = () => <title>[Your Name] | Web Developer</title>;