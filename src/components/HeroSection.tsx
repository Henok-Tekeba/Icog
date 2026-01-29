import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/4 left-[10%] w-px h-40 bg-gradient-to-b from-transparent via-foreground/20 to-transparent"
      />
      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/3 right-[15%] w-px h-60 bg-gradient-to-b from-transparent via-foreground/20 to-transparent"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[20%] w-32 h-32 border border-border/30 rounded-full opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div style={{ opacity }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-px bg-foreground" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                OpenCog Core Contributors
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-8"
            >
              <span className="font-light text-foreground">Advancing</span>
              <br />
              <span className="font-serif italic text-foreground">AI for</span>
              <br />
              <span className="font-light text-foreground">humanity</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-muted-foreground max-w-md text-lg leading-relaxed mb-12"
            >
              An AI research company based in Addis Ababa, Ethiopia, specializing in machine learning, cognitive
              robotics, and artificial general intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" className="group">
                Explore Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="minimal" size="lg">
                View Research
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Concentric circles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 30 + i * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border border-border/20 rounded-full"
                  style={{
                    inset: `${i * 15}%`,
                  }}
                />
              ))}

              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 border border-foreground/50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif italic text-4xl text-foreground">iC</span>
                  </div>
                </div>
              </div>

              {/* Floating dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute w-1.5 h-1.5 bg-foreground rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${10 + (i % 3) * 30}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 pt-16 border-t border-border/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { value: "10+", label: "Years of Research" },
              { value: "7+", label: "Global Partners" },
              { value: "OpenCog", label: "Core Contributors" },
              { value: "AGI", label: "Focus Area" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-light text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
};

