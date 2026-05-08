"use client";
import { motion } from "framer-motion";
import { User, Cpu, Layers, GitBranch } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal } from "@/lib/data";

const cards = [
  {
    icon: Cpu,
    title: "ML Engineering",
    desc: "Building end-to-end pipelines from raw data to deployed models with rigorous preprocessing and validation.",
    color: "#00d4ff",
  },
  {
    icon: Layers,
    title: "AI Applications",
    desc: "Designing agentic AI systems, RAG pipelines, and interactive apps powered by modern LLM frameworks.",
    color: "#7b2fff",
  },
  {
    icon: GitBranch,
    title: "Scalable Systems",
    desc: "Containerizing and deploying ML workflows with Docker, Flask, and cloud-ready architectures.",
    color: "#ff2d78",
  },
];

const timeline = [
  {
    year: "2026",
    title: "National Hackathon Finalist",
    desc: "IIIT Naya Raipur E-Summit & NHIDE National Hackathon",
    color: "#00d4ff",
  },
  {
    year: "2026",
    title: "Hackathon Runner-Ups",
    desc: "SSH 26 & Business Ghar Ideathon 2026",
    color: "#7b2fff",
  },
  {
    year: "2025",
    title: "ML Projects in Production",
    desc: "Deployed Weather Forecasting & Customer Segmentation systems",
    color: "#ff2d78",
  },
  {
    year: "2024",
    title: "Started ML Journey",
    desc: "Began mastering Python, Data Science, and Deep Learning fundamentals",
    color: "#ffa500",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Who I Am"
          title="About Me"
          subtitle="A passionate ML engineer turning data into intelligent, real-world systems."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio + cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-bright border border-border rounded-2xl p-8 mb-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <User size={18} className="text-accent" />
                </div>
                <span className="font-display font-semibold text-lg">My Story</span>
              </div>
              <p className="text-muted leading-relaxed font-body text-sm">
                {personal.about}
              </p>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {[
                  { val: "3+", label: "Projects Shipped" },
                  { val: "4", label: "Hackathon Wins" },
                  { val: "6+", label: "ML Frameworks" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold text-2xl gradient-text">
                      {s.val}
                    </div>
                    <div className="font-mono text-[10px] text-muted mt-1 tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Info cards */}
            <div className="grid gap-4">
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4 }}
                    className="gradient-border glass p-5 flex items-start gap-4 cursor-default group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: card.color + "15",
                        border: `1px solid ${card.color}30`,
                      }}
                    >
                      <Icon size={16} style={{ color: card.color }} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm mb-1">
                        {card.title}
                      </h3>
                      <p className="text-muted text-xs leading-relaxed font-body">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-semibold text-lg mb-8 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              Journey
              <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
            </motion.h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent-2/40 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="flex gap-6 relative"
                  >
                    {/* Dot */}
                    <div className="relative shrink-0">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center border"
                        style={{
                          background: item.color + "10",
                          borderColor: item.color + "40",
                          boxShadow: `0 0 12px ${item.color}20`,
                        }}
                      >
                        <span className="font-mono text-[9px]" style={{ color: item.color }}>
                          {item.year.slice(2)}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="glass-bright border border-border rounded-xl p-5 flex-1 group hover:border-border-bright transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-semibold text-sm">
                          {item.title}
                        </h4>
                        <span
                          className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                          style={{
                            color: item.color,
                            background: item.color + "15",
                            border: `1px solid ${item.color}30`,
                          }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <p className="text-muted text-xs font-body leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech orbit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 glass-bright border border-border rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent-2 to-transparent opacity-40" />
              <p className="font-mono text-xs text-muted mb-4 tracking-wider text-center">
                CORE STACK
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python", "TensorFlow", "Scikit-learn", "Docker", "Streamlit", "HuggingFace", "LangGraph", "NumPy", "Pandas", "XGBoost", "Flask", "n8n"].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
