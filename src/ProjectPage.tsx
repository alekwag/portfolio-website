import './ProjectPage.css'
import { useLayoutEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { projects } from "./projects"
import Navbar from "./Navbar"
import useScrollReveal from "./useScrollReveal"
import CustomCursor from "./CustomCursor"

function ProjectPage() {
  const { slug } = useParams()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [slug])

  useScrollReveal(slug)

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug
  )

  const project = projects[projectIndex]

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project not found.</h1>
        <Link to="/">Return to portfolio ↗</Link>
      </main>
    )
  }

  const previousProject =
    projects[projectIndex - 1]

  const nextProject =
    projects[projectIndex + 1]

  return (
    <main className="project-detail">

      <CustomCursor />
        <Navbar />

      <section className="project-detail-hero">

        <div className="scroll-reveal-watch">
          <p className="eyebrow scroll-reveal">
            PROJECT / {project.number} · {project.category}
          </p>

          <h1 className="scroll-reveal">{project.title}</h1>

          <div className="detail-tags scroll-reveal">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="scroll-reveal-watch">
          <img
            className="project-detail-image scroll-reveal"
            src={project.image}
            alt={`${project.title} project preview`}
          />

          <p className="project-overview scroll-reveal">
            {project.overview}
          </p>
        </div>

      </section>

      <section className="project-detail-content">

        <div className="detail-section scroll-reveal">
          <p className="eyebrow">01 / CONTRIBUTIONS</p>
          <h2>What I worked on.</h2>

          <ul>
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section scroll-reveal">
          <p className="eyebrow">02 / DEVELOPMENT</p>
          <h2>Technical challenges.</h2>

          <ul>
            {project.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section scroll-reveal">
          <p className="eyebrow">03 / TECHNOLOGIES</p>
          <h2>Tools & technologies.</h2>

          <div className="detail-tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

      </section>

      <nav className="project-pagination scroll-reveal">

        {previousProject ? (
          <Link to={`/projects/${previousProject.slug}`}>
            ← Previous project
            <strong>{previousProject.title}</strong>
          </Link>
        ) : (
          <span />
        )}

        {nextProject ? (
          <Link to={`/projects/${nextProject.slug}`}>
            Next project →
            <strong>{nextProject.title}</strong>
          </Link>
        ) : (
          <Link to="/">
            Back to portfolio →
            <strong>Homepage</strong>
          </Link>
        )}

      </nav>

      <footer>
        <p>© 2026 Alexander Wagner</p>
        <p>BUILT WITH REACT & TYPESCRIPT</p>
      </footer>

    </main>
  )
}

export default ProjectPage
