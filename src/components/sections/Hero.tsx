"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Terminal, Database, Cpu, ArrowDown, Download, ExternalLink } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { personal, socials } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  terminal: Terminal,
  database: Database,
  cpu: Cpu,
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  const typed = useTypewriter(personal.roles, {
    typeSpeed: 70,
    deleteSpeed: 40,
    pauseDuration: 1800,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-accent/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent/8 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-accent/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 py-20">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-accent/20"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="font-mono text-xs text-accent tracking-wider">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4 leading-none tracking-tight"
          >
            <span className="block text-text">K Vaibhav</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mb-6 h-10 flex items-center justify-center lg:justify-start"
          >
            <span className="font-mono text-lg md:text-xl text-accent">
              {typed}
              <span className="animate-pulse ml-0.5 border-r-2 border-accent" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10 text-base font-body"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <a
              href="#projects"
              className="group relative px-7 py-3 rounded-full text-sm font-body font-medium overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 opacity-100 group-hover:opacity-90 transition-opacity" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-accent-2 to-accent" />
              <span className="relative z-10 text-bg flex items-center gap-2">
                View Projects
                <ExternalLink size={14} />
              </span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full text-sm font-body font-medium glass border border-border hover:border-accent/40 text-text hover:text-accent transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full text-sm font-body font-medium border border-border text-muted hover:text-text hover:border-border-bright transition-all duration-300 flex items-center gap-2"
            >
              <Download size={14} />
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {socials.map((social) => {
              const Icon = iconMap[social.icon] || Github;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-9 h-9 rounded-lg glass border border-border hover:border-accent/40 flex items-center justify-center text-muted hover:text-accent transition-all duration-200 hover:shadow-glow-accent hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right - AI Visual */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="relative w-72 h-72 md:w-80 md:h-80"
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-accent/20"
            />
            {/* Inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-accent-2/20"
            />

            {/* Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-40 rounded-3xl glass-bright border border-border-bright flex flex-col items-center justify-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-2/5" />
                <span className="font-display font-bold text-4xl gradient-text relative z-10">
                  KV
                </span>
                <span className="font-mono text-[10px] text-muted tracking-widest relative z-10">
                  ML ENGINEER
                </span>
                {/* Scanlines */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,255,0.05) 3px, rgba(0,212,255,0.05) 4px)"
                  }}
                />
              </div>
            </div>

            {/* Orbit dots */}
            {[
              { label: "Python", angle: 0, color: "#00d4ff" },
              { label: "TF", angle: 60, color: "#ff6b6b" },
              { label: "ML", angle: 120, color: "#7b2fff" },
              { label: "AI", angle: 180, color: "#00d4ff" },
              { label: "Docker", angle: 240, color: "#4a9eff" },
              { label: "NLP", angle: 300, color: "#ff2d78" },
            ].map((item) => {
              const radius = 136;
              const rad = (item.angle * Math.PI) / 180;
              const x = 50 + (radius / 2.88) * Math.cos(rad);
              const y = 50 + (radius / 2.88) * Math.sin(rad);
              return (
                <motion.div
                  key={item.label}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: item.angle / 60 * 0.5,
                  }}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="px-2 py-1 rounded-full font-mono text-[9px] border"
                    style={{
                      borderColor: item.color + "40",
                      backgroundColor: item.color + "15",
                      color: item.color,
                      boxShadow: `0 0 8px ${item.color}30`,
                    }}
                  >
                    {item.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-muted tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
