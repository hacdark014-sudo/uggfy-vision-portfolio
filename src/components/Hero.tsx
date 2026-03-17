import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/use-typewriter";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const typingText = useTypewriter([
    "Student Developer",
    "Automation Builder",
    "Cloud & Backend Enthusiast"
  ], 80, 40, 2000);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 w-fit mx-auto lg:mx-0">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary-foreground tracking-wider">Hello, World!</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
              I'm <span className="text-glow text-white">Aman Kumar</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-muted-foreground mt-2 block h-[1.2em]">
                {typingText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building smart tools, bots, and web systems. Turning coffee into code and ideas into reality under the brand <strong className="text-secondary text-glow-purple">UGGFY.VISION</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4">
              <a 
                href="#projects"
                className="px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 rounded-xl font-bold glass hover:bg-white/10 hover:border-secondary/50 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[80px]" style={{ animation: "blob-float-3 8s ease-in-out infinite" }}></div>
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border-2 border-white/10 p-2 glass overflow-hidden neon-border">
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-avatar.png`} 
                alt="Aman Kumar Avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 glass px-4 py-3 rounded-xl border-primary/30 shadow-lg flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
              <span className="font-mono text-sm font-bold">Open to Work</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
