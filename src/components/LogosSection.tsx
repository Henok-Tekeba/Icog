import { motion } from "framer-motion";

const partners = [
  "Novamente LLC",
  "Biomind LLC",
  "OpenCog Foundation",
  "Humanity+",
  "Hong Kong PolyU",
  "US Embassy",
  "JICA",
];

export const LogosSection = () => {
  return (
    <section className="py-24 overflow-hidden border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-8 mb-12"
        >
          <div className="w-8 h-px bg-foreground" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Trusted Partners</span>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-16 animate-marquee"
        >
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div key={`${partner}-${index}`} className="flex items-center gap-4 shrink-0">
              <span className="text-2xl font-light text-muted-foreground/40 hover:text-foreground transition-colors duration-500 whitespace-nowrap">
                {partner}
              </span>
              <div className="w-1.5 h-1.5 bg-border rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

