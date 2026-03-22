import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiTailwindcss, SiGit,SiPython,SiBootstrap } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />, level: 95 },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 92 },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" />, level: 90 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 95 },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: 80 },
  { name: "Express", icon: <SiExpress className="text-white" />, level: 85 },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 75 },
  { name: "Git", icon: <SiGit className="text-[#F05032]" />, level: 88 },
  { name: "Python",icon: <SiPython className="text-[#3776AB]" />, level: 50 },
  { name: "Bootstrap", icon: <SiBootstrap className="text-[#563D7C]" />, level: 80 }

];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            The technologies I've been learning, building with, and breaking things in.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 flex flex-col items-center hover:bg-card hover:border-primary/50 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold mb-3">{skill.name}</h3>
              
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
