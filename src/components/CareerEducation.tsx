import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Target, ChevronRight } from "lucide-react";

const goals = [
  "Software/Backend Developer",
  "DevOps/Cloud Engineer",
  "Cybersecurity-oriented Developer",
  "Automation/SaaS Builder"
];

export function CareerEducation() {
  return (
    <section id="career" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Path & Trajectory" subtitle="Where I come from and where I'm heading." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <GraduationCap size={100} />
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-4 rounded-xl border-primary/30">
                  <div className="font-bold text-primary mb-1">Current</div>
                  <h4 className="font-bold text-lg">Class 12 PCM</h4>
                  <p className="text-sm text-muted-foreground mt-1">Focusing on Physics, Chemistry, and Mathematics while building side projects.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-4 rounded-xl border-secondary/30">
                  <div className="font-bold text-secondary mb-1">Future</div>
                  <h4 className="font-bold text-lg">B.Tech Degree</h4>
                  <p className="text-sm text-muted-foreground mt-1">Targeting Computer Science, Cybersecurity, or Artificial Intelligence.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career Goals */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Target size={100} />
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Target size={20} />
              </div>
              <h3 className="text-2xl font-display font-bold">Career Goals</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {goals.map((goal, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 glass p-4 rounded-xl"
                >
                  <ChevronRight className="text-primary w-5 h-5" />
                  <span className="font-medium">{goal}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10">
              <h4 className="text-sm font-mono text-muted-foreground mb-2 uppercase tracking-widest">Master Plan</h4>
              <p className="font-bold text-lg text-glow flex flex-wrap items-center gap-2">
                CSE <ArrowIcon /> Backend/Cloud <ArrowIcon /> Cybersecurity
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return <ChevronRight className="w-4 h-4 text-muted-foreground inline" />;
}
