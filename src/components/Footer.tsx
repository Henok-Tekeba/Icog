import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = {
  Expertise: ["Machine Learning", "Computer Vision", "Cognitive Robotics", "OpenCog"],
  Resources: ["Documentation", "Research", "Publications", "OpenCog Foundation"],
  Company: ["About", "Careers", "Partners", "Contact"],
  Legal: ["Privacy", "Terms", "Security"],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/30">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="group inline-flex items-center gap-3 mb-8">
              <div className="relative w-10 h-10 border border-foreground flex items-center justify-center overflow-hidden">
                <span className="font-serif italic text-xl text-foreground">iC</span>
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-foreground">iCog Labs</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Advancing science and technology for the good of all humanity, with a special focus on advanced AI.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse-slow" />
              <span className="text-muted-foreground">Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h4 className="text-xs tracking-[0.2em] uppercase text-foreground mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 inline-block relative group"
                      >
                        {link}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-muted-foreground tracking-wide">© 2024 iCog Labs. All rights reserved.</p>
            <div className="flex items-center gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          viewport={{ once: true }}
          className="text-[15vw] font-serif italic text-foreground leading-none text-center translate-y-1/3"
        >
          iCog Labs
        </motion.div>
      </div>
    </footer>
  );
};

