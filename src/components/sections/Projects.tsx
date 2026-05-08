"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="Production-grade ML systems and AI applications built from scratch."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative glass-bright border border-border rounded-2xl overflow-hidden flex flex-col hover:border-border-bright transition-all duration-300"
              style={{
                boxShadow: `0 0 0 0 ${project.color}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${project.color}15, 0 0 1px ${project.color}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                }}
              />

              {/* Header visual */}
              <div
                className="h-36 relative overflow-hidden flex items-center justify-center"
                style={{ background: `radial-gradient(ellipse at center, ${project.color}08 0%, transparent 70%)` }}
              >
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(${project.color}15 1px, transparent 1px), linear-gradient(90deg, ${project.color}15 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Project number */}
                <div className="relative z-10 text-center">
                  <span
                    className="font-display font-bold text-6xl opacity-10"
                    style={{ color: project.color }}
                  >
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Glow orb */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-2xl"
                  style={{ background: project.color }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-base mb-3 group-hover:text-text transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-body mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-muted/80 font-body">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: project.color }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full font-mono text-[10px] border"
                      style={{
                        color: project.color,
                        borderColor: project.color + "30",
                        background: project.color + "10",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-body text-muted hover:text-text transition-colors group/btn"
                    >
                      <Github size={13} />
                      <span>Source Code</span>
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover/btn:opacity-100 transition-opacity"
                      />
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-xs font-body text-muted/40">
                      <Github size={13} />
                      Private Repo
                    </span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-2 text-xs font-body transition-colors"
                      style={{ color: project.color }}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Vaibhavv526"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass border border-border hover:border-accent/40 text-muted hover:text-accent transition-all duration-300 font-body text-sm"
          >
            <Github size={15} />
            View All on GitHub
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
