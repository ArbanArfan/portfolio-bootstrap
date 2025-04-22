import { Container, Row, Col } from "react-bootstrap"
import { Facebook, Instagram, Linkedin, Github } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="text-center">
            <p className="mb-0">&copy; {currentYear} Arban Arfan. All rights reserved.</p>
          </Col>
          <Col md={12} className="text-center mt-3">
            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=100012294669090"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/arban_.arfan?igsh=MjFkdXAwNnp5aWZm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/arban-arfan-633790313/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/ArbanArfan/Andaazepakwaan.git" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
