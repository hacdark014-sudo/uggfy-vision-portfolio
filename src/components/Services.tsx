import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Bot, Cloud, Blocks, LayoutDashboard, Settings } from "lucide-react";

const services = [
  { icon: Bot, title: "Telegram Bots", desc: "Custom bots with advanced features, API integrations, and database handling." },
  { icon: Blocks, title: "API Integration", desc: "Connecting distinct services securely to automate data flow." },
  { icon: Cloud, title: "Hosting Setup", desc: "Deploying applications on VPS, Railway, and configuring environments." },
  { icon: LayoutDashboard, title: "Basic Dashboards", desc: "Creating interfaces to manage systems, view stats, and control bots." },
  { icon: Settings, title: "Automation Tools", desc: "Writing scripts to eliminate manual tasks and optimize workflows." },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="What I Can Build" subtitle="Freelance services and technical capabilities." />
        
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] text-center group hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svc.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
