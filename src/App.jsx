import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Task Manager App",
    description:
      "A simple task management application for creating, organizing and tracking tasks.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/shim-zzz/Task-Manager-App",
  },
  {
    title: "Drugs & Medicine Inventory",
    description:
      "An inventory management system for organizing medicines and keeping important records.",
    tech: ["React", "JavaScript"],
    github:
      "https://github.com/shim-zzz/Drugs-and-Medicine-Inventory-System",
  },
  {
    title: "My React App",
    description:
      "A React project built to practice reusable components and modern frontend development.",
    tech: ["React", "Vite"],
    github: "https://github.com/shim-zzz/my-react-app",
  },
  {
    title: "Product Inventory System",
    description:
      "A product inventory application for organizing and managing product information.",
    tech: ["React", "JavaScript"],
    github:
      "https://github.com/shim-zzz/product-inventory-system",
  },
];

const skills = [
  "Frontend Development",
  "UI & Web Design",
  "Responsive Development",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          shim<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="nav-button">
          Contact Me
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="status">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-intro">HELLO, I'M SHIM 👋</p>

        <h1>
          Student
          <br />
          <span>Developer.</span>
        </h1>

        <p className="hero-description">
          Dangal Greetings!
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary-button">
            View Projects
            <span>↗</span>
          </a>

          <a href="#contact" className="button secondary-button">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/shim-zzz"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit-scene">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="orbit-item react-item">
            <span>⚛</span>
            React
          </div>

          <div className="orbit-item js-item">
            <span>JS</span>
            JavaScript
          </div>

          <div className="orbit-item ui-item">
            <span>✦</span>
            UI Design
          </div>

          <div className="orbit-item github-item">
            <span>⌘</span>
            GitHub
          </div>

          <div className="developer-core">
            <div className="core-glow"></div>

            <div className="core-content">
              <span className="core-label">FRONTEND</span>

              <h3>
                shim<span>.</span>
              </h3>

              <div className="core-line"></div>

              <p>
                building things
                <br />
                for the web.
              </p>
            </div>
          </div>

          <div className="floating-dot dot-one"></div>
          <div className="floating-dot dot-two"></div>
          <div className="floating-dot dot-three"></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-top">
        <span className="section-number">01</span>
        <span className="section-label">ABOUT ME</span>
      </div>

      <div className="about-grid">
        <h2>
          A developer who
          <span> enjoys building.</span>
        </h2>

        <div className="about-content">
          <p>
            I'm a student who enjoys exploring technology and
            building things that turn ideas into something real.
            Most of what I create comes from curiosity and a
            desire to learn something new.
          </p>

          <p>
            I'm still growing as a developer, and I enjoy
            experimenting with different ideas, working on
            personal projects, and learning from every project
            I take on.
          </p>

          <a href="#projects" className="text-link">
            View my work
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section">
        <div className="section-top">
          <span className="section-number">02</span>
          <span className="section-label">WHAT I DO</span>
        </div>

        <div className="skills-heading">
          <h2>
            What I work
            <span> with.</span>
          </h2>

          <p>
            The main areas I focus on when creating
            websites and applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                0{index + 1}
              </span>

              <span className="skill-name">
                {skill}
              </span>

              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-top">
        <span className="section-number">03</span>

        <span className="section-label">
          SELECTED PROJECTS
        </span>
      </div>

      <div className="projects-heading">
        <h2>
          Things I've
          <span> built.</span>
        </h2>

        <p>
          A few projects from my development journey.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.title}
          >
            <div className="project-image">
              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-symbol">
                &lt;/&gt;
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-open"
                aria-label={`Open ${project.title} on GitHub`}
              >
                ↗
              </a>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="view-project"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section">
      <div className="section-top">
        <span className="section-number">04</span>
        <span className="section-label">MY JOURNEY</span>
      </div>

      <div className="experience">
        <div className="experience-date">
          2024 — Present
        </div>

        <div className="experience-main">
          <div>
            <h2>Student Developer</h2>
            <span>Learning & Building</span>
          </div>

          <p>
            Currently learning through school, personal
            projects, and hands-on experimentation. I'm
            focused on improving my skills, trying new
            ideas, and gaining experience by building
            things along the way.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://formspree.io/f/mrpbjoon",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        form.reset();

        setStatus(
          "Message sent successfully! ✦"
        );
      } else {
        let errorMessage =
          "Something went wrong. Please try again.";

        try {
          const data = await response.json();

          if (data?.errors?.length) {
            errorMessage = data.errors
              .map((error) => error.message)
              .join(", ");
          }
        } catch {
          // Keep the default error message.
        }

        setStatus(errorMessage);
      }
    } catch (error) {
      setStatus(
        "Unable to send your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="section-top">
          <span className="section-number">05</span>
          <span className="section-label">CONTACT</span>
        </div>

        <div className="feedback-heading">
          <h2>
            Let's get
            <br />
            <span>in touch.</span>
          </h2>

          <p>
            Have a question, want to work together, or just
            want to say hello? Send me a message below.
          </p>
        </div>

        <form
          className="feedback-form"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="feedback-button"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}

            {!sending && <span>↗</span>}
          </button>

          {status && (
            <p
              className={
                status.includes("successfully")
                  ? "form-status success"
                  : "form-status error"
              }
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home">
            shim<span>.</span>
          </a>

          <p>
            Student developer learning, building,
            and exploring new ideas.
          </p>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Elsewhere</h4>

          <a
            href="https://github.com/shim-zzz"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Shim</span>

        <span>
          Built while learning & growing.
        </span>

        <a href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {showTop && (
        <a href="#home" className="back-top">
          ↑
        </a>
      )}
    </>
  );
}

export default App;
