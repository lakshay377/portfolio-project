import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Available for work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I build <span className="text-gradient">digital experiences</span> that matter.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Hi, I'm Lakshay. A Full-Stack Developer passionate about creating intuitive, scalable, and beautiful web applications.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="projects" smooth={true} duration={500} offset={-50}>
              <Button size="lg" className="rounded-full px-8 text-base bg-white text-black hover:bg-gray-200">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-white/20 hover:bg-white/10">
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:lakshaybhati377@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card p-2 rotate-3 hover:rotate-0 transition-transform duration-500">
            {/* 
              Programmer coding setup workspace dark mode
            */}
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
              alt="Coding Setup" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-card p-4 rounded-xl border border-white/10 shadow-xl z-20"
          >
            <span className="text-4xl">🚀</span>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-card p-4 rounded-xl border border-white/10 shadow-xl z-20"
          >
            <span className="text-4xl">⚡</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
