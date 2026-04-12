import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PERSONAL_INFO, NAV_LINKS } from '../../utils/constants'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <div>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-stone-800/60 bg-[#0A0A0A]/95 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#top" className="font-mono text-sm tracking-wide group flex items-center">
            <span className="text-stone-500 group-hover:text-amber-500 transition-colors duration-300">{"{"}</span>
            <span className="text-amber-500 font-medium px-1.5 group-hover:text-stone-100 transition-colors duration-300">
              "{PERSONAL_INFO.name.split(' ')[0].toLowerCase()}"
            </span>
            <span className="text-stone-500 group-hover:text-amber-500 transition-colors duration-300">{"}"}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-stone-400 text-sm font-medium hover:text-stone-100 transition-colors duration-300 group py-2"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300 ease-out rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-lg border border-stone-800 bg-stone-900/60 hover:border-amber-500/30 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-4 h-[1.5px] bg-stone-400"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-4 h-[1.5px] bg-stone-400"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-4 h-[1.5px] bg-stone-400"
            />
          </button>

        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-[#0A0A0A] border-l border-stone-800 md:hidden flex flex-col"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-stone-800">
                <span className="font-mono text-xs text-amber-500">menu</span>
                <button
                  onClick={closeMenu}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-800 text-stone-500 hover:text-red-400 hover:border-red-400/30 transition-all duration-200"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col px-4 py-6 gap-2 flex-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-amber-400 hover:bg-amber-500/5 border border-transparent hover:border-amber-500/20 rounded-xl transition-all duration-300 text-sm font-medium"
                    >
                      <span className="text-amber-500/40 font-mono text-xs">
                        0{index + 1}
                      </span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Panel footer */}
              <div className="px-6 py-6 border-t border-stone-800">
                <p className="text-xs text-stone-600 font-mono">
                  © {new Date().getFullYear()} {PERSONAL_INFO.name.split(' ')[0]}
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar