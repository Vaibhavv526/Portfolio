"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Terminal, Database, Cpu, ArrowUp } from "lucide-react";
import { socials } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  terminal: Terminal,
  database: Database,
  cpu: Cpu,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-6">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copy */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg border border-accent/30 flex items-center justify-center bg-accent/5">
                <span className="font-display font-bold text-xs gradient-text">KV</span>
              </div>
              <span className="font-display font-semibold text-sm">K Vaibhav</span>
            </div>
            <p className="font-mono text-[11px] text-muted tracking-wide">
              ML Engineer · AI Developer · Builder
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-2">
            {socials.map((social) => {
              const Icon = iconMap[social.icon] || Github;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-8 h-8 rounded-lg glass border border-border hover:border-accent/40 flex items-center justify-center text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={13} />
                </a>
              );
            })}
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors"
          >
            <ArrowUp size={13} />
            Back to top
          </motion.a>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="font-mono text-[10px] text-muted/50 tracking-wider">
            © {new Date().getFullYear()} K Vaibhav · Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
