import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Code2, Cpu, Server } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Self-Learner", desc: "Always exploring new tools and languages." },
  { icon: Cpu, title: "Builder Mindset", desc: "Focused on creating practical, usable systems." },
  { icon: Server, title: "Backend Heavy", desc: "Passionate about logic, APIs, and cloud hosting." },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" subtitle="Student by education, builder by mindset." />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/30 rounded-full blur-[50px]"></div>
            <h3 className="text-2xl font-display font-bold mb-4">Aman Kumar</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a student developer passionate about automation, cloud hosting, backend tools, and digital systems. Currently pursuing my Class 12 PCM, I spend my free time architecting bots and writing scripts that make life easier.
              </p>
              <p>
                My journey into tech started with curiosity. Today, I operate under the brand <strong className="text-foreground">UGGFY.VISION</strong>, creating everything from full-featured Telegram bots to complete web systems deployed on VPS and cloud platforms.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-6 rounded-2xl ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
