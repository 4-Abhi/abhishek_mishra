import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Remix Run", "TanStack Start", "React Router", "Redux"]
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "Shadcn UI", "HTML5", "CSS3", "Responsive Design", "Figma-to-Code"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs"]
  },
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "NPM", "Postman", "VS Code", "Vercel"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-glow-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-lg font-display font-semibold text-primary mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.1 * categoryIndex + 0.05 * skillIndex }}
                      className="px-3 py-1.5 bg-secondary rounded-lg text-sm text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default skill-glow"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
