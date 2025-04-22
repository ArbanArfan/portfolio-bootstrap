"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Home, PenToolIcon as Tools, FileText, User, Code, MailOpenIcon as Envelope } from 'lucide-react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Determine active section based on scroll position
      const sections = ["home", "services", "about", "projects", "contact"]
      
      if (location.pathname === "/") {
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  // Set active section based on location
  useEffect(() => {
    if (location.pathname === "/resume") {
      setActiveSection("resume")
    } else if (location.pathname === "/") {
      // Check which section is in view
      const sections = ["home", "services", "about", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
  }, [location])

  const isActive = (section: string) => {
    if (section === "resume" && location.pathname === "/resume") return true
    if (location.pathname === "/" && section === activeSection) return true
    return false
  }

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Navigate to home page first
      window.location.href = `/#${sectionId}`
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <Navbar expand="lg" fixed="top" className={`navbar-dark ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as="button"
              className={`nav-button ${isActive("home") ? "active" : ""}`}
              onClick={() => scrollToSection("home")}
            >
              <Home size={18} className="me-1" /> <span>Home</span>
            </Nav.Link>
            <Nav.Link
              as="button"
              className={`nav-button ${isActive("services") ? "active" : ""}`}
              onClick={() => scrollToSection("services")}
            >
              <Tools size={18} className="me-1" /> <span>Services</span>
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/resume" 
              className={isActive("resume") ? "active" : ""}
            >
              <FileText size={18} className="me-1" /> <span>Resume</span>
            </Nav.Link>
            <Nav.Link
              as="button"
              className={`nav-button ${isActive("about") ? "active" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              <User size={18} className="me-1" /> <span>About me</span>
            </Nav.Link>
            <Nav.Link
              as="button"
              className={`nav-button ${isActive("projects") ? "active" : ""}`}
              onClick={() => scrollToSection("projects")}
            >
              <Code size={18} className="me-1" /> <span>Projects</span>
            </Nav.Link>
            <Nav.Link
              as="button"
              className={`nav-button ${isActive("contact") ? "active" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              <Envelope size={18} className="me-1" /> <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
