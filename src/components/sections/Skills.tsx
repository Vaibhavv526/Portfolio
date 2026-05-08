"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

function SkillBar({ name, level, color, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-text/80">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
    </motion.div>
  );
}

const conceptColors: Record<string, string> = {
  "ML Pipelines": "#00d4ff",
  "RAG": "#7b2fff",
  "Agentic AI": "#ff2d78",
  "Feature Engineering": "#00d4ff",
  "Transformers": "#7b2fff",
  "NLP": "#ff2d78",
  "Data Structures": "#4a9eff",
  "OOP": "#ffa500",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent-2/[0.03] blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          label="Expertise"
          title="Skills & Tools"
          subtitle="A curated stack of tools, frameworks, and concepts I use to build intelligent systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-bright border border-border rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <h3 className="font-display font-semibold text-sm tracking-wide">
                LANGUAGES
              </h3>
            </div>
            <div className="space-y-5">
              {skills.languages.map((s, i) => (
                <SkillBar key={s.name} {...s} color="#00d4ff" delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* ML / Data Science */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-bright border border-border rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent-2 to-transparent" />
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-2" />
              <h3 className="font-display font-semibold text-sm tracking-wide">
                ML / DATA SCIENCE
              </h3>
            </div>
            <div className="space-y-5">
              {skills.ml.map((s, i) => (
                <SkillBar key={s.name} {...s} color="#7b2fff" delay={i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-bright border border-border rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent-3 to-transparent" />
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-3" />
              <h3 className="font-display font-semibold text-sm tracking-wide">
                FRAMEWORKS & TOOLS
              </h3>
            </div>
            <div className="space-y-5">
              {skills.tools.map((s, i) => (
                <SkillBar key={s.name} {...s} color="#ff2d78" delay={i * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 glass-bright border border-border rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent-2 to-accent-3" />
          <h3 className="font-display font-semibold text-sm tracking-wider text-center mb-6 text-muted">
            KEY CONCEPTS
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.concepts.map((concept, i) => (
              <motion.span
                key={concept}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-xl font-mono text-xs border transition-all duration-200 cursor-default"
                style={{
                  color: conceptColors[concept] || "#00d4ff",
                  borderColor: (conceptColors[concept] || "#00d4ff") + "30",
                  background: (conceptColors[concept] || "#00d4ff") + "08",
                  boxShadow: `0 0 0 0 ${conceptColors[concept] || "#00d4ff"}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${conceptColors[concept] || "#00d4ff"}25`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
                }}
              >
                {concept}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
