"use client"

import { Container, Row, Col, Button } from "react-bootstrap"
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react'
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const Home = () => {
  const imageRef = useRef<HTMLDivElement>(null)

  // Add animation effect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when in view
            if (imageRef.current) {
              imageRef.current.classList.add("animate-pulse")
              setTimeout(() => {
                if (imageRef.current) {
                  imageRef.current.classList.remove("animate-pulse")
                }
              }, 1500)
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  return (
    <section id="home" className="home-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="home-content"
              data-aos="fade-right"
            >
              <p className="greeting">Hi, I am</p>
              <h1 className="name">Arban Arfan</h1>
              <h2 className="profession">
                <TypeAnimation
                  sequence={["UI/UX Designer", 1000, "Full Stack Developer", 1000, "Software Engineer", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </h2>

              <div className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100012294669090"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/arban_.arfan?igsh=MjFkdXAwNnp5aWZm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/arban-arfan-633790313/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/ArbanArfan/Andaazepakwaan.git" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
              </div>

              <Button variant="primary" className="download-btn mt-4" href="/resume">
                View Resume
              </Button>

              <div className="stats-container" data-aos="fade-up" data-aos-delay="300">
                <div className="stat-item">
                  <h3>2+</h3>
                  <p>Years of experience</p>
                </div>
                <div className="stat-item">
                  <h3>20+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="profile-image-container"
              data-aos="fade-left"
            >
              <div className="profile-image-wrapper">
                <div className="profile-border">
                  <img src="/src/assets/mypic.jpg" alt="Arban Arfan" className="profile-image" />
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
