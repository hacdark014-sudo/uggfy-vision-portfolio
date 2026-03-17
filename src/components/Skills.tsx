import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const skills = [
  { name: "Python", level: 85 },
  { name: "Telegram Bot Dev", level: 90 },
  { name: "Automation Workflows", level: 90 },
  { name: "Debugging", level: 85 },
  { name: "Hosting/VPS/Railway", level: 85 },
  { name: "APIs & Integration", level: 80 },
  { name: "GitHub", level: 80 },
  { name: "Linux/Ubuntu", level: 75 },
  { name: "HTML/CSS", level: 70 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Technical Arsenal" subtitle="Technologies and tools I work with every day." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 rounded-2xl group"
            >
              <div className="flex justify-between items-end mb-3">
                <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{skill.name}</h4>
                <span className="font-mono text-sm text-secondary">{skill.level}%</span>
              </div>
              
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (index * 0.05) }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
