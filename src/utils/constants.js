import {
  SiJavascript, SiTypescript, SiPython, SiReact,
  SiLaravel, SiVuedotjs, SiTailwindcss, SiGo,
  SiGodotengine, SiUnity, SiPhp, SiHtml5, SiCss,
  SiKotlin, SiCodeigniter, SiBootstrap
} from 'react-icons/si'
import { FiBook, FiMonitor, FiInstagram, FiLinkedin, FiGithub,FiTerminal,FiLayout  } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export const LANG_MAP = {
  'JavaScript': { icon: SiJavascript,  color: '#F7DF1E', bg: 'rgba(247,223,30,0.1)',  border: 'rgba(247,223,30,0.2)'  },
  'TypeScript': { icon: SiTypescript,  color: '#3178C6', bg: 'rgba(49,120,198,0.1)',  border: 'rgba(49,120,198,0.2)'  },
  'Python':     { icon: SiPython,      color: '#3776AB', bg: 'rgba(55,118,171,0.1)',  border: 'rgba(55,118,171,0.2)'  },
  'PHP':        { icon: SiPhp,         color: '#777BB4', bg: 'rgba(119,123,180,0.1)', border: 'rgba(119,123,180,0.2)' },
  'Blade':      { icon: SiLaravel,     color: '#FF2D20', bg: 'rgba(255,45,32,0.1)',   border: 'rgba(255,45,32,0.2)'   },
  'Go':         { icon: SiGo,          color: '#00ADD8', bg: 'rgba(0,173,216,0.1)',   border: 'rgba(0,173,216,0.2)'   },
  'GDScript':   { icon: SiGodotengine, color: '#478CBF', bg: 'rgba(71,140,191,0.1)',  border: 'rgba(71,140,191,0.2)'  },
  'C#':         { icon: SiUnity,       color: '#239120', bg: 'rgba(35,145,32,0.1)',   border: 'rgba(35,145,32,0.2)'   },
  'HTML':       { icon: SiHtml5,       color: '#E34F26', bg: 'rgba(227,79,38,0.1)',   border: 'rgba(227,79,38,0.2)'   },
  'CSS':        { icon: SiCss,         color: '#1572B6', bg: 'rgba(21,114,182,0.1)',  border: 'rgba(21,114,182,0.2)'  },
  'Kotlin':      { icon: SiKotlin,       color: '#7F52FF', bg: 'rgba(127,82,255,0.1)', border: 'rgba(127,82,255,0.2)' },
  'CodeIgniter': { icon: SiCodeigniter,  color: '#EF4223', bg: 'rgba(239,66,35,0.1)',  border: 'rgba(239,66,35,0.2)'  },
}

export const PERSONAL_INFO = {
  name: "Muhammad Rafif Musyaffa",
  title: "Frontend Developer",
  tagline: "Membangun pengalaman digital yang indah dan fungsional.",
  email: "musyaffa.ezz@gmail.com",
  githubUsername: "M-Rafif-Musyaffa",
  githubUrl: "https://github.com/M-Rafif-Musyaffa",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-rafif-musyaffa-9341b630a/",
}

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: PERSONAL_INFO.githubUrl,
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: PERSONAL_INFO.linkedinUrl,
    icon: FiLinkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/musyaffa.14",
    icon: FiInstagram,
  },
]

export const SKILLS = [
  { name: 'Laravel', icon: SiLaravel },
  { name: 'React', icon: SiReact },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Golang', icon: SiGo },
  { name: 'Kotlin', icon: SiKotlin },
  {name: 'Codeighter', icon:SiCodeigniter },
  {name: 'Bootstrap', icon:SiBootstrap },
]
export const SKILL_LANG_MAP = {
  'Laravel':      ['blade', 'php', 'laravel'],
  'React':        ['javascript', 'typescript', 'react'],
  'Vue.js':       ['vue', 'javascript'],
  'Tailwind CSS': ['tailwind', 'css'],
  'Golang':       ['go'],
  'Godot':        ['gdscript', 'godot'],
  'Unity':        ['c#', 'unity'],
  'Kotlin': ['kotlin'],
  'Codeighter': ['Codeighter'],
  'Bootstrap': ['Bootstrap'],
}

export const EXPERIENCES = [
  {
    id: 1,
    role: "Frontend Developer",
    period: "Februari 2026 - Sekarang",
    shortDesc: "Mengembangkan DevKit, platform web toolkit interaktif dengan React, Tailwind CSS, dan Docker.",
    fullDesc: "Mengembangkan DevKit, sebuah platform web toolkit interaktif yang dibangun menggunakan React, Tailwind CSS, dan Docker. Berfokus penuh pada perancangan komponen UI modern yang reusable dan optimalisasi performa antarmuka.",
    icon: FiLayout
  },
  {
    id: 2,
    role: "Web UI Integration",
    period: "Agustus 2025 - Februari 2026",
    shortDesc: "Membangun antarmuka responsif untuk berbagai sistem terintegrasi menggunakan ekosistem Laravel.",
    fullDesc: "Membangun antarmuka responsif untuk berbagai sistem terintegrasi. Menangani perancangan visual untuk aplikasi perpustakaan-app, serta dashboard kalkulasi Sistem Pendukung Keputusan (SPK) menggunakan ekosistem Laravel.",
    icon: FiTerminal
  }
]

export const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
]

export const EXPERIENCES_ACADEMIC = [
  {
    id: 1,
    type: "Kerja Praktek",
    role: "Web Developer",
    place: "MA AL Muthohhar",
    period: "2024 · Semester 7",
    description: "Membangun aplikasi manajemen perpustakaan dari awal hingga deployment. Melakukan simulasi sistem dan pelatihan penggunaan aplikasi kepada staff.",
    techs: [
      { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
    icon: FiMonitor,
  },
  {
    id: 2,
    type: "Skripsi",
    role: "Mobile Developer",
    place: "Universitas",
    period: "2025 · Semester 8",
    description: "Mengembangkan aplikasi Al-Quran digital berbasis mobile dengan integrasi chatbot tanya jawab Islami menggunakan metodologi Extreme Programming.",
    techs: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    ],
    icon: FiBook,
  },
]
