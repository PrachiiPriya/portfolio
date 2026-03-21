"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const experiences = [
  {
    role: "Software Engineer",
    company: "ZeonAI Labs",
    type: "Full-time · Remote",
    period: "Sept 2025 – Present",
    description:
      "Building backend systems and internal tools for the DeepDelve document intelligence platform.",
    achievements: [
      "Reduced API response latency from 8–10s to under 1s through backend logic and query optimization",
      "Designed database schemas and built REST APIs for dynamic document configuration and processing workflows",
      "Implemented AWS SQS-based asynchronous pipeline for document extraction job processing",
      "Built React-based internal tools for configuring extraction pipelines and monitoring workflows",
    ],
    tech: ["Node.js", "React.js", "AWS SQS", "PostgreSQL", "Docker"],
  },
  {
    role: "SDE Intern (Full Stack)",
    company: "ZeonAI Labs",
    type: "Internship · Remote",
    period: "Feb 2025 – Aug 2025",
    description:
      "Contributed to DeepDelve InvoiceAI, an intelligent invoice processing platform automating ERP data extraction.",
    achievements: [
      "Developed Node.js APIs for SAP S/4HANA and TechOne ERP integrations handling authentication, parsing, and data transformation",
      "Migrated a backend microservice from Laravel (PHP) to Node.js (Express), improving modularity and maintainability",
      "Implemented multi-tenant backend architecture and ERP abstraction layer using OOP and custom Factory Pattern",
      "Built unified ERP integration framework for both SAP and TechOne within a single codebase",
    ],
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "PHP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="mb-2 font-mono text-sm tracking-wider text-accent">
            EXPERIENCE
          </h2>
          <h3 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve worked
          </h3>
        </AnimateIn>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <AnimateIn key={exp.role} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="glow-card rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <p className="mt-1 text-accent font-medium">{exp.company}</p>
                    <p className="mt-0.5 text-xs text-text-muted">{exp.type}</p>
                  </div>
                  <span className="shrink-0 self-start rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
                    {exp.period}
                  </span>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                  {exp.description}
                </p>

                <ul className="mb-6 space-y-2.5">
                  {exp.achievements.map((a, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 border-t border-border pt-5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/5 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
