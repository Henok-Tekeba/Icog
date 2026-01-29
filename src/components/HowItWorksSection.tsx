import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description: "Deep dive into your challenges. We map the landscape of possibilities where AI transforms your trajectory.",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Architecting Intelligence",
    description: "Custom blueprints leveraging OpenCog and cognitive systems. Every solution is a unique fingerprint.",
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "Building The Future",
    description: "Rigorous iteration. Relentless refinement. We craft intelligence that thinks alongside you.",
  },
  {
    number: "04",
    title: "Deploy",
    subtitle: "Launch & Evolve",
    description: "Your AI goes live. We monitor, optimize, and ensure peak performance at every moment.",
  },
];

export const HowItWorksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden">
      {/* Large background text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.015 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[25vw] font-serif italic text-foreground whitespace-nowrap">Process</span>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 max-w-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px bg-foreground" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Methodology</span>
          </div>
          <h2 className="text-5xl md:text-7xl leading-[0.9]">
            <span className="font-light text-foreground">How we</span>
            <br />
            <span className="font-serif italic text-foreground">transform</span>
            <br />
            <span className="font-light text-foreground">ideas</span>
          </h2>
        </motion.div>

        {/* Steps with vertical line */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/20">
            <motion.div style={{ height: lineHeight }} className="w-full bg-foreground/30 origin-top" />
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content side */}
                <div
                  className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24"}`}
                >
                  <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">{step.subtitle}</span>
                  <h3 className="text-4xl md:text-5xl font-light text-foreground mt-2 mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md inline-block">{step.description}</p>
                </div>

                {/* Center dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2">
                  <div className="relative">
                    <div className="w-12 h-12 border border-foreground/30 flex items-center justify-center bg-background">
                      <span className="text-sm font-light text-foreground">{step.number}</span>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute inset-0 border border-foreground/10 scale-150"
                    />
                  </div>
                </div>

                {/* Empty side for layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-40 flex items-center justify-center gap-8"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent to-border" />
          <div className="w-3 h-3 border border-foreground rotate-45" />
          <div className="w-32 h-px bg-gradient-to-l from-transparent to-border" />
        </motion.div>
      </div>
    </section>
  );
};

