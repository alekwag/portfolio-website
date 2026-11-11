
import './index.css'

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">YOUR NAME<span>.</span></a>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's connect ↗
        </a>
      </nav>

      <section className="hero">
        
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot"></span>
            COMPUTER SCIENCE · SOFTWARE DEVELOPMENT · 3D TECHNOLOGY
          </p>

          <h1>
            Engineering ideas through
            <span> code, creativity & technology.</span>
          </h1>

          <p className="hero-description">
            I'm a Computer Science student at the University of Auckland
            interested in software development, interactive 3D environments
            and the intersection of technology and the built environment.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore my work ↗
            </a>
            <a href="#about" className="secondary-button">
              About me
            </a>
          </div>
        </div>


        <div className="hero-visual">
          <div className="visual-label">DIGITAL DESIGN / 001</div>
          <div className="visual-grid"></div>
          <div className="visual-circle"></div>
          <div className="visual-cross">+</div>
          <div className="visual-coordinates">
            36° 50' S<br />
            174° 45' E
          </div>
          <div className="visual-caption">
            DESIGNING WHAT'S NEXT.
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-heading">
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>Projects & exploration.</h2>
          <p>A collection of technical and creative work.</p>
        </div>

        
        
        <div className="project-grid">

          <article className="project-card">
            <div className="project-image unity-image">
              <span className="image-index">01 / GAME DEVELOPMENT</span>
              <div className="unity-frame">
                <div className="unity-building"></div>
                <div className="unity-ground"></div>
              </div>
              <span className="image-caption">REAL-TIME 3D DEVELOPMENT</span>
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
          </article>

          <article className="project-card">
            <div className="project-image automation-image">
              <span className="image-index">02 / WEB DEVELOPMENT</span>
              <div className="automation-lines">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
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
          </article>

          <article className="project-card">
            <div className="project-image massing-image">
              <span className="image-index">03 / GAME DEVELOPMENT</span>
              <div className="massing-shape shape-one"></div>
              <div className="massing-shape shape-two"></div>
              <div className="massing-shape shape-three"></div>
              <span className="image-caption">2D GAME SYSTEMS</span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>PYTHON · GLSL</span>
                <span>03</span>
              </div>
              <h3>2D Games Collection</h3>
              <p>
                Developed a top-down game and platformer,
                implementing gameplay systems and GLSL shaders
                in a collaborative development environment.
              </p>
              <div className="project-tags">
                <span>PYTHON</span>
                <span>GLSL</span>
                <span>GITHUB</span>
                <span>AGILE</span>
              </div>
            </div>
          </article>

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
            href="https://linkedin.com/in/alek-wagner"
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
        <p>© 2026 YOUR NAME</p>
        <p>BUILT WITH REACT & TYPESCRIPT</p>
      </footer>
    </main>
  )
}

export default App
