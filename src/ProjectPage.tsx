import './ProjectPage.css'
import { Link, useParams } from "react-router-dom"
import { projects } from "./projects"
import Navbar from "./Navbar"

function ProjectPage() {
  const { slug } = useParams()

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

        <Navbar />

      <section className="project-detail-hero">

        <p className="eyebrow">
          PROJECT / {project.number} · {project.category}
        </p>

        <h1>{project.title}</h1>

        <div className="detail-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <img
          className="project-detail-image"
          src={project.image}
          alt={`${project.title} project preview`}
        />

        <p className="project-overview">
          {project.overview}
        </p>

      </section>

      <section className="project-detail-content">

        <div className="detail-section">
          <p className="eyebrow">01 / CONTRIBUTIONS</p>
          <h2>What I worked on.</h2>

          <ul>
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <p className="eyebrow">02 / DEVELOPMENT</p>
          <h2>Technical challenges.</h2>

          <ul>
            {project.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <p className="eyebrow">03 / TECHNOLOGIES</p>
          <h2>Tools & technologies.</h2>

          <div className="detail-tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

      </section>

      <nav className="project-pagination">

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
