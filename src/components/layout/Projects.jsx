import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiGitBranch, FiExternalLink, FiGlobe } from 'react-icons/fi'
import { LANG_MAP } from '../../utils/constants'
import { fadeUp } from '../../utils/animations'
import useGithubRepos from '../../hooks/useGithubRepos'

const TOPIC_IGNORE = ['portfolio', 'showcase-portfolio']

function LanguageBadge({ language }) {
  if (!language) return null
  const tech = LANG_MAP[language]
  const Icon = tech?.icon

  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border"
      style={{
        color: tech?.color || '#a8a29e',
        background: tech?.bg || 'rgba(168,162,158,0.1)',
        borderColor: tech?.border || 'rgba(168,162,158,0.2)',
      }}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {language}
    </span>
  )
}

function ProjectCard({ repo, delay }) {
  const visibleTopics = repo.topics
    ?.filter(t => !TOPIC_IGNORE.includes(t))
    .slice(0, 4)

  const hasLiveDemo = !!repo.homepage

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={delay}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-stone-900 border border-stone-800 hover:border-amber-500/40 rounded-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Glow hover */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card body */}
      <div className="relative z-10 flex flex-col flex-1 p-6">

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-3">
            <h3 className="text-base font-semibold text-stone-100 group-hover:text-amber-400 transition-colors duration-300 leading-snug capitalize mb-2">
              {repo.name.replace(/-/g, ' ')}
            </h3>
            <LanguageBadge language={repo.language} />
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 bg-stone-800 group-hover:bg-amber-500/10 border border-stone-700 group-hover:border-amber-500/30 rounded-lg transition-all duration-300"
            onClick={e => e.stopPropagation()}
          >
            <FiExternalLink className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 transition-colors duration-300" />
          </a>
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-stone-400 leading-relaxed flex-1 mb-5 line-clamp-3">
          {repo.description || 'Proyek ini sedang dalam pengembangan aktif.'}
        </p>

        {/* Topics */}
        {visibleTopics?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {visibleTopics.map(topic => (
              <span
                key={topic}
                className="text-xs text-stone-500 bg-stone-800/80 border border-stone-700/50 px-2.5 py-1 rounded-full"
              >
                #{topic}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-stone-500">
              <FiStar className="w-3.5 h-3.5 text-amber-500/70" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-stone-500">
              <FiGitBranch className="w-3.5 h-3.5 text-stone-600" />
              {repo.forks_count}
            </span>
          </div>

          {/* Tombol Live Demo kalau ada homepage */}
          {hasLiveDemo ? (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-lg transition-all duration-300"
            >
              <FiGlobe className="w-3 h-3" />
              Live Demo
            </a>
          ) : (
            <span className="text-xs font-medium text-stone-600 group-hover:text-amber-500 transition-colors duration-300 flex items-center gap-1">
              Lihat Repo
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const { repos, loading, error } = useGithubRepos()
  const [showAll, setShowAll] = useState(false)

  const sorted = repos
    ? [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)
    : []

  const displayed = showAll ? sorted : sorted.slice(0, 4)

  return (
    <section id="projects" className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-4"
        >
          <span className="inline-block text-xs font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 tracking-widest uppercase">
            Featured Projects
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="text-3xl md:text-4xl font-semibold text-stone-100 mb-4"
        >
          Karya Terbaik
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.25}
          className="text-stone-500 text-sm mb-12 max-w-md"
        >
          Project yang aku bangun dan publish di GitHub — klik card untuk lihat source code.
        </motion.p>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <p className="text-red-400 text-center py-10 bg-red-400/10 rounded-xl border border-red-400/20 text-sm">
            Ups, ada masalah: {error}
          </p>
        )}

        {!loading && !error && sorted.length === 0 && (
          <p className="text-stone-500 text-center py-10 border border-dashed border-stone-800 rounded-xl text-sm">
            Belum ada repo dengan topik "portfolio" di GitHub kamu.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence>
            {displayed.map((repo, index) => (
              <ProjectCard
                key={repo.id}
                repo={repo}
                delay={index * 0.1}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Tombol lihat semua / sembunyikan */}
        {sorted.length > 4 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-stone-700 hover:border-amber-500/50 text-stone-400 hover:text-amber-400 text-sm font-medium rounded-xl transition-all duration-300"
            >
              {showAll ? 'Sembunyikan ↑' : `Lihat Semua (${sorted.length}) →`}
            </button>
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default Projects