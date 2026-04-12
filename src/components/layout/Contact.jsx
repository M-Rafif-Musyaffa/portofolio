import { motion } from 'framer-motion'
import { PERSONAL_INFO, SKILLS, SOCIAL_LINKS } from '../../utils/constants'
import { fadeUp } from '../../utils/animations'
import { FiMail} from 'react-icons/fi'

function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="relative pt-24 pb-0 px-6 bg-[#0A0A0A] overflow-hidden border-t border-stone-800/50">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-600/5 rounded-t-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* CTA utama */}
        <div className="text-center mb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mb-6"
          >
            <span className="inline-block text-xs font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 tracking-widest uppercase">
              Hubungi Aku
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            className="text-4xl md:text-5xl font-semibold text-stone-100 mb-6"
          >
            Mari Berkolaborasi
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="text-stone-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Saat ini aku terbuka untuk peluang baru. Baik itu tawaran proyek, pekerjaan, atau sekadar ingin menyapa — jangan ragu untuk menghubungi!
          </motion.p>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.45}
            href={`mailto:${PERSONAL_INFO.email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm rounded-xl transition-colors duration-300"
          >
            <FiMail className="w-5 h-5" />
            Kirim Email Sekarang
          </motion.a>
        </div>

        {/* Footer bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          className="border-t border-stone-800/60 py-12 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          
          {/* Kolom 1 — Bio */}
          <div>
            <a href="#top" className="font-mono text-sm tracking-wide group flex items-center mb-4">
              <span className="text-stone-500 group-hover:text-amber-500 transition-colors duration-300">{"{"}</span>
              <span className="text-amber-500 font-medium px-1.5 group-hover:text-stone-100 transition-colors duration-300">
                "{PERSONAL_INFO.name.split(' ')[0].toLowerCase()}"
              </span>
              <span className="text-stone-500 group-hover:text-amber-500 transition-colors duration-300">{"}"}</span>
            </a>
            <p className="text-sm text-stone-500 leading-relaxed">
              fresh graduate frontend developer yang fokus membangun pengalaman web yang bersih, interaktif, dan bermakna. Selalu belajar, selalu berkarya.
            </p>
          </div>

          {/* Kolom 2 — Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">
              Teknologi yang Aku Pakai
            </h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(skill => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-500 bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-full"
                >
                  <skill.icon className="w-3 h-3" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Kolom 3 — Social & Email */}
          <div>
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">
              Temukan Aku Di
            </h4>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-stone-500 hover:text-amber-400 transition-colors duration-300 group"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-stone-900 border border-stone-800 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-all duration-300">
                    <social.icon className="w-3.5 h-3.5" />
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800/40 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-xs text-stone-700">
            Dibangun dengan React · Tailwind CSS · Framer Motion
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact