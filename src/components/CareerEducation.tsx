import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, BookOpen, ShieldCheck } from "lucide-react";

const roadmap = [
  {
    step: "01",
    icon: BookOpen,
    title: "Strong Foundation in CSE",
    desc: "Build rock-solid fundamentals in computer science through B.Tech CSE, mastering data structures, algorithms, networking, and programming paradigms.",
    status: "In Progress",
    statusColor: "text-green-400",
    barColor: "from-green-500 to-emerald-400",
    glowColor: "shadow-[0_0_20px_rgba(34,197,94,0.35)]",
    borderColor: "border-green-500/40",
  },
  {
    step: "02",
    icon: GraduationCap,
    title: "Backend / Cloud / DevOps Specialization",
    desc: "Deep-dive into backend architecture, cloud platforms (AWS/GCP), containerization (Docker/K8s), CI/CD pipelines, and scalable API design.",
    status: "Upcoming",
    statusColor: "text-blue-400",
    barColor: "from-blue-500 to-primary",
    glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.35)]",
    borderColor: "border-blue-500/40",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Cybersecurity & Automation Product Builder",
    desc: "Specialize in advanced cybersecurity practices, ethical hacking, and launch automation/SaaS products under the UGGFY.VISION brand.",
    status: "Future",
    statusColor: "text-purple-400",
    barColor: "from-purple-500 to-secondary",
    glowColor: "shadow-[0_0_20px_rgba(168,85,247,0.35)]",
    borderColor: "border-purple-500/40",
  },
];

const educationTimeline = [
  {
    label: "Current",
    labelColor: "text-primary",
    dotColor: "bg-primary",
    title: "Class 12 PCM — UP Board",
    desc: "Focusing on Physics, Chemistry & Mathematics while building real-world side projects in parallel.",
  },
  {
    label: "Future",
    labelColor: "text-secondary",
    dotColor: "bg-secondary",
    title: "B.Tech — CSE / Cyber / AI",
    desc: "Targeting Computer Science Engineering with a focus on Cybersecurity or Artificial Intelligence.",
  },
];

export function CareerEducation() {
  return (
    <section id="career" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Path & Trajectory" subtitle="Where I come from and where I'm heading." />

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <GraduationCap size={120} />
          </div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-2xl font-display font-bold">Education</h3>
          </div>
          <div className="space-y-6 relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
            {educationTimeline.map((item, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[1.375rem] top-1.5 w-3 h-3 rounded-full border-2 border-background ${item.dotColor} z-10`} />
                <div className={`font-bold text-sm ${item.labelColor} mb-1`}>{item.label}</div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career Roadmap */}
        <h3 className="text-2xl font-display font-bold text-center mb-10 text-muted-foreground">
          Career <span className="text-glow text-white">Roadmap</span>
        </h3>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-30 mx-[16.666%]" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`glass-card p-8 rounded-3xl border ${item.borderColor} ${item.glowColor} group hover:-translate-y-2 transition-all duration-300 relative`}
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-8">
                  <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.barColor} text-white`}>
                    STEP {item.step}
                  </span>
                </div>

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.barColor} bg-opacity-20 flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <div className={`text-xs font-semibold font-mono mb-2 ${item.statusColor}`}>
                  ● {item.status}
                </div>

                <h4 className="text-xl font-display font-bold mb-3 leading-snug">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
