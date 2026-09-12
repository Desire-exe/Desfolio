import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

import { Aurora } from './components/Aurora'
import { EmberParticles } from './components/EmberParticles'
import { Preloader } from './components/Preloader'
import { PageTransition } from './components/PageTransition'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

import { Home } from './routes/Home'
import { ProjectsPage } from './routes/ProjectsPage'
import { ProjectDetail } from './routes/ProjectDetail'
import { AboutPage } from './routes/AboutPage'
import { ContactPage } from './routes/ContactPage'
import { NotFound } from './routes/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-bg text-text overflow-x-hidden">
      <Preloader />
      <Aurora />
      <EmberParticles />
      <Nav />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"                element={<PageTransition><Home /></PageTransition>} />
          <Route path="/projects"        element={<PageTransition><ProjectsPage /></PageTransition>} />
          <Route path="/projects/:id"    element={<PageTransition><ProjectDetail /></PageTransition>} />
          <Route path="/about"           element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/contact"         element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="*"                element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}