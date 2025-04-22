"use client"

import type React from "react"

import { useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [showAlert, setShowAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowAlert(true)
      setFormData({ name: "", email: "", message: "" })

      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center" data-aos="fade-up">
            Contact Me
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <Row className="mt-5">
          <Col lg={5} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="contact-info"
              data-aos="fade-right"
            >
              <h3 className="contact-subtitle">Get In Touch</h3>
              <p className="contact-text">
                Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'm always open to
                discussing new projects and opportunities.
              </p>

              <div className="contact-details">
                <div className="contact-item" data-aos="fade-up">
                  <MapPin size={24} className="contact-icon" />
                  <div>
                    <h5>Location</h5>
                    <p>NUCES H11, Islamabad, Pakistan</p>
                  </div>
                </div>

                <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
                  <Phone size={24} className="contact-icon" />
                  <div>
                    <h5>Phone</h5>
                    <p>+92 320-4310857</p>
                  </div>
                </div>

                <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
                  <Mail size={24} className="contact-icon" />
                  <div>
                    <h5>Email</h5>
                    <p>arban.arfan1@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="contact-form-container"
              data-aos="fade-left"
            >
              {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                  Your message has been sent successfully! I'll get back to you soon.
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="form-input"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="send-message-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={18} className="me-2" /> Send Message
                    </>
                  )}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
