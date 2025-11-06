import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-neutral-900 focus:text-white focus:px-3 focus:py-2">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
