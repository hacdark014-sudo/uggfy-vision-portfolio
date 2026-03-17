import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Telegram Bot System",
    description: "A full-featured Telegram bot handling automated responses, user management, and seamless API integrations.",
    stack: ["Python", "Telegram API", "Railway"],
    github: "",
    live: ""
  },
  {
    title: "Cloud Hosting Dashboard",
    description: "A personalized VPS management and monitoring tool to track server health and deploy apps rapidly.",
    stack: ["Python", "Linux", "APIs"],
    github: "",
    live: ""
  },
  {
    title: "Automation Toolkit",
    description: "A collection of scripts designed to automate repetitive digital tasks, scraping, and data synchronization.",
    stack: ["Python", "Bash", "APIs"],
    github: "",
    live: ""
  },
  {
    title: "Web Portfolio",
    description: "This personal portfolio website, featuring a dark futuristic theme, glassmorphism, and scroll animations.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    github: "",
    live: ""
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Featured Projects" subtitle="A selection of my recent works and deployments." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl flex flex-col h-full group"
            >
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-glow transition-all">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-primary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.github ? (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground/50 cursor-default">
                    <Github size={18} /> Coming Soon
                  </span>
                )}
                {project.live ? (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-secondary transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground/50 cursor-default">
                    <ExternalLink size={18} /> Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
