import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    period: "2021 – Present",
    role: "Frontend Developer",
    company: "Livlong 365",
    location: "New Delhi",
    highlights: [
      "Developed high-performance web applications using React.js, Next.js, and TanStack Start, improving page load speeds by 30%",
      "Implemented responsive user interfaces using Tailwind CSS and Shadcn UI",
      "Optimized application performance using modern React best practices (lazy loading, memoization)",
      "Collaborated with backend teams to integrate RESTful APIs",
      "Translated complex Figma designs into clean, maintainable components"
    ]
  },
  {
    period: "Aug 2021 – Oct 2021",
    role: "Jr. Fullstack Developer",
    company: "McSam",
    location: "Noida",
    highlights: [
      "Designed and implemented RESTful APIs using Node.js and Express.js",
      "Maintained full-stack web applications using the MERN stack",
      "Utilized Axios for efficient data fetching between client and server"
    ]
  },
  {
    period: "Jul 2020 – Aug 2021",
    role: "MERN Stack Developer",
    company: "YourDrop",
    location: "Remote",
    highlights: [
      "Developed full-stack web applications, handling both frontend and backend logic",
      "Implemented complex CRUD operations using MongoDB and Mongoose",
      "Ensured code quality through modular architecture and version control"
    ]
  }
];

const education = [
  {
    period: "2021 – 2023",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Monad University",
    location: "Hapur"
  },
  {
    period: "2016 – 2018",
    degree: "Diploma in Computer Engineering",
    institution: "GNDIT (DSUE)",
    location: "New Delhi",
    gpa: "GPA: 7.5/10"
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-glow-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-glow-secondary to-primary/20 hidden md:block" />

            {workExperience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute top-0 w-4 h-4 bg-primary rounded-full glow-effect items-center justify-center"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: '-8px',
                  }}
                >
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>

                <div className="glass-card p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-primary font-medium">{job.period}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">{job.role}</h3>
                  <p className="text-muted-foreground mb-4">{job.company} • {job.location}</p>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display text-center mb-10">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-glow-secondary/10 rounded-lg">
                      <GraduationCap className="w-4 h-4 text-glow-secondary" />
                    </div>
                    <span className="text-sm text-glow-secondary font-medium">{edu.period}</span>
                  </div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}, {edu.location}</p>
                  {edu.gpa && <p className="text-sm text-primary mt-2">{edu.gpa}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
