import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Mail, Send, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

type FormStatus = "idle" | "sending" | "success" | "error";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:uggfystore@gmail.com",
    color: "hover:text-red-400 hover:border-red-400/40",
  },
  {
    icon: Send,
    label: "@Uggfystore",
    href: "https://t.me/Uggfystore",
    color: "hover:text-[#0088cc] hover:border-[#0088cc]/40",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/hacdark014-sudo",
    color: "hover:text-white hover:border-white/40",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    // TODO: update with your actual LinkedIn profile URL
    href: "https://www.linkedin.com/in/aman-kumar-uggfy",
    color: "hover:text-[#0a66c2] hover:border-[#0a66c2]/40",
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // If EmailJS keys are not configured, show a graceful error
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      setErrorMsg("Email service is not configured yet. Please reach out directly via the links below.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("[Contact] EmailJS send failed:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or contact directly.");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Let's Connect" subtitle="Have a project in mind or want to say hi? Drop a message below." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-glow-purple">Send a Message</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-400" />
                <h4 className="text-xl font-bold text-green-400">Message Sent!</h4>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2 rounded-xl glass text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Name *</label>
                    <input
                      name="from_name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.15)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Email *</label>
                    <input
                      name="from_email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.15)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Subject *</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.15)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.15)] transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card p-8 rounded-3xl flex-1">
              <h3 className="text-xl font-display font-bold mb-2">Find Me Online</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Reach out on any platform — I'm always open to new ideas, collaborations, and opportunities.
              </p>

              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl glass border border-white/10 text-muted-foreground transition-all duration-200 group ${link.color}`}
                  >
                    <link.icon className="w-5 h-5 shrink-0 transition-colors" />
                    <span className="font-medium transition-colors">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl text-center">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] mx-auto mb-3" />
              <p className="text-sm font-semibold text-foreground">Available for Projects</p>
              <p className="text-xs text-muted-foreground mt-1">Usually responds within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
