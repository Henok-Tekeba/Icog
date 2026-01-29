import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Machine Learning & Data Analysis",
    description:
      "Custom machine learning solutions for extracting insights from complex datasets and enabling data-driven decision making.",
    features: ["Predictive modeling", "Pattern recognition", "Data mining"],
  },
  {
    name: "Computer Vision",
    description:
      "Advanced image and video analysis systems for object detection, recognition, and scene understanding.",
    features: ["Object detection", "Image classification", "Video analytics"],
  },
  {
    name: "Computational Linguistics",
    description:
      "Natural language processing solutions for text analysis, translation, and language understanding.",
    features: ["Text analysis", "Language translation", "Speech recognition"],
  },
  {
    name: "Cognitive Robotics",
    description:
      "Intelligent robotic systems that can perceive, learn, and adapt to complex environments.",
    features: ["Mobile robots", "Autonomous navigation", "Human-robot interaction"],
  },
  {
    name: "OpenCog Integration",
    description:
      "Leveraging the OpenCog open-source AGI platform for advanced cognitive architectures and reasoning systems.",
    features: ["AGI frameworks", "Knowledge representation", "Cognitive reasoning"],
  },
  {
    name: "Custom AI Solutions",
    description:
      "Tailored artificial intelligence solutions designed to meet your specific business and research needs.",
    features: ["Consultation", "Custom development", "Integration support"],
  },
];

const Products = () => {
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
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">Services</h1>
            <p className="text-lg text-muted-foreground">
              AI research and development services for customers around the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border p-8 hover:border-foreground/30 transition-colors"
              >
                <h3 className="text-xl font-light mb-4">{service.name}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground">
                      — {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group p-0">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

