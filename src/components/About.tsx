"use client"

import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center" data-aos="fade-up">
            About Me
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <Row className="mt-5 align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="about-image-container"
              data-aos="fade-right"
            >
              <div className="about-image-frame">
                <div className="frame-border frame-border-1"></div>
                <div className="frame-border frame-border-2"></div>
                <div className="frame-border frame-border-3"></div>
                <div className="image-container">
                  <img src="/src/assets/mypic.jpg" alt="Arban Arfan" className="about-image" />
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
              className="about-content"
              data-aos="fade-left"
            >
              <h3 className="about-subtitle">Who I Am</h3>
              <p className="about-text">
                As a dedicated and adaptable Computer Science major at FAST University, I possess a robust work ethic
                and excel in independent tasks. My ability to manage deadlines and collaborate effectively within teams
                positions me as an ideal candidate for an internship in an agile environment.
              </p>
              <p className="about-text">
                Consistently commended by peers for my quality-focused approach, I am committed to contributing to your
                company's success. My passion for technology and problem-solving drives me to continuously learn and
                improve my skills.
              </p>

              <div className="skills-container">
                <h4 className="skills-title">Soft Skills</h4>
                <div className="skill-tags">
                  {[
                    "Teamwork",
                    "Communication",
                    "Problem-Solving",
                    "Time Management",
                    "Adaptability",
                    "Critical Thinking",
                    "Attention to Detail",
                    "Leadership",
                    "Creativity",
                    "Continuous Learning",
                  ].map((skill, index) => (
                    <span key={index} className="skill-tag" data-aos="zoom-in" data-aos-delay={index * 50}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
