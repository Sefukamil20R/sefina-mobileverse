"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Lock } from "lucide-react"

interface Project {
  id: number
  name: string
  description: string
  mockupImage: string
  company?: string
  liveLink?: string
  liveLabel?: string
  githubLink?: string
  isClientWork: boolean
}

// Project cards
const projects: Project[] = [
  {
    id: 1,
    name: "Fayida App",
    description: "A digital tutoring platform that enhances learning through interactive lessons, AI-assisted guidance, and personalized educational experiences.",
    mockupImage: "/MockUp/fayida.png",
    company: "Fayida",
    liveLink: "https://play.google.com/store/apps/details?id=com.fayidaacademy.app",
    liveLabel: "Live on Google Play",
    isClientWork: true,
  },
  {
    id: 2,
    name: "Qismati",
    description: "An Islamic wedding app connecting couples and families, streamlining event planning and providing essential wedding services.",
    mockupImage: "/MockUp/Qismati.png",
    company: "Qismati",
    liveLink: "https://play.google.com/store/apps/details?id=com.qismati.qismati",
    liveLabel: "Live on Google Play",
    isClientWork: true,
  },
  {
    id: 3,
    name: "AASTU MAP",
    description: "A smart campus navigation app built to help AASTU students and visitors easily find buildings, offices, and key locations with real-time guidance.",
    mockupImage: "/MockUp/AASTUMAP.png",
    company: "GDG",
    liveLink: "https://aastu-map-project.web.app/",
    liveLabel: "Download App",
    isClientWork: true,
  },
  {
    id: 4,
    name: "MedaCare",
    description: "A healthcare app enabling virtual consultations, AI-driven recommendations, and secure patient management.",
    mockupImage: "/MockUp/MedaCare.png",
    githubLink: "https://github.com/Sefukamil20R/MedaCare-Mobile",
    isClientWork: false,
  },
  {
    id: 5,
    name: "StaySphere",
    description: "A hotel booking app that helps users easily search, compare, and reserve accommodations with a seamless and user-friendly experience.",
    mockupImage: "/MockUp/Staysphere.png",
    githubLink: "https://github.com/Sefukamil20R/staysphere-app",
    isClientWork: false,
  },
  {
    id: 9,
    name: "Alenlachu",
    description: "A mental health app designed to offer virtual therapy sessions, emotional tracking, and guided wellness activities to support users’ daily well-being.",
    mockupImage: "/MockUp/Alenlachu.png",
    company: "Ethioware",
    isClientWork: true,
  },
  {
    id: 7,
    name: "OCR Scanner",
    description: "A smart mobile app that scans receipts, extracts key details with high accuracy, and sends the data securely to the backend for efficient record management.",
    mockupImage: "/MockUp/ocr.png",
    githubLink: "https://github.com/Sefukamil20R/smart-receipt-scanner",
    isClientWork: false,
  },
  {
    id: 8,
    name: "Foodora",
    description: "A food delivery and grocery app that lets users order fresh meals and ingredients effortlessly, ensuring quick service and a smooth, reliable experience.",
    mockupImage: "/MockUp/Food.png",
    githubLink: "https://github.com/Sefukamil20R/Foodora",
    isClientWork: false,
  },
  {
    id: 6,
    name: "Ecom",
    description: "A modern e-commerce platform that delivers seamless product browsing, secure payments, and an intuitive shopping experience across devices.",
    mockupImage: "/MockUp/Ecom.png",
    githubLink: "https://github.com/Sefukamil20R/Ecom",
    isClientWork: false,
  },
]

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const hoverVariants: any = {
  hover: {
    scale: 1.05,
    rotateX: 5,
    rotateY: -5,
    transition: {
      duration: 0.3,
    },
  },
}

const pulseGlowVariants: any = {
  animate: {
    boxShadow: [
      "0 0 15px rgba(187, 133, 43, 0.3), inset 0 0 15px rgba(187, 133, 43, 0.05)",
      "0 0 30px rgba(187, 133, 43, 0.5), inset 0 0 20px rgba(187, 133, 43, 0.1)",
      "0 0 15px rgba(187, 133, 43, 0.3), inset 0 0 15px rgba(187, 133, 43, 0.05)",
    ],
    transition: {
      duration: 2.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop" as const,
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-[#282830]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Creations</h2>
          <p className="text-gray-400 text-lg mb-6">A showcase of apps I've designed and developed</p>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#bb852b] to-transparent rounded-full"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
              className={`group ${projects.length % 2 !== 0 && index === projects.length - 1 ? "md:col-span-2 lg:col-span-2 md:mx-auto md:max-w-xl" : ""}`}
            >
              <motion.div
                variants={hoverVariants}
                className="bg-[#373543] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate="animate"
                  variants={pulseGlowVariants}
                  className="relative aspect-video bg-gradient-to-br from-[#1a1a1e] to-[#2a2a30] flex items-center justify-center overflow-hidden rounded-lg border-2 border-[#bb852b]/40 hover:border-[#bb852b]/70 transition-colors duration-300"
                >
                  {/* Subtle shimmer effect */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(187, 133, 43, 0.4) 0%, rgba(187, 133, 43, 0.1) 50%, rgba(187, 133, 43, 0.4) 100%)",
                      backgroundSize: "200% 200%",
                    }}
                  ></motion.div>

                  {/* Subtle radial glow */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: "radial-gradient(circle at center, rgba(187, 133, 43, 0.3) 0%, transparent 70%)",
                    }}
                  ></div>

                  {/* Mockup Image */}
                  <motion.img
                    src={project.mockupImage}
                    alt={project.name}
                    className="h-full w-full object-cover rounded-md shadow-2xl relative z-10"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    {project.liveLink && (
                      <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#C7922B]/40 bg-[#2f2b38] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f5f5]">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-2">{project.description}</p>

                  {/* Buttons/Badges */}
                  <div className="flex items-center gap-3">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#bb852b] px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-[#a67a24]"
                      >
                        <ExternalLink size={18} />
                        {project.liveLink.includes("play.google.com") ? "View on Google Play" : project.liveLabel || "Live App"}
                      </a>
                    ) : project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#bb852b] hover:bg-[#a67a24] text-white rounded-lg font-medium transition-colors duration-200"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#373543] border border-[#bb852b]/30 text-[#bb852b] rounded-lg font-medium">
                        <Lock size={18} />
                        {project.company || "Client Work"}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
