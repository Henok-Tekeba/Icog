import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    area: "Bioinformatics",
    description:
      "AI-powered analysis of biological data in partnership with Biomind LLC for drug discovery and genomic research.",
    applications: ["Genomic analysis", "Drug discovery", "Protein structure prediction"],
  },
  {
    area: "Education & Training",
    description:
      "AI tutoring systems and educational technology to help leapfrog Africa into the future of learning.",
    applications: ["AI tutoring", "Adaptive learning", "Skills assessment"],
  },
  {
    area: "Government & Development",
    description:
      "Technology solutions for Ethiopian government and development organizations including JICA partnerships.",
    applications: ["E-governance", "Development analytics", "Public services"],
  },
  {
    area: "Research Collaboration",
    description:
      "International AI research partnerships with universities and organizations worldwide.",
    applications: ["Joint research", "Technology transfer", "Academic collaboration"],
  },
  {
    area: "Robotics & Automation",
    description: "Cognitive robotics solutions for industrial and service applications.",
    applications: ["Industrial automation", "Service robots", "Autonomous systems"],
  },
  {
    area: "AGI Research",
    description:
      "Cutting-edge artificial general intelligence research through the OpenCog Foundation collaboration.",
    applications: ["Cognitive architectures", "Reasoning systems", "Knowledge graphs"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">Solutions</h1>
            <p className="text-lg text-muted-foreground">
              AI solutions across industries, from bioinformatics to education and beyond.
            </p>
          </motion.div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.area}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-border pb-12 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-light mb-4">{solution.area}</h3>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {solution.applications.map((app) => (
                        <span key={app} className="text-xs border border-border px-3 py-1">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" className="group p-0 shrink-0">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;

