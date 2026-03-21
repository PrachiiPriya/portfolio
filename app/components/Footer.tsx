import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div className="flex items-center gap-5">
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
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-text-muted transition-colors hover:text-accent"
              aria-label={s.label}
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="font-mono text-sm text-text-muted">
            &copy; {new Date().getFullYear()}{" "}
            <span className="gradient-text font-semibold">Prachi Priya</span>
          </p>
          <p className="text-[11px] text-text-muted/60">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
