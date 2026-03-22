import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Maharshi Dayanand University",
    location: "Rohtak, Haryana",
    duration: "2024 – Present",
    status: "Pursuing",
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
    accent: "blue",
    highlights:[],
    // highlights: [
    //   "Specialization in Software Engineering",
    //   "Relevant coursework placeholder",
    //   "Project or achievement placeholder",
    // ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Maharshi Dayanand University",
    location: "Rohtak, Haryana",
    duration: "2021 – 2024",
    status: "Completed",
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    accent: "purple",
    highlights:[],
    // highlights: [
    //   "GPA / Percentage placeholder",
    //   "Relevant coursework placeholder",
    //   "Achievement or project placeholder",
    // ],
  },
];

const accentMap = {
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    dot: "bg-blue-400",
    glow: "group-hover:border-blue-500/50",
    icon: "bg-blue-500/10",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    dot: "bg-purple-400",
    glow: "group-hover:border-purple-500/50",
    icon: "bg-purple-500/10",
  },
};

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic journey that laid the foundation for my passion in
            technology and software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

          <div className="space-y-8">
            {educationData.map((edu, index) => {
              const accent = accentMap[edu.accent];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative md:pl-20 group"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 top-6 w-5 h-5 rounded-full border-4 border-background ${accent.dot} hidden md:block z-10 group-hover:scale-125 transition-transform`}
                  />

                  {/* Card */}
                  <div
                    className={`bg-card border border-white/5 ${accent.glow} rounded-2xl p-6 transition-colors`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-lg ${accent.icon} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        {edu.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${accent.badge}`}
                          >
                            {edu.status}
                          </span>
                        </div>

                        <p className="text-muted-foreground font-medium mb-3">
                          {edu.institution}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 shrink-0" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 shrink-0" />
                            {edu.location}
                          </span>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-1.5">
                          {edu.highlights.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${accent.dot}`}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}