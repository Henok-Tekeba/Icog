import { motion } from "framer-motion";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const leadership = [
  { name: "Getnet Aseffa", role: "CEO" },
  { name: "Dr. Ben Goertzel", role: "Chief Scientific Advisor" },
  { name: "David Hart", role: "Chief Information Officer" },
  { name: "Sander Olsen", role: "Strategic Advisor" },
];

const partners = [
  "Novamente LLC",
  "Biomind LLC",
  "Hong Kong Polytechnic University",
  "OpenCog Foundation",
  "Humanity+",
  "US Embassy in Addis Ababa",
  "Japan International Cooperation Agency (JICA)",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extralight mb-12 text-center">About</h1>

            <div className="space-y-12">
              <section>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  iCog Labs is a research and development company based in Addis Ababa, Ethiopia, collaborating with
                  international AI research groups and serving customers around the world. We are core contributors to
                  the OpenCog open source AI platform and utilize OpenCog within our projects as appropriate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To advance science and technology for the good of all humanity, with a special focus on advanced AI
                  and on the use of cutting-edge technology to help leapfrog Africa into the future.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Core Expertise</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="border-l border-border pl-4">Machine learning based data analysis</li>
                  <li className="border-l border-border pl-4">Computational linguistics</li>
                  <li className="border-l border-border pl-4">Computer vision</li>
                  <li className="border-l border-border pl-4">Mobile robots and cognitive robotics</li>
                  <li className="border-l border-border pl-4">
                    Cognitive architectures and artificial general intelligence
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-6">Leadership</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {leadership.map((person, index) => (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border border-border p-6"
                    >
                      <h3 className="text-lg font-light">{person.name}</h3>
                      <p className="text-muted-foreground text-sm">{person.role}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-6">Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {partners.map((partner, index) => (
                    <motion.div
                      key={partner}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="text-muted-foreground border-l border-border pl-4"
                    >
                      {partner}
                    </motion.div>
                  ))}
                </div>
              </section>

              <section className="border-t border-border pt-12">
                <h2 className="text-2xl font-light mb-4">Location</h2>
                <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

