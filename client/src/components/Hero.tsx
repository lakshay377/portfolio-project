import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Available for work
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I turn <span className="text-gradient">ideas into working</span>{" "}
            websites.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Hi, I'm Lakshay. I write code, break things, fix them, and somehow end up with something cool.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="projects" smooth={true} duration={500} offset={-50}>
              <Button
                size="lg"
                className="rounded-full px-8 text-base bg-white text-black hover:bg-gray-200"
              >
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base border-white/20 hover:bg-white/10"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/lakshay377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshay-bhati-377/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:lakshaybhati377@gmail.com"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Glow ring behind image */}
          <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-3xl -z-10" />

          {/* Image container */}
          <div className="relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
            {/* Decorative border ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 via-blue-500/20 to-transparent p-[2px] rounded-2xl">
              <div className="w-full h-full rounded-2xl bg-background" />
            </div>

            <img
              src="/bholu_passport.jpg"
              alt="Lakshay"
              className="relative z-10 w-72 h-80 object-cover object-top rounded-2xl shadow-2xl border border-white/10"
            />
          </div>

          {/* Floating emoji — top right */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-card p-4 rounded-xl border border-white/10 shadow-xl z-20"
          >
            <span className="text-4xl">🚀</span>
          </motion.div>

          {/* Floating emoji — bottom left */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl border border-white/10 shadow-xl z-20"
          >
            <span className="text-4xl">⚡</span>
          </motion.div>

          {/* Subtle stat badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-4 right-0 bg-card px-4 py-2 rounded-xl border border-white/10 shadow-xl z-20 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Open to opportunities</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}