"use client"

import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "aos/dist/aos.css"
import AOS from "aos"
import "./App.css"

// Components
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Resume from "./components/Resume"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
