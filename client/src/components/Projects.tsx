import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and sales reporting.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with Kanban boards, real-time updates, and team features similar to Trello.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    github: "#",
    demo: "#"
  },
  {
    title: "Passport Photo Generator",
    description: "A React app that duplicates passport photos into a print-ready grid layout — just upload, arrange, and print. No backend needed.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    github: "#",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my passion for building clean, functional, and user-centric applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-white" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
