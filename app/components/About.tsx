"use client";

import { Briefcase, GraduationCap, MapPin, Zap } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const highlights = [
  { value: "1+", label: "Years Experience" },
  { value: "8.21", label: "CGPA" },
  { value: "<1s", label: "API Latency Achieved" },
  { value: "MERN", label: "Core Stack" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="mb-2 font-mono text-sm tracking-wider text-accent">
            ABOUT
          </h2>
          <h3 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
            A bit about me
          </h3>
        </AnimateIn>

        <div className="grid gap-14 md:grid-cols-5">
          <div className="md:col-span-3">
            <AnimateIn delay={0.1}>
              <p className="mb-5 text-[15px] leading-[1.8] text-text-secondary">
                I&apos;m a Software Engineer with a B.Tech in Computer Science
                from Silicon University, Bhubaneswar. I specialize in full-stack
                web development using the MERN stack and have hands-on
                experience building{" "}
                <span className="text-text-primary">
                  scalable backend systems
                </span>
                , designing REST APIs, and integrating complex ERP workflows.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mb-5 text-[15px] leading-[1.8] text-text-secondary">
                At ZeonAI Labs, I&apos;ve optimized API response times from
                8&ndash;10s down to{" "}
                <span className="text-text-primary">under 1 second</span>,
                built asynchronous processing pipelines with AWS SQS, and
                migrated entire microservices from Laravel to Node.js. I&apos;ve
                also architected multi-tenant backend systems using
                Object-Oriented design and custom Factory Patterns.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="text-[15px] leading-[1.8] text-text-secondary">
                Beyond code, I&apos;m passionate about clean architecture,
                performant systems, and building tools that make real impact.
              </p>
            </AnimateIn>

            <StaggerContainer
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
              staggerDelay={0.08}
            >
              {highlights.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="rounded-xl border border-border bg-card p-4 text-center">
                    <p className="mb-1 text-2xl font-bold gradient-text">
                      {item.value}
                    </p>
                    <p className="text-xs text-text-muted">{item.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            <AnimateIn direction="right" delay={0.2}>
              <div className="glow-card rounded-xl border border-border bg-card p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Briefcase size={18} className="text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold">Experience</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Software Engineer</p>
                    <p className="text-xs text-text-muted">
                      ZeonAI Labs &middot; Sept 2025 &ndash; July 2026
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      SDE Intern (Full Stack)
                    </p>
                    <p className="text-xs text-text-muted">
                      ZeonAI Labs &middot; Feb 2025 &ndash; Aug 2025
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.3}>
              <div className="glow-card rounded-xl border border-border bg-card p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold">Education</h4>
                </div>
                <p className="text-sm font-medium">B.Tech in CSE</p>
                <p className="text-xs text-text-muted">
                  Silicon University &middot; 8.21 CGPA
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.4}>
              <div className="glow-card rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Bhubaneswar, India</p>
                    <p className="text-xs text-text-muted">Open to remote</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.5}>
              <div className="glow-card rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Zap size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Strong Areas</p>
                    <p className="text-xs text-text-muted">
                      DSA, Backend, API Integration
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
