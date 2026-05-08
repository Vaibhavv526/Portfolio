"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Code2, Terminal, Database, Cpu, Mail, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { socials } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  terminal: Terminal,
  database: Database,
  cpu: Cpu,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          label="Get In Touch"
          title="Let's Connect"
          subtitle="Open to ML engineering roles, collaborations, and interesting AI projects."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-bright border border-border rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
              <h3 className="font-display font-semibold mb-5">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-body">
                  <Mail size={15} className="text-accent shrink-0" />
                  <span className="text-muted">vaibhav@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-body">
                  <MapPin size={15} className="text-accent-2 shrink-0" />
                  <span className="text-muted">India</span>
                </div>
              </div>

              <div className="mt-7 pt-6 border-t border-border">
                <p className="font-mono text-xs text-muted mb-4 tracking-wider">FIND ME ON</p>
                <div className="grid grid-cols-3 gap-3">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon] || Github;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass border border-border hover:border-accent/40 rounded-xl p-3 flex flex-col items-center gap-1.5 group transition-all duration-200 hover:shadow-glow-accent"
                      >
                        <Icon size={16} className="text-muted group-hover:text-accent transition-colors" />
                        <span className="font-mono text-[9px] text-muted group-hover:text-accent/80 transition-colors tracking-wider">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="glass-bright border border-border rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent-2 to-transparent opacity-50" />
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400 tracking-wider">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <p className="text-muted text-sm font-body leading-relaxed">
                Currently seeking ML Engineering internships and full-time opportunities. Excited to contribute to impactful AI projects.
              </p>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-bright border border-border rounded-2xl p-7 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent-2 to-accent-3" />

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 py-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: 3 }}
                  className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center"
                >
                  <Send size={20} className="text-accent" />
                </motion.div>
                <h3 className="font-display font-bold text-lg">Message Sent!</h3>
                <p className="text-muted text-sm text-center font-body">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-2 text-xs font-mono text-accent hover:underline"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-semibold mb-6">Send a Message</h3>

                {[
                  { field: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { field: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label className="font-mono text-xs text-muted tracking-wider block mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      value={form[field as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                      placeholder={placeholder}
                      required
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-body text-text placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:shadow-glow-accent transition-all duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-xs text-muted tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-body text-text placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:shadow-glow-accent transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full relative py-3 rounded-xl font-body text-sm font-medium overflow-hidden group disabled:opacity-60 transition-all"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 transition-opacity group-hover:opacity-90" />
                  <span className="relative z-10 text-bg flex items-center justify-center gap-2">
                    {status === "sending" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
