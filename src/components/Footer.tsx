import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Download } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm currently open to new opportunities. Whether you have a project in mind 
              or just want to connect, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
                asChild
              >
                <a href="mailto:abhi018277@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
                asChild
              >
                <a href="/Abhishek_Mishra_Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>© {currentYear} Abhishek Mishra. Built with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>and React</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/abhishek-mishra-6119bb17b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:abhi018277@gmail.com"
                className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Location */}
            <p className="text-sm text-muted-foreground">
              📍 Delhi, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
