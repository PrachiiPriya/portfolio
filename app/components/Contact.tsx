"use client";

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const socials = [
  {
    label: "Email",
    value: "prachiatwork11@gmail.com",
    href: "mailto:prachiatwork11@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "PrachiiPriya",
    href: "https://github.com/PrachiiPriya",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Prachi Priya",
    href: "https://linkedin.com/in/prachi-priya-256997234",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <AnimateIn>
          <h2 className="mb-2 font-mono text-sm tracking-wider text-accent">
            CONTACT
          </h2>
          <h3 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s work together
          </h3>
          <p className="mx-auto mb-12 max-w-md text-text-secondary">
            I&apos;m always open to discussing new projects, opportunities, or
            collaborations. Feel free to reach out!
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <motion.a
            href="mailto:prachiatwork11@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group mb-14 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent-glow transition-all hover:shadow-2xl hover:shadow-accent-glow"
          >
            Say Hello
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </AnimateIn>

        <StaggerContainer
          className="grid gap-4 sm:grid-cols-3"
          staggerDelay={0.1}
        >
          {socials.map((social) => (
            <StaggerItem key={social.label}>
              <motion.a
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={
                  social.label !== "Email" ? "noopener noreferrer" : undefined
                }
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glow-card group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent-glow/20">
                  <social.icon
                    size={22}
                    className="text-accent"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{social.label}</p>
                  <p className="text-xs text-text-muted">{social.value}</p>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
