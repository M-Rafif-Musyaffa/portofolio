import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/animations'
import { EXPERIENCES_ACADEMIC } from '../../utils/constants'

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-4"
        >
          <span className="inline-block text-xs font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 tracking-widest uppercase">
            Experience
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="text-3xl md:text-4xl font-semibold text-stone-100 mb-12"
        >
          Pengalaman Akademik
        </motion.h2>

        {/* Timeline */}
        <div className="relative">

          {/* Garis vertikal */}
          <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-500/40 via-stone-800 to-transparent" />

          <div className="space-y-8">
            {EXPERIENCES_ACADEMIC.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.15}
                className="relative pl-16"
              >
                {/* Icon di timeline */}
                <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-amber-500 z-10">
                  <exp.icon className="w-4 h-4" />
                </div>

                {/* Card */}
                <div className="group p-6 bg-stone-900/60 border border-stone-800 hover:border-amber-500/30 rounded-2xl transition-all duration-300">

                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="inline-block text-xs font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1 mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-lg font-semibold text-stone-100 group-hover:text-amber-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-stone-500 mt-0.5">
                        {exp.place}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-stone-600 bg-stone-800/80 border border-stone-700/50 px-3 py-1.5 rounded-full shrink-0 self-start sm:self-center">
                      {exp.period}
                    </span>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-sm text-stone-400 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map(tech => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
                        style={{
                          color: tech.color,
                          background: `${tech.color}15`,
                          borderColor: `${tech.color}30`,
                        }}
                      >
                        <tech.icon className="w-3 h-3" />
                        {tech.name}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience