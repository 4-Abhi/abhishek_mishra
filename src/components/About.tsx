import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "4+ Years Experience",
    description: "Building production-ready web applications",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Translating designs into pixel-perfect code",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with cross-functional teams",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-glow-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a{" "}
                <span className="text-foreground font-medium">
                  Software Engineer
                </span>{" "}
                based in Delhi, India, with over 4 years of hands-on experience
                building scalable, user-centric web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in the{" "}
                <span className="text-primary font-medium">
                  React ecosystem
                </span>
                , with expertise in modern frameworks like Next.js, Remix, and
                TanStack Start. I'm passionate about transforming UI/UX designs
                into responsive, performant code using Tailwind CSS and Shadcn
                UI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring new technologies,
                contributing to open-source projects, or optimizing applications
                for better performance and user experience.
              </p>
            </motion.div>

            {/* Right - Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
