"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface Skill {
  name: string
  logo: string
  brandColor: string
}

const skills: Skill[] = [
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    brandColor: "#02569B",
  },
  {
    name: "Dart",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    brandColor: "#0175C2",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    brandColor: "#FFCA28",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    brandColor: "#3776AB",
  },
  {
    name: "OpenAI",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    brandColor: "#412991",
  },
  {
    name: "Google Gemini",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlegemini.svg",
    brandColor: "#4285F4",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    brandColor: "#339933",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    brandColor: "#000000",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    brandColor: "#61DAFB",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    brandColor: "#3178C6",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    brandColor: "#F7DF1E",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    brandColor: "#E10098",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    brandColor: "#336791",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    brandColor: "#13AA52",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    brandColor: "#2496ED",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    brandColor: "#F05032",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    brandColor: "#61DAFB",
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    brandColor: "#61DAFB",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    brandColor: "#007396",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    brandColor: "#00758F",
  },
]

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div
        className="relative rounded-lg p-6 transition-all duration-300"
        style={{
          backgroundColor: "#373543",
          border: isHovered ? `2px solid ${skill.brandColor}` : "1px solid #515266",
        }}
      >
        {isHovered && (
          <div
            className="absolute inset-0 rounded-lg opacity-20 blur-lg"
            style={{ backgroundColor: skill.brandColor }}
          />
        )}

        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex flex-col items-center gap-3"
        >
          <div className="relative h-12 w-12">
            <Image
              src={skill.logo || "/placeholder.svg"}
              alt={skill.name}
              fill
              className="object-contain"
              style={{ filter: isHovered ? `drop-shadow(0 0 8px ${skill.brandColor})` : "none" }}
            />
          </div>
          <p className="text-center text-sm font-semibold text-[#f2f2f2]">{skill.name}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="bg-[#282830] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-[#f2f2f2] md:text-5xl">
            Technical <span className="text-[#bb852b]">Expertise</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#bb852b]" />
          <p className="mt-6 text-lg text-[#a0a0a0]">
            The technologies that shape my craft and bring my ideas to life — tested, refined, and proven through hands-on experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}