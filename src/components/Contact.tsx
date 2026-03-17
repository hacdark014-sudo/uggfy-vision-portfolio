import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Mail, Send, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader title="Let's Connect" subtitle="Interested in working together or just want to say hi?" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 rounded-3xl"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-glow-purple">Ready to build something amazing?</h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto: uggfystore@gmail.com" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="w-5 h-5" /> Email Me
            </a>
            
            <a 
              href="https://t.me/UGgfyvision" 
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-[#0088cc] text-white shadow-[0_0_20px_rgba(0,136,204,0.3)] hover:shadow-[0_0_30px_rgba(0,136,204,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <Send className="w-5 h-5" /> Telegram
            </a>
            
            <a 
              href="https://github.com/hacdark014-sudo" 
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold glass hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
