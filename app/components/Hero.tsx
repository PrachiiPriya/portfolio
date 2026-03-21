"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]"
        />
      </div>

      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="font-mono text-xs tracking-wider text-accent">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-text-primary">Hi, I&apos;m </span>
          <span className="gradient-text">Prachi</span>
          <br />
          <span className="gradient-text">Priya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          Software Engineer crafting{" "}
          <span className="text-text-primary font-medium">scalable backend systems</span>{" "}
          and{" "}
          <span className="text-text-primary font-medium">full-stack applications</span>{" "}
          with the MERN stack. Currently at{" "}
          <span className="text-accent font-medium">ZeonAI Labs</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-14 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="group relative rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-accent-glow"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary hover:shadow-lg hover:shadow-accent-glow/10"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            {
              href: "https://github.com/PrachiiPriya",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/prachi-priya-256997234",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "mailto:prachiatwork11@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent-glow/20"
              aria-label={social.label}
            >
              <social.icon
                size={18}
                className="text-text-muted transition-colors group-hover:text-accent"
              />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.a>
    </section>
  );
}
