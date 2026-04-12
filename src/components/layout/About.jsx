import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '../../utils/animations'
import { PERSONAL_INFO, EXPERIENCES } from '../../utils/constants'
import { FiDownload, FiCode, FiLayout, FiZap, FiChevronDown } from 'react-icons/fi'

const HIGHLIGHTS = [
  { icon: FiLayout, title: "UI Focused",    desc: "Membangun antarmuka yang clean, modern, dan intuitif." },
  { icon: FiCode,   title: "Clean Code",    desc: "Menulis kode yang terstruktur, readable, dan maintainable." },
  { icon: FiZap,    title: "Fast Learner",  desc: "Cepat beradaptasi dengan teknologi dan tools baru." },
]

function TimelineItem({ exp, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.4 + index * 0.15}
      className="relative pl-10"
    >
      {/* Icon */}
      <div className="absolute -left-1.5 top-0 w-10 h-10 flex items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-amber-500 z-10">
        <exp.icon className="w-4 h-4" />
      </div>

      <div className="group">
        <span className="text-xs font-bold tracking-wider text-stone-500 uppercase mb-1 block">
          {exp.period}
        </span>
        <h3 className="text-lg font-semibold text-stone-100 mb-2 group-hover:text-amber-400 transition-colors duration-300">
          {exp.role}
        </h3>

        {/* Deskripsi dengan accordion */}
        <div className="text-sm text-stone-500 leading-relaxed">
          <AnimatePresence initial={false} mode="wait">
            {expanded ? (
              <motion.p
                key="full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {exp.fullDesc}
              </motion.p>
            ) : (
              <motion.p
                key="short"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {exp.shortDesc}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 inline-flex items-center gap-1 text-xs text-amber-500/70 hover:text-amber-400 transition-colors duration-200"
          >
            {expanded ? 'Sembunyikan' : 'Selengkapnya'}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown className="w-3 h-3" />
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Kolom kiri */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-semibold text-amber-500 tracking-widest uppercase">
                Sekilas Tentangku
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              className="text-3xl md:text-5xl font-semibold text-stone-100 mb-6 leading-tight tracking-tight"
            >
              Menyusun piksel, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                membangun pengalaman.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.25}
              className="text-stone-400 text-base leading-relaxed mb-8 max-w-lg"
            >
              Frontend Developer dengan fokus pada desain yang{' '}
              <span className="text-stone-200 font-medium">clean dan interaktif</span>.
              Aku suka menerjemahkan sistem yang kompleks menjadi pengalaman web yang mulus dan mudah digunakan.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.35}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
            >
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-stone-900/60 border border-stone-800 rounded-xl hover:border-amber-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 mb-3">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-stone-200 mb-1">{item.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.45}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="https://drive.google.com/file/d/1BmNUO6xfGOQlUZKUwKWbtLnbaSWkfPeV/view?usp=drive_link"
                download
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-stone-100 hover:bg-white text-stone-900 font-semibold text-sm rounded-xl transition-all duration-300 group"
              >
                <FiDownload className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                Download CV
              </a>
              <div className="flex items-center gap-2 text-xs font-medium text-stone-500 bg-stone-900/50 px-4 py-3 rounded-xl border border-stone-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Tersedia untuk Full-time
              </div>
            </motion.div>
          </div>

          {/* Kolom kanan — timeline dengan accordion */}
          <div className="lg:col-span-5 relative lg:pl-6 lg:mt-16">
            <div className="absolute left-4 lg:left-10 top-2 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/50 via-stone-800 to-transparent" />
            <div className="space-y-10 relative">
              {EXPERIENCES.map((exp, index) => (
                <TimelineItem key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About