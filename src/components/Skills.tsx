import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Code2, Server, Cloud, Star } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    color: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
    badgeColor: "bg-blue-500/15 border-blue-400/30 text-blue-300 hover:bg-blue-500/30 hover:border-blue-400/60 hover:text-blue-200 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]",
    skills: ["Python", "HTML / CSS Basics"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
    badgeColor: "bg-purple-500/15 border-purple-400/30 text-purple-300 hover:bg-purple-500/30 hover:border-purple-400/60 hover:text-purple-200 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)]",
    skills: ["Telegram Bot Development", "Server-side Workflows", "API Integration"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
    badgeColor: "bg-cyan-500/15 border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-400/60 hover:text-cyan-200 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)]",
    skills: ["Linux / Ubuntu", "Hosting Setup", "VPS", "Railway", "Environment Configuration"],
  },
  {
    title: "Core Competencies",
    icon: Star,
    color: "from-amber-500/20 to-amber-600/20 border-amber-500/30",
    badgeColor: "bg-amber-500/15 border-amber-400/30 text-amber-300 hover:bg-amber-500/30 hover:border-amber-400/60 hover:text-amber-200 hover:shadow-[0_0_12px_rgba(245,158,11,0.4)]",
    skills: ["Debugging", "Automation Workflows", "Tool Comparison", "GitHub"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Technical Arsenal" subtitle="Technologies and tools I work with every day." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className={`glass-card p-7 rounded-3xl bg-gradient-to-br ${cat.color} relative overflow-hidden group`}
            >
              <div className="absolute -top-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <cat.icon size={120} />
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + idx * 0.06 }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border cursor-default select-none transition-all duration-200 ${cat.badgeColor}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
