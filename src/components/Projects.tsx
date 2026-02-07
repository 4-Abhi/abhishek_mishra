import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, featuring product catalog, cart management, and payment integration.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare Dashboard",
    description: "Interactive dashboard for healthcare professionals to monitor patient data and analytics in real-time.",
    tags: ["React", "Redux", "Recharts", "Node.js"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
    tags: ["React", "TanStack Query", "MongoDB", "Socket.io"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-secondary/30">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-glow-secondary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sample projects showcasing my technical skills. Replace these with your actual work!
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-glow-secondary/20 flex items-center justify-center">
                    <Folder className="w-16 h-16 text-primary/50" />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-primary rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5 text-primary-foreground" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-secondary rounded-full hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5 text-foreground" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
