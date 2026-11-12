import './index.css'
import Navbar from "./Navbar"
import { motion } from "motion/react"

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import ProjectPage from './ProjectPage'




function HomePage() {

  return (

    <main>
      <Navbar />

      
    <section className="hero">

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.16,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <motion.p
          className="eyebrow"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
        >
          <span className="status-dot"></span>
          COMPUTER SCIENCE · SOFTWARE DEVELOPMENT · 3D TECHNOLOGY
        </motion.p>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 45 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          Engineering ideas through
          <span> code, creativity & technology.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              },
            }}
        >
          I'm a Computer Science student at the University of Auckland
          interested in software development, interactive 3D environments
          and the intersection of technology and the built environment.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a href="#projects" className="primary-button">
            Explore my work ↗
          </a>
          <a href="#about" className="secondary-button">
            About me
          </a>
        </motion.div>
      </motion.div>
    </section>

      <section className="projects" id="projects">
        <div className="section-heading">
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>Projects & exploration.</h2>
          <p>A collection of technical and creative work.</p>
        </div>

        
        
        <div className="project-grid">

          <Link to="/projects/horror-game" className="project-card">

            <div className="project-image">
              <img
                src="/images/horror-game.png"
                alt="3D horror game environment"
              />
              <span className="image-index">
                01 / GAME DEVELOPMENT
              </span>
              <span className="image-caption">
                REAL-TIME 3D DEVELOPMENT
              </span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>UNITY · C# · SHADERLAB</span>
                <span>01</span>
              </div>
              <h3>3D FPS Horror Game</h3>
              <p>
                Developing a first-person horror game in Unity,
                implementing custom shaders and visual effects
                while independently managing development.
              </p>
              <div className="project-tags">
                <span>UNITY</span>
                <span>C#</span>
                <span>SHADERLAB</span>
                <span>GIT</span>
              </div>
            </div>
          </Link>

          <Link to="/projects/recipe-website" className="project-card">
            <div className="project-image">
              <span className="image-index">02 / WEB DEVELOPMENT</span>
              <img
                src="public/images/recipe-website.png"
                alt="3D horror game environment"
              />
              
              <span className="image-caption">FULL-STACK DEVELOPMENT</span>
            </div>
              

            <div className="project-info">
              <div className="project-meta">
                <span>FLASK · SQLITE · HTML/CSS</span>
                <span>02</span>
              </div>
              <h3>Recipe Website</h3>
              <p>
                Developed a recipe platform supporting over
                10,000 recipes, with search, reviews, favourites,
                navigation and database functionality.
              </p>
              <div className="project-tags">
                <span>PYTHON</span>
                <span>FLASK</span>
                <span>SQLITE</span>
                <span>JINJA2</span>
              </div>
            </div>
          </Link>

          
          {/* PROJECT 03 — TOP-DOWN GAME */}
          <Link to="/projects/topdown-game" className="project-card">
            <div className="project-image topdown-image">
              <span className="image-index">03 / GAME DEVELOPMENT</span>
              <img
                src="public/images/topdown-game.png"
                alt="2D top-down game environment"
              />
              <span className="image-caption">2D TOP-DOWN GAME</span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>PYTHON · GAME DEVELOPMENT</span>
                <span>03</span>
              </div>

              <h3>2D Top-Down Game</h3>
              <p>
                Developed a 2D top-down game, implementing
                gameplay systems and interactive mechanics
                as part of a game development project.
              </p>

              <div className="project-tags">
                <span>PYTHON</span>
                <span>GAME DEVELOPMENT</span>
                <span>GITHUB</span>
              </div>
            </div>
          </Link>

          {/* PROJECT 04 — PLATFORMER */}
          <Link to="/projects/platformer" className="project-card">
            <div className="project-image platformer-image">
              <span className="image-index">04 / GAME DEVELOPMENT</span>
              <img
                src="public/images/platformer.png"
                alt="2D platformer game environment"
              />
              <span className="image-caption">2D PLATFORMER</span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>PYTHON · GLSL</span>
                <span>04</span>
              </div>

              <h3>2D Platformer</h3>
              <p>
                Developed a 2D platformer, working on gameplay
                mechanics and GLSL shaders within a collaborative
                development environment.
              </p>

              <div className="project-tags">
                <span>PYTHON</span>
                <span>GLSL</span>
                <span>AGILE</span>
                <span>GITHUB</span>
              </div>
            </div>
          </Link>

          {/* PROJECT 05 — SAIFI SWIMWEAR */}
          <Link to="/projects/saifi-swimwear" className="project-card">
            <div className="project-image saifi-image">
              <span className="image-index">05 / CAPSTONE PROJECT</span>

              <div className="saifi-preview">
                <span>SAIFI</span>
                <div>SWIMWEAR</div>
                <div className="saifi-line"></div>
                <small>ONLINE STORE / 2026</small>
              </div>

              <span className="image-caption">FULL-STACK E-COMMERCE</span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>FLASK · PYTHON · STRIPE</span>
                <span>05</span>
              </div>

              <h3>SAIFI Swimwear</h3>
              <p>
                Contributed to a team capstone project developing
                an e-commerce platform. Worked on backend
                architecture using Flask, modular blueprints,
                SQLAlchemy and Stripe Checkout integration.
              </p>

              <div className="project-tags">
                <span>PYTHON</span>
                <span>FLASK</span>
                <span>SQLALCHEMY</span>
                <span>STRIPE</span>
                <span>SQL</span>
              </div>
            </div>
          </Link>


        </div>


      </section>

      
      <section className="about" id="about">
        <p className="eyebrow">02 / ABOUT</p>

        <h2>
          A developer interested in
          <span> what's possible.</span>
        </h2>

        <p>
          I'm studying Computer Science at the University of Auckland,
          with interests spanning software development, interactive
          3D technology and data-driven applications.
        </p>

        <p>
          Through university projects and independent development,
          I've worked with programming languages, backend systems,
          databases, game development and collaborative software
          workflows. I'm particularly interested in exploring how
          software engineering can be applied to the built environment,
          architectural technology and digital engineering.
        </p>

        <p>
          I'm always looking to develop new technical skills,
          experiment with ideas and build software that solves
          interesting problems.
        </p>
      </section>


      <section className="experience" id="experience">
        <p className="eyebrow">03 / EXPERIENCE</p>
        <h2>Experience & leadership.</h2>

        <div className="experience-list">
          <div className="experience-item">
            <div>
              <h3>Founding Executive</h3>
              <p>University of Auckland Boxing Club</p>
            </div>
            <span>2025 — 2026</span>
          </div>

          <div className="experience-item">
            <div>
              <h3>Mathematics Tutor</h3>
              <p>High School Mathematics Tutoring</p>
            </div>
            <span>2024</span>
          </div>

          <div className="experience-item">
            <div>
              <h3>Beekeeper</h3>
              <p>Tahi</p>
            </div>
            <span>2025</span>
          </div>

          <div className="experience-item">
            <div>
              <h3>POS Operator</h3>
              <p>BP</p>
            </div>
            <span>2022 — 2024</span>
          </div>
        </div>
      </section>



      
      <section className="skills" id="skills">
        <p className="eyebrow">04 / TECHNICAL SKILLS</p>
        <h2>Tools & technologies.</h2>

        <div className="skill-category">
          <h3>Programming languages</h3>
          <div className="skill-list">
            <span>Python</span>
            <span>C#</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>C</span>
            <span>SQL</span>
            <span>R</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Frameworks & technologies</h3>
          <div className="skill-list">
            <span>Flask</span>
            <span>Jinja2</span>
            <span>SQLite</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Unity</span>
            <span>ShaderLab</span>
            <span>GLSL</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Developer tools & workflow</h3>
          <div className="skill-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>Visual Studio</span>
            <span>PyCharm</span>
            <span>IntelliJ</span>
            <span>Eclipse</span>
            <span>Trello</span>
            <span>Agile</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Libraries</h3>
          <div className="skill-list">
            <span>NumPy</span>
            <span>Python Arcade</span>
          </div>
        </div>
      </section>


      
      <section className="contact" id="contact">
        <div className="contact-header">
          <p className="eyebrow">05 / GET IN TOUCH</p>

          <h2>
            Let's build
            <span> something great.</span>
          </h2>

          <p className="contact-description">
            I'm always interested in connecting with developers,
            designers and people working on interesting projects.
            Whether it's a collaboration, an opportunity or just
            a conversation, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">

          <a
            href="mailto:Wagneralek@gmail.com"
            className="contact-card"
          >
            <div className="contact-card-top">
              <span className="contact-icon">✉</span>
              <span className="contact-arrow">↗</span>
            </div>

            <div className="contact-card-content">
              <span className="contact-label">EMAIL</span>
              <h3>Get in touch</h3>
              <p>Wagneralek@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/alekwag"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-top">
              <span className="contact-icon">⌘</span>
              <span className="contact-arrow">↗</span>
            </div>

            <div className="contact-card-content">
              <span className="contact-label">GITHUB</span>
              <h3>Explore my code</h3>
              <p>github.com/alekwag</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/alexander-wagner-0b5985359/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-top">
              <span className="contact-icon">in</span>
              <span className="contact-arrow">↗</span>
            </div>

            <div className="contact-card-content">
              <span className="contact-label">LINKEDIN</span>
              <h3>Let's connect</h3>
              <p>linkedin.com/in/alek-wagner</p>
            </div>
          </a>

        </div>

        <div className="contact-footer">
          <span className="contact-availability">
            <span className="status-dot"></span>
            OPEN TO OPPORTUNITIES
          </span>

          <span>BASED IN AUCKLAND, NEW ZEALAND</span>
        </div>
      </section>


      
      <footer>
        <p>© 2026 Alexander Wagner</p>
        <p>BUILT WITH REACT & TYPESCRIPT</p>
      </footer>

    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
