import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/parcours" element={<Experience />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
