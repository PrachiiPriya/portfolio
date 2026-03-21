"use client";

import { Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const projects = [
  {
    title: "BabyCare",
    subtitle: "E-commerce Platform for Baby Products",
    description:
      "Full-stack e-commerce platform with dynamic product catalog, cart management, secure payment gateway integration, and complete order and checkout workflows.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
    github: "https://github.com/PrachiiPriya/BabyCart",
    date: "Jan 2024",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "VacayStay",
    subtitle: "Property Rental & Booking Platform",
    description:
      "Platform enabling users to list, search, and book rental properties with secure authentication, booking workflows, and scalable property listing management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
    github: "https://github.com/PrachiiPriya/VacayStay",
    date: "Aug 2023",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="mb-2 font-mono text-sm tracking-wider text-accent">
            PROJECTS
          </h2>
          <h3 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
            Things I&apos;ve built
          </h3>
        </AnimateIn>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <AnimateIn key={project.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="glow-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                {/* Gradient header */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-end p-6`}
                >
                  <div className="dot-grid absolute inset-0 opacity-30" />
                  <div className="relative">
                    <span className="mb-2 inline-block rounded-full bg-black/30 px-2.5 py-0.5 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                      {project.date}
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      {project.title}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-1 text-xs font-medium text-accent">
                    {project.subtitle}
                  </p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent/5 px-2.5 py-0.5 text-xs text-accent ring-1 ring-accent/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 border-t border-border pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-text-primary"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-accent"
                    >
                      View
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
