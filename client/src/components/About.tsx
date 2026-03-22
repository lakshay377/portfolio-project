import { motion } from "framer-motion";
import { Code, Server, Database, Layout } from "lucide-react";

const features = [
  {
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    title: "Frontend Development",
    description: "Building responsive, pixel-perfect user interfaces with React, Tailwind, and modern CSS."
  },
  {
    icon: <Server className="w-6 h-6 text-purple-400" />,
    title: "Backend Development",
    description: "Creating robust APIs and server-side logic using Node.js, Express, and scalable architectures."
  },
  {
    icon: <Database className="w-6 h-6 text-pink-400" />,
    title: "Database Design",
    description: "Designing efficient data schemas and managing interactions with MongoDB and MySQL."
  },
  {
    icon: <Code className="w-6 h-6 text-green-400" />,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code that follows best practices and industry standards."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
           I'm Lakshay — a MERN stack developer who just graduated and is genuinely excited to write code that solves real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
