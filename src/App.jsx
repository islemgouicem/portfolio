import { Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { LanguageProvider } from "./contexts/LanguageContext"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Certifications from "./pages/Certifications"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
  
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
