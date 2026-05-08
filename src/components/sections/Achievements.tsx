"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Trophy, Award, Star, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  award: Award,
  star: Star,
  zap: Zap,
};

function AnimatedCounter({ to, duration = 1.5 }: { to: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          animate(count, to, { duration });
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [count, to, duration]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplay(v));
  }, [rounded]);

  return <span ref={ref}>{display}</span>;
}

const stats = [
  { value: 4, label: "Hackathons", suffix: "" },
  { value: 2, label: "Runner-Ups", suffix: "" },
  { value: 2, label: "National Finals", suffix: "" },
  { value: 3, label: "Projects Live", suffix: "+" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Recognition"
          title="Achievements"
          subtitle="Competing and winning at national-level hackathons and ideathons."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-bright border border-border rounded-2xl p-6 text-center relative overflow-hidden group hover:border-border-bright transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-accent-2/3 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display font-bold text-4xl gradient-text mb-1">
                <AnimatedCounter to={stat.value} />
                {stat.suffix}
              </div>
              <div className="font-mono text-xs text-muted tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="glass-bright border border-border rounded-2xl p-6 flex items-start gap-5 relative overflow-hidden group hover:border-border-bright transition-all duration-300"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 20% 50%, ${item.color}06, transparent 60%)`
                  }}
                />

                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />

                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.7 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    background: item.color + "15",
                    border: `1px solid ${item.color}30`,
                    boxShadow: `0 0 20px ${item.color}20`,
                  }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </motion.div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-display font-bold text-sm leading-snug">
                      {item.title}
                    </h3>
                    <span
                      className="font-mono text-[10px] px-2 py-1 rounded-full shrink-0"
                      style={{
                        color: item.color,
                        background: item.color + "15",
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p
                    className="font-display font-semibold text-xs"
                    style={{ color: item.color }}
                  >
                    🏆 {item.position}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
