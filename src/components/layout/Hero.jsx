import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/animations'
import { PERSONAL_INFO } from '../../utils/constants'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import useTypingEffect from '../../hooks/useTypingEffect'

function Hero() {
  const displayText = useTypingEffect(PERSONAL_INFO.name, 80)

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0A0A0A]">

      {/* Particles background */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: ['#f59e0b', '#78716c', '#d97706'] },
            opacity: {
              value: 0.25,
              random: true,
              animation: { enable: true, speed: 0.8, minimumValue: 0.05, sync: false }
            },
            size: {
              value: { min: 1, max: 2.5 },
              random: true,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
            links: {
              enable: true,
              distance: 130,
              color: '#78716c',
              opacity: 0.08,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Glow tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/8 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Konten */}
      <div className="relative z-10 text-center max-w-4xl">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="text-4xl md:text-6xl font-semibold text-stone-100 mb-3 tracking-tight"
        >
          Halo, aku{' '}
          <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            {displayText}
            <span className="animate-pulse text-amber-400">|</span>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-stone-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium text-sm rounded-xl shadow-lg shadow-amber-900/20"
          >
            Lihat Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-stone-900/50 border border-stone-800 hover:border-amber-500/50 text-stone-300 hover:text-amber-400 font-medium text-sm rounded-xl transition-colors"
          >
            Hubungi Aku
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-stone-600 tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-amber-500/50 to-transparent"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero