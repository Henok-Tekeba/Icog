import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="w-8 h-px bg-foreground" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Collaborate</span>
            <div className="w-8 h-px bg-foreground" />
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8"
          >
            <span className="font-light text-foreground">Partner</span>
            <br />
            <span className="font-serif italic text-foreground">with us</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Join international organizations collaborating with iCog Labs to advance AI research and build cutting-edge
            technology solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="xl" className="group">
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              View Our Work
            </Button>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse-slow" />
            <span className="text-sm text-muted-foreground tracking-wide">Addis Ababa, Ethiopia</span>
            <span className="text-muted-foreground/30">•</span>
            <span className="text-sm text-muted-foreground tracking-wide">Serving Worldwide</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </section>
  );
};

