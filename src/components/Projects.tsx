"use client"
import codefast from "/src/assets/codefast.jpg"
import andazepakwan from "/src/assets/AndazePakwan.jpg"
import fms from "/src/assets/fms.jpg"
import pacman from "/src/assets/pacman.jpg"
import gym from "/src/assets/gym.jpg"
import spaceShooter from "/src/assets/SpaceShooter.jpg"
import tetris from "/src/assets/tetris.jpeg"
import codefastweb from "/src/assets/codefastweb.jpg"
import { useState } from "react"
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  image: any
  category: string
  technologies: string
  description: string
  githubLink?: string
  liveLink?: string
  videoUrl?: string
}

const projectsData: Project[] = [
  {
    id: 0,
    title: "CodeFAST – E-Learning Website",
    image: codefastweb,
    category: "Web Development",
    technologies: "React | Node.js | Express | MongoDB | TailwindCSS | JWT | Axios",
    description:
      "A full-stack e-learning platform built for students of FAST University. Features include coding challenges, quizzes, public profiles, leaderboards, job portal, and admin analytics dashboard.",
    githubLink: "https://github.com/Zakariya0801/codefast-web",
    liveLink: "https://codefast-web-sigma.vercel.app/login",
    videoUrl: "https://www.linkedin.com/posts/arban-arfan-633790313_codefast-webdevelopment-softwareengineering-activity-7319127006514712576-KOH-/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE-r4IcBXigWkYc2WWPd3KteDOC65Pf25x0", // Replace with real video link
  },
  {
    id: 2,
    title: "UI/UX Design Portfolio",
    image: andazepakwan,
    category: "UI/UX Design",
    technologies: "UI/UX | Figma | HTML | CSS | JavaScript",
    description:
      "A collection of UI/UX designs for various applications, showcasing my skills in creating intuitive and visually appealing user interfaces.",
    githubLink: "https://github.com/ArbanArfan/Andaazepakwaan.git",
    liveLink: "andazepakwaan.netlify.app",
  },
  {
    id: 1,
    title: "Tetris Game",
    image: tetris,
    category: "Game Development",
    technologies: "C++ | SFML Graphics",
    description:
      "A classic Tetris game implementation with modern graphics and smooth controls. Features include score tracking, level progression, and special effects.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 7,
    title: "CodeFats - Desktop Apllication",
    image: codefast,
    category: "Educational Software",
    technologies: "Java | JavaFX | MYSQL | GRASP | GO4 | SceneBuilder",
    description:
      "A comprehensive e-learning platform with course management, student tracking, interactive lessons, and assessment tools.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 3,
    title: "File Management System",
    image: fms,
    category: "System Development",
    technologies: "C++ | Data Structures | Trees | Stacks | Priority Queue | AVL Trees | Red & Black Tree",
    description:
      "A comprehensive file management system that implements various advanced data structures for efficient file organization, searching, and retrieval.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 4,
    title: "Gym Management System",
    image: gym,
    category: "Desktop Application",
    technologies: "C# | .Net | SQL | Database",
    description:
      "A complete gym management solution for tracking memberships, scheduling classes, managing trainers, and handling payments.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 5,
    title: "Pacman Game",
    image: pacman,
    category: "Game Development",
    technologies: "C++ | Multi-Threading | Synchronization | SFML",
    description:
      "A recreation of the classic Pacman game with multi-threading for ghost AI and game mechanics, providing smooth gameplay and challenging levels.",
    githubLink: "https://github.com/ArbanArfan",
  },
  {
    id: 6,
    title: "SpaceShooter Game",
    image: spaceShooter,
    category: "Game Development",
    technologies: "C++ | SFML Graphics | OOP",
    description:
      "An action-packed space shooter game with multiple enemy types, power-ups, and level progression. Built using object-oriented programming principles.",
    githubLink: "https://github.com/ArbanArfan",
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
          <h2 className="section-title text-center">Projects</h2>
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
                <Card className="project-card h-100">
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

        {/* Modal */}
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
                  <div className="project-links mt-3">
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
                        className="btn btn-primary me-2"
                      >
                        <ExternalLink size={18} className="me-1" /> Live Demo
                      </a>
                    )}
                    {selectedProject.videoUrl && (
                      <a
                        href={selectedProject.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-danger"
                      >
                        <ExternalLink size={18} className="me-1" /> Watch Video
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
