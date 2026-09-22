"use client";

import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C/C++", "JavaScript", "TypeScript", "Python", "Java", "PHP"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Redux", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "MVC Architecture"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: Terminal,
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "AWS",
      "AWS SQS",
      "Linux",
      "Git",
    ],
  },
  {
    title: "Tools & Concepts",
    icon: Wrench,
    skills: ["Postman", "VS Code", "DSA", "OOP", "System Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="mb-2 font-mono text-sm tracking-wider text-accent">
            SKILLS
          </h2>
          <h3 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h3>
        </AnimateIn>

        <StaggerContainer
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.title}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="glow-card group h-full rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 transition-all group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent-glow/20">
                    <cat.icon size={18} className="text-accent" />
                  </div>
                  <h4 className="font-semibold">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-background/80 px-2.5 py-1 text-xs text-text-secondary ring-1 ring-white/[0.04] transition-colors group-hover:text-text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
