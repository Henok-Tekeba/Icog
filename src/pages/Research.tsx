import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const researchAreas = [
  {
    title: "Artificial General Intelligence",
    description:
      "Core research into cognitive architectures and systems capable of general-purpose reasoning, learning, and problem-solving.",
  },
  {
    title: "OpenCog Framework",
    description:
      "Development and enhancement of the OpenCog open-source AGI platform, including AtomSpace knowledge representation and cognitive synergy.",
  },
  {
    title: "Cognitive Robotics",
    description:
      "Integration of AI systems with robotic platforms for autonomous navigation, manipulation, and human-robot interaction.",
  },
  {
    title: "Natural Language Understanding",
    description:
      "Advanced computational linguistics research for deep semantic understanding and multilingual processing.",
  },
  {
    title: "Machine Learning",
    description:
      "Novel approaches to supervised, unsupervised, and reinforcement learning for real-world applications.",
  },
  {
    title: "Computer Vision",
    description: "Visual perception systems for object recognition, scene understanding, and visual reasoning.",
  },
];

const partners = [
  "Novamente LLC",
  "Biomind LLC",
  "Hong Kong Polytechnic University",
  "OpenCog Foundation",
  "Humanity+",
];

const Research = () => {
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
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">Research</h1>
            <p className="text-lg text-muted-foreground">
              Advancing the frontiers of AI through fundamental research and international collaboration.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-light mb-8"
            >
              Research Areas
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 mb-20">
              {researchAreas.map((area, index) => (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="border border-border p-6 hover:border-foreground/30 transition-colors"
                >
                  <h3 className="text-xl font-light mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-light mb-8">Research Partners</h2>
              <div className="flex flex-wrap gap-4">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="text-sm border border-border px-4 py-2 text-muted-foreground"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-16 border-t border-border pt-12"
            >
              <h2 className="text-2xl font-light mb-4">OpenCog</h2>
              <p className="text-muted-foreground mb-6">
                iCog Labs is a core contributor to the OpenCog open-source artificial general intelligence platform.
                We actively develop and utilize OpenCog within our projects, advancing the goal of beneficial AGI.
              </p>
              <Button variant="ghost" className="group p-0">
                Learn about OpenCog
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Research;

