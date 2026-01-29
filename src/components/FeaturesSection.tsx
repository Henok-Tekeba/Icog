import { motion } from "framer-motion";
import { Bot, Brain, Code, Eye, Lightbulb, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Advanced machine learning solutions for data analysis, pattern recognition, and predictive modeling.",
    number: "01",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image and video analysis systems for object detection, recognition, and scene understanding.",
    number: "02",
  },
  {
    icon: MessageSquare,
    title: "Computational Linguistics",
    description: "Natural language processing for text analysis, translation, and language understanding.",
    number: "03",
  },
  {
    icon: Bot,
    title: "Cognitive Robotics",
    description: "Intelligent robotic systems that perceive, learn, and adapt to complex environments.",
    number: "04",
  },
  {
    icon: Code,
    title: "OpenCog Platform",
    description: "Core contributors to the OpenCog open-source AGI framework for advanced cognitive architectures.",
    number: "05",
  },
  {
    icon: Lightbulb,
    title: "AGI Research",
    description: "Pioneering research in artificial general intelligence for beneficial, human-aligned AI systems.",
    number: "06",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-40 relative overflow-hidden" id="expertise">
      {/* Background number */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <span className="text-[40vw] font-light text-foreground leading-none">06</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px bg-foreground" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl leading-[0.9] max-w-3xl">
            <span className="font-light text-foreground">What we</span>
            <br />
            <span className="font-serif italic text-foreground">specialize</span>
            <span className="font-light text-foreground"> in</span>
          </h2>
        </motion.div>

        {/* Features Grid - Asymmetric */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background p-8 lg:p-12 relative"
            >
              {/* Number */}
              <span className="absolute top-8 right-8 text-xs text-muted-foreground/30 tracking-wider">
                {feature.number}
              </span>

              {/* Icon */}
              <div className="mb-8 relative">
                <div className="w-16 h-16 border border-border flex items-center justify-center group-hover:border-foreground transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                </div>
                <div className="absolute inset-0 w-16 h-16 border border-foreground scale-110 opacity-0 group-hover:opacity-20 transition-all duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-light text-foreground mb-4 group-hover:tracking-wide transition-all duration-500">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

