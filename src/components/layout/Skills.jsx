import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS, LANG_MAP, SKILL_LANG_MAP } from '../../utils/constants'
import { fadeUp } from '../../utils/animations'
import useGithubRepos from '../../hooks/useGithubRepos'
import { FiExternalLink, FiX, FiGitBranch, FiStar, FiGlobe } from 'react-icons/fi'

const TOPIC_IGNORE = ['portfolio', 'showcase-portfolio']

function RepoCard({ repo }) {
  const visibleTopics = repo.topics
    ?.filter(t => !TOPIC_IGNORE.includes(t))
    .slice(0, 3)

  const langInfo = LANG_MAP[repo.language]
  const Icon = langInfo?.icon

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ y: -3 }}
      className="group flex flex-col p-5 bg-stone-950 border border-stone-800 hover:border-amber-500/40 rounded-xl transition-all duration-300 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-start justify-between mb-3">
        <h4 className="text-sm font-semibold text-stone-200 group-hover:text-amber-400 transition-colors duration-300 capitalize line-clamp-1 flex-1 pr-2">
          {repo.name.replace(/-/g, ' ')}
        </h4>
        <FiExternalLink className="w-3.5 h-3.5 text-stone-600 group-hover:text-amber-400 transition-colors shrink-0 mt-0.5" />
      </div>

      {repo.language && (
        <span
          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border w-fit mb-3"
          style={{
            color: langInfo?.color || '#a8a29e',
            background: langInfo?.bg || 'rgba(168,162,158,0.1)',
            borderColor: langInfo?.border || 'rgba(168,162,158,0.2)',
          }}
        >
          {Icon && <Icon className="w-3 h-3" />}
          {repo.language}
        </span>
      )}

      <p className="text-xs text-stone-500 leading-relaxed flex-1 mb-4 line-clamp-2">
        {repo.description || 'Proyek ini sedang dalam pengembangan aktif.'}
      </p>

      {visibleTopics?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTopics.map(topic => (
            <span
              key={topic}
              className="text-xs text-stone-600 bg-stone-800/80 border border-stone-700/50 px-2 py-0.5 rounded-full"
            >
              #{topic}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-stone-800">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs text-stone-600">
            <FiStar className="w-3 h-3 text-amber-500/60" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1 text-xs text-stone-600">
            <FiGitBranch className="w-3 h-3 text-stone-700" />
            {repo.forks_count}
          </span>
        </div>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-xs font-medium text-amber-400/70 hover:text-amber-400 transition-colors"
          >
            <FiGlobe className="w-3 h-3" />
            Demo
          </a>
        )}
      </div>
    </motion.a>
  )
}

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const { repos, loading } = useGithubRepos()

  const getFilteredRepos = (skillName) => {
    if (!repos) return []
    const terms = SKILL_LANG_MAP[skillName] || [skillName.toLowerCase()]
    return repos.filter(repo => {
      const inLang = repo.language && terms.some(t => repo.language.toLowerCase() === t)
      const inDesc = repo.description && terms.some(t => repo.description.toLowerCase().includes(t))
      const inTopics = repo.topics && repo.topics.some(topic => terms.some(t => topic.toLowerCase() === t))
      return inLang || inDesc || inTopics
    })
  }

  // Hanya tampilkan skill yang punya minimal 1 repo di GitHub
  const activeSkills = loading
    ? []
    : SKILLS.filter(skill => getFilteredRepos(skill.name).length > 0)

  const activeRepos = selectedSkill ? getFilteredRepos(selectedSkill) : []
  const selectedSkillData = SKILLS.find(s => s.name === selectedSkill)

  return (
    <section id="skills" className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

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
            Expertise
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="text-3xl md:text-4xl font-semibold text-stone-100 mb-3"
        >
          Teknologi & Tools
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="text-stone-500 text-sm mb-10"
        >
          Klik salah satu teknologi untuk melihat project terkait.
        </motion.p>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-16 bg-stone-900/60 border border-stone-800 rounded-xl animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Skills grid — hanya skill yang punya repo */}
        {!loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {activeSkills.map((skill, index) => {
              const isActive = selectedSkill === skill.name
              const repoCount = getFilteredRepos(skill.name).length

              return (
                <motion.button
                  key={skill.name}
                  onClick={() => setSelectedSkill(isActive ? null : skill.name)}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index * 0.05}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative flex items-center gap-3 p-4 border rounded-xl transition-all duration-300 text-left overflow-hidden ${
                    isActive
                      ? 'bg-amber-500/10 border-amber-500/50 shadow-lg shadow-amber-900/10'
                      : 'bg-stone-900/60 border-stone-800 hover:border-amber-500/30 hover:bg-stone-800/60'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
                  )}

                  <div className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-stone-800 text-stone-400'
                  }`}>
                    <skill.icon className="w-4 h-4" />
                  </div>

                  <div className="relative z-10 flex-1 min-w-0">
                    <span className={`block text-sm font-medium transition-colors duration-300 truncate ${
                      isActive ? 'text-amber-400' : 'text-stone-400'
                    }`}>
                      {skill.name}
                    </span>
                    <span className="block text-xs text-stone-600 mt-0.5">
                      {repoCount} repo
                    </span>
                  </div>

                  {isActive && (
                    <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-amber-500" />
                  )}
                </motion.button>
              )
            })}
          </div>
        )}

        {/* Panel detail */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="p-6 bg-stone-900/60 border border-stone-800 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {selectedSkillData && (
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400">
                        <selectedSkillData.icon className="w-4 h-4" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-semibold text-stone-200">
                        Project dengan {selectedSkill}
                      </h3>
                      <p className="text-xs text-stone-600 mt-0.5">
                        {activeRepos.length} repo ditemukan
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-2 text-stone-600 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeRepos.map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Skills