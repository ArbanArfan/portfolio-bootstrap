"use client"
import mypic from "/src/assets/mypic.jpg"
import { Container, Row, Col, Badge, Card } from "react-bootstrap"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar, Award, BookOpen, Briefcase, Code } from "lucide-react"
import { useState } from "react"

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="resume-section">
      <Container>
        <Row className="resume-container">
          {/* Left Sidebar */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="resume-sidebar"
            >
              <div className="personal-info-card">
                <div className="profile-image-wrapper">
                  <img src={mypic} alt="Arban Arfan" className="profile-image" />
                  <div className="image-border"></div>
                </div>

                <h2 className="resume-name">Arban Arfan</h2>
                <p className="resume-role">Computer Science Student</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <Mail size={18} className="contact-icon" />
                    <a href="mailto:arban.arfan1@gmail.com" className="contact-link">
                      arban.arfan1@gmail.com
                    </a>
                  </div>

                  <div className="contact-item">
                    <Phone size={18} className="contact-icon" />
                    <a href="tel:+923204310857" className="contact-link">
                      +92 320-4310857
                    </a>
                  </div>

                  <div className="contact-item">
                    <MapPin size={18} className="contact-icon" />
                    <span>House no. 132, Block A1, Wapda Town, Phase 1, Lahore, Pakistan</span>
                  </div>
                </div>

                <div className="resume-social-links">
                  <a
                    href="https://www.facebook.com/profile.php?id=100012294669090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/arban_.arfan?igsh=MjFkdXAwNnp5aWZm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arban-arfan-633790313/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://github.com/ArbanArfan/Andaazepakwaan.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>

              <div className="resume-nav-container">
                <div
                  className={`resume-nav-item ${activeTab === "education" ? "active" : ""}`}
                  onClick={() => handleTabChange("education")}
                >
                  <BookOpen size={20} className="nav-icon" />
                  <span>Education</span>
                </div>
                <div
                  className={`resume-nav-item ${activeTab === "experience" ? "active" : ""}`}
                  onClick={() => handleTabChange("experience")}
                >
                  <Briefcase size={20} className="nav-icon" />
                  <span>Experience</span>
                </div>
                <div
                  className={`resume-nav-item ${activeTab === "skills" ? "active" : ""}`}
                  onClick={() => handleTabChange("skills")}
                >
                  <Code size={20} className="nav-icon" />
                  <span>Skills</span>
                </div>
                <div
                  className={`resume-nav-item ${activeTab === "achievements" ? "active" : ""}`}
                  onClick={() => handleTabChange("achievements")}
                >
                  <Award size={20} className="nav-icon" />
                  <span>Achievements</span>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Main Content */}
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="resume-main"
            >
              {/* Introduction Section */}
              <Card className="resume-card mb-4">
                <Card.Body>
                  <h3 className="resume-section-title">Introduction</h3>
                  <div className="resume-divider"></div>
                  <p className="resume-text">
                    As a dedicated and adaptable Computer Science major at FAST University, I possess a robust work
                    ethic and excel in independent tasks. My ability to manage deadlines and collaborate effectively
                    within teams positions me as an ideal candidate for an internship in an agile environment.
                    Consistently commended by peers for my quality-focused approach, I am committed to contributing to
                    your company's success.
                  </p>
                </Card.Body>
              </Card>

              {/* Education Section */}
              {activeTab === "education" && (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="tab-content">
                  <Card className="resume-card">
                    <Card.Body>
                      <h3 className="resume-section-title">Education</h3>
                      <div className="resume-divider"></div>

                      <motion.div variants={fadeInUp} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h4 className="timeline-title">Bachelor of Science in Computer Science</h4>
                            <span className="timeline-date">
                              <Calendar size={14} className="me-1" />
                              Aug 2022 - Present
                            </span>
                          </div>
                          <h5 className="timeline-subtitle">
                            National University of Computer & Emerging Sciences (FAST NUCES, Islamabad)
                          </h5>
                          <div className="timeline-gpa">CGPA: 3.1</div>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h4 className="timeline-title">A Levels</h4>
                            <span className="timeline-date">
                              <Calendar size={14} className="me-1" />
                              August 2020 - June 2022
                            </span>
                          </div>
                          <h5 className="timeline-subtitle">Lahore Grammar School (LGS-JT)</h5>
                          <div className="timeline-grade">Straight Bs (Merit Based Scholarship 100%)</div>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h4 className="timeline-title">O Levels</h4>
                            <span className="timeline-date">
                              <Calendar size={14} className="me-1" />
                              August 2017 - June 2020
                            </span>
                          </div>
                          <h5 className="timeline-subtitle">Lahore Grammar School (LGS-JT)</h5>
                          <div className="timeline-grade">Straight As (High Achiever Award)</div>
                        </div>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}

              {/* Experience Section */}
              {activeTab === "experience" && (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="tab-content">
                  <Card className="resume-card">
                    <Card.Body>
                      <h3 className="resume-section-title">Experience</h3>
                      <div className="resume-divider"></div>

                      <motion.div variants={fadeInUp} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h4 className="timeline-title">FCS Marketing (Fast Computing Society)</h4>
                            <span className="timeline-date">
                              <Calendar size={14} className="me-1" />
                              Aug 2023 - June 2024
                            </span>
                          </div>
                          <h5 className="timeline-subtitle">NUCES University</h5>
                          <p className="timeline-description">
                            Titled as Best Performer (21st August – 10th June 2024)
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h4 className="timeline-title">Chess Society President</h4>
                            <span className="timeline-date">
                              <Calendar size={14} className="me-1" />
                              2021 - 2022
                            </span>
                          </div>
                          <h5 className="timeline-subtitle">LGS JT</h5>
                          <p className="timeline-description">School Council (2021-2022)</p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h4 className="timeline-title">Company Representation</h4>
                            <span className="timeline-date">
                              <Calendar size={14} className="me-1" />
                              Jan 2023
                            </span>
                          </div>
                          <h5 className="timeline-subtitle">Monnoo Group of Industries</h5>
                          <p className="timeline-description">
                            Represented the company on National Forum (20th January 2023)
                          </p>
                        </div>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}

              {/* Skills Section */}
              {activeTab === "skills" && (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="tab-content">
                  <Card className="resume-card">
                    <Card.Body>
                      <h3 className="resume-section-title">Skills</h3>
                      <div className="resume-divider"></div>

                      <div className="skills-container">
                        <motion.div variants={fadeInUp} className="skill-category mb-4">
                          <h4 className="skill-category-title">Programming Languages</h4>
                          <div className="skill-badges">
                            {["Java", "C++", "C", "C#", "Python", "JavaScript", "TypeScript"].map((skill, index) => (
                              <Badge key={index} className="skill-badge">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="skill-category mb-4">
                          <h4 className="skill-category-title">Web Development</h4>
                          <div className="skill-badges">
                            {[
                              "HTML",
                              "CSS",
                              "React.js",
                              "Node.js",
                              "Angular",
                              "Next.js",
                              "Express.js",
                              "Bootstrap",
                            ].map((skill, index) => (
                              <Badge key={index} className="skill-badge">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="skill-category mb-4">
                          <h4 className="skill-category-title">Database</h4>
                          <div className="skill-badges">
                            {["MySQL", "Oracle", "SQL", "MongoDB", "Database Management"].map((skill, index) => (
                              <Badge key={index} className="skill-badge">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="skill-category mb-4">
                          <h4 className="skill-category-title">Design & Tools</h4>
                          <div className="skill-badges">
                            {[
                              "UI/UX",
                              "Figma",
                              "Docker",
                              "MS Office",
                              "MATLAB",
                              "Visual Basic",
                              "Assembly Language",
                            ].map((skill, index) => (
                              <Badge key={index} className="skill-badge">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="skill-category">
                          <h4 className="skill-category-title">Soft Skills</h4>
                          <div className="skill-badges">
                            {["Communication", "Critical Thinking", "Management", "Marketing", "Writing"].map(
                              (skill, index) => (
                                <Badge key={index} className="skill-badge">
                                  {skill}
                                </Badge>
                              ),
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}

              {/* Achievements Section */}
              {activeTab === "achievements" && (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="tab-content">
                  <Card className="resume-card">
                    <Card.Body>
                      <h3 className="resume-section-title">Achievements</h3>
                      <div className="resume-divider"></div>

                      <motion.div variants={fadeInUp} className="achievement-item">
                        <div className="achievement-icon">
                          <Award size={24} />
                        </div>
                        <div className="achievement-content">
                          <h4 className="achievement-title">Asian Youth Chess Competition</h4>
                          <p className="achievement-description">
                            Second Position (Selected for International Representation) - 2020
                          </p>
                          <p className="achievement-organization">Chess Federation of Pakistan, Lahore (CFP)</p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="achievement-item">
                        <div className="achievement-icon">
                          <Award size={24} />
                        </div>
                        <div className="achievement-content">
                          <h4 className="achievement-title">National Chess Championship (U-16)</h4>
                          <p className="achievement-description">First Position - 2019</p>
                          <p className="achievement-organization">Chess Federation of Pakistan, Lahore (CFP)</p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="achievement-item">
                        <div className="achievement-icon">
                          <Award size={24} />
                        </div>
                        <div className="achievement-content">
                          <h4 className="achievement-title">Merit Based Scholarship</h4>
                          <p className="achievement-description">100% Scholarship (2020-2022)</p>
                          <p className="achievement-organization">A levels (LGS JT)</p>
                        </div>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Resume
