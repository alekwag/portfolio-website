import { useState, useEffect } from 'react'

function Navbar() {
  const [navVisible, setNavVisible] = useState(true)
  const [hoveringNav, setHoveringNav] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 30) {
        setNavVisible(true)
      } else if (currentScrollY < lastScrollY - 2) {
        setNavVisible(true)
      } else if (currentScrollY > lastScrollY + 2) {
        setNavVisible(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className="navbar-hover-zone"
        onMouseEnter={() => setHoveringNav(true)}
        onMouseLeave={() => setHoveringNav(false)}
      />
      <nav
        className={`navbar ${navVisible || hoveringNav ? 'navbar-visible' : 'navbar-hidden'}`}
        onMouseEnter={() => setHoveringNav(true)}
        onMouseLeave={() => setHoveringNav(false)}
      >

        <a href="#" className="logo">Alexander Wagner<span>.</span></a>

        <div className="nav-links">
            <a href="/#projects">Projects</a>
            <a href="/#about">About</a>
            <a href="/#experience">Experience</a>
            <a href="/#skills">Skills</a>
            <a href="/#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="nav-button">
            Let's connect ↗
          </a>

          <a
            href="/Alek_s_Resume.pdf"
            download="Alexander-Wagner-CV.pdf"
            className="cv-button"
          >
            Download CV ↗
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar