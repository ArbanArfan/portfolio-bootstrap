"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap"
import { motion } from "framer-motion"
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  image: string
  category: string
  technologies: string
  description: string
  githubLink?: string
  liveLink?: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Tetris Game",
    image: "/Images/tetris.jpeg",
    category: "Game Development",
    technologies: "C++ | SFML Graphics",
    description:
      "A classic Tetris game implementation with modern graphics and smooth controls. Features include score tracking, level progression, and special effects.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 2,
    title: "SpaceShooter Game",
    image: "/Images/SpaceShooter.jpg",
    category: "Game Development",
    technologies: "C++ | SFML Graphics | OOP",
    description:
      "An action-packed space shooter game with multiple enemy types, power-ups, and level progression. Built using object-oriented programming principles.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 3,
    title: "File Management System",
    image: "/Images/fms.jpg",
    category: "System Development",
    technologies: "C++ | Data Structures | Trees | Stacks | Priority Queue | AVL Trees | Red & Black Tree",
    description:
      "A comprehensive file management system that implements various advanced data structures for efficient file organization, searching, and retrieval.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 4,
    title: "Gym Management System",
    image: "/Images/gym.jpg",
    category: "Desktop Application",
    technologies: "C# | .Net | SQL | Database",
    description:
      "A complete gym management solution for tracking memberships, scheduling classes, managing trainers, and handling payments.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 5,
    title: "Pacman Game",
    image: "/Images/pacman.jpg",
    category: "Game Development",
    technologies: "C++ | Multi-Threading | Synchronization | SFML",
    description:
      "A recreation of the classic Pacman game with multi-threading for ghost AI and game mechanics, providing smooth gameplay and challenging levels.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 6,
    title: "E-Learning Platform",
    image: "/Images/codefast.jpg",
    category: "Educational Software",
    technologies: "Java | JavaFX | MYSQL | GRASP | GO4 | SceneBuilder",
    description:
      "A comprehensive e-learning platform with course management, student tracking, interactive lessons, and assessment tools.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 7,
    title: "UI/UX Design Portfolio",
    image: "/Images/AndazePakwan.jpg",
    category: "UI/UX Design",
    technologies: "UI/UX | Figma | HTML | CSS | JavaScript",
    description:
      "A collection of UI/UX designs for various applications, showcasing my skills in creating intuitive and visually appealing user interfaces.",
    githubLink: "https://github.com/ArbanArfan/Andaazepakwaan.git",
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleShowDetails = (project: Project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <section id="projects" className="projects-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center" data-aos="fade-up">
            Projects
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <Row className="mt-5">
          {projectsData.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="project-card h-100" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="project-image-container">
                    <Card.Img variant="top" src={project.image} className="project-image" />
                    <div className="project-overlay">
                      <Button variant="primary" className="project-details-btn" onClick={() => handleShowDetails(project)}>
                        View Details
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="project-title">{project.title}</Card.Title>
                    <Card.Text className="project-tech">{project.technologies}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Project Details Modal */}
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg" className="project-modal">
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject && (
              <Row>
                <Col md={6}>
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="img-fluid rounded mb-3"
                  />
                </Col>
                <Col md={6}>
                  <h5>Description</h5>
                  <p>{selectedProject.description}</p>
                  <h5>Technologies</h5>
                  <p>{selectedProject.technologies}</p>
                  <h5>Category</h5>
                  <p>{selectedProject.category}</p>
                  <div className="project-links">
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark me-2"
                      >
                        <Github size={18} className="me-1" /> GitHub
                      </a>
                    )}
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <ExternalLink size={18} className="me-1" /> Live Demo
                      </a>
                    )}
                  </div>
                </Col>
              </Row>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  )
}

export default Projects
