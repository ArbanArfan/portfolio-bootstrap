"use client"

import type React from "react"
import { useState } from "react"
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap"
import { Code, Cog, Users, Monitor, X } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  summary: string
  description: React.ReactNode
  technologies: string[]
  delay: number
  onViewDetails: () => void
}

// Technology icons mapping
const techIcons: Record<string, string> = {
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  JavaFX: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, summary, onViewDetails, delay }) => {
  return (
    <Col lg={3} md={6} className="mb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        viewport={{ once: true }}
        className="service-card-container"
      >
        <Card className="service-card" data-aos="zoom-in" data-aos-delay={delay * 100}>
          <Card.Body className="text-center d-flex flex-column">
            <div className="service-icon">{icon}</div>
            <Card.Title className="service-title">{title}</Card.Title>
            <Card.Text className="service-summary">{summary}</Card.Text>
            <div className="mt-auto">
              <Button variant="primary" className="service-details-btn mt-3" onClick={onViewDetails}>
                View Details
              </Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  )
}

const Services = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState<{
    title: string
    icon: React.ReactNode
    description: React.ReactNode
    technologies: string[]
  } | null>(null)

  const services = [
    {
      icon: <Code size={48} />,
      title: "Web Development",
      summary: "Building responsive and dynamic web applications with modern technologies.",
      description: (
        <>
          <p>Frontend Technologies: React.js, ReactNative, Angular, Next.js, HTML, CSS, Bootstrap, Tailwind CSS</p>
          <p>Backend Technologies: Node.js, Express.js, Javascript, MongoDB, SQL, MYSQL</p>
          <p>Version Control: Github</p>
          <p>Deployment: Heroku, Netlify, Vercel, Render, Docker</p>
        </>
      ),
      technologies: [
        "React.js",
        "Angular",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "GitHub",
        "Docker",
      ],
    },
    {
      icon: <Cog size={48} />,
      title: "Software Engineering",
      summary: "Developing robust software solutions using agile methodologies and best practices.",
      description: (
        <>
          <p>
            Led and contributed to real-world software engineering projects using Agile methodologies, project
            management tools, and modern documentation standards (SRS, SDD, Test Reports).
          </p>
          <p>
            Applied software design principles across multiple domains including Web, Desktop, and E-learning platforms.
          </p>
          <p>Technologies: Java, C++, Python, JavaScript, MERN Stack, SQL, GitHub.</p>
        </>
      ),
      technologies: ["Java", "C++", "Python", "JavaScript", "React.js", "Node.js", "MongoDB", "SQL", "GitHub"],
    },
    {
      icon: <Users size={48} />,
      title: "UI/UX Designing",
      summary: "Creating intuitive and visually appealing user interfaces and experiences.",
      description: (
        <>
          <p>
            Skilled in using <strong>Figma</strong> for wireframing, prototyping, and collaborative design processes.
          </p>
          <p>
            My UI/UX work has been applied in real-world platforms including an e-learning system, food ordering app,
            and project dashboards.
          </p>
        </>
      ),
      technologies: ["Figma", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: <Monitor size={48} />,
      title: "Desktop Development",
      summary: "Building powerful desktop applications with modern frameworks and languages.",
      description: (
        <>
          <p>
            I have developed robust and user-friendly desktop applications using languages and frameworks such as{" "}
            <strong>Java, C++, Python, and JavaFX</strong>.
          </p>
          <p>
            One of my most notable projects is an <strong>e-learning desktop application</strong> built as part of the{" "}
            <strong>Software Design & Analysis (SDA)</strong> course, which was recognized with the{" "}
            <strong>Best Achiever Award</strong> for its exceptional design, functionality, and impact.
          </p>
        </>
      ),
      technologies: ["Java", "C++", "Python", "JavaFX", "C#"],
    },
  ]

  const handleShowDetails = (service: (typeof services)[0]) => {
    setSelectedService(service)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <section id="services" className="services-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center" data-aos="fade-up">
            Services
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <Row className="mt-5">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              summary={service.summary}
              description={service.description}
              technologies={service.technologies}
              delay={index + 1}
              onViewDetails={() => handleShowDetails(service)}
            />
          ))}
        </Row>

        {/* Service Details Modal */}
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg" className="service-modal">
          <Modal.Header>
            <Modal.Title>
              {selectedService?.icon && <span className="modal-icon">{selectedService.icon}</span>}
              {selectedService?.title}
            </Modal.Title>
            <Button variant="link" className="close-button" onClick={handleCloseModal}>
              <X size={24} />
            </Button>
          </Modal.Header>
          <Modal.Body>
            {selectedService && (
              <>
                <div className="service-description mb-4">{selectedService.description}</div>

                <h5 className="tech-title">Technologies</h5>
                <div className="tech-icons">
                  {selectedService.technologies.map((tech, index) => (
                    <div key={index} className="tech-icon-wrapper" data-aos="zoom-in" data-aos-delay={index * 50}>
                      <img
                        src={
                          techIcons[tech] ||
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={tech}
                        className="tech-icon"
                      />
                      <span className="tech-name">{tech}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  )
}

export default Services
