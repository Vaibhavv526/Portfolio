"use client";
import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
        <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
          {label}
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted max-w-2xl mx-auto font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
