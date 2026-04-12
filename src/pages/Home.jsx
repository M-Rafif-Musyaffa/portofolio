import Navbar from '../components/layout/Navbar'
import Hero from '../components/layout/Hero'
import About from '../components/layout/About'
import Experience from '../components/layout/Experience'
import Projects from '../components/layout/Projects'
import Skills from '../components/layout/Skills'
import Contact from '../components/layout/Contact'

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default Home