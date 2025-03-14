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
              <h3>Personal Porfolio Website</h3>
              <p>Developed a responsive and visually engaging portfolio using React, showcasing my web development skills and projects.</p>
              <p><strong>Tech:</strong> Gatsby, React, CSS3, JavaScript, framer-motion, tsparticles</p>
              <a href="https://alexsolomathew.netlify.app/#home" target="_blank" rel="noopener noreferrer">View Site</a>
               <br />
              <a href="https://github.com/AlexSolomathew/my-portfolio" target="_blank" rel="noopener noreferrer">View Code</a>
            </motion.div>
            <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>Weatherman</h3>
              <p>Designed and built a dynamic, responsive portfolio website using React, featuring real-time weather updates via the OpenWeatherMap API. The site showcases my development skills with smooth animations and an interactive particle background</p>
              <p><strong>Tech:Gatsby, React, CSS3, JavaScript, Framer Motion, tsParticles, Axios</strong></p>
              <a href="https://weatherman250.netlify.app/" target="_blank"  rel="noopener noreferrer">View Project</a>
              <br />
              <a href="https://github.com/AlexSolomathew/weatherman" target="_blank" rel="noopener noreferrer">View Code</a>
            </motion.div>
            <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>Snake Game</h3>
              <p>Designed and deployed an interactive Snake Game using Lovable.dev, featuring Arrow key controls, a timed bonus food system (2x size, color-changing for 10 seconds), and realistic snake visuals (patterns, pointy tail, flickering tongue). Completed and deployed online, demonstrating rapid prototyping, game design, and web development skills.</p>
              <p><strong>Tech:</strong> Python, Lovable.dev, Web Deployment.</p>
              <a href="https://slithery-feast-frenzy.lovable.app/" target="_blank"  rel="noopener noreferrer">View Project</a>
              <br />
              <a href="https://github.com/alexsolomathew/slithery-feast-frenzy" target="_blank" rel="noopener noreferrer">View Code</a>
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
export const Head = () => <title>Alex Solo Mathew | Web Developer</title>;