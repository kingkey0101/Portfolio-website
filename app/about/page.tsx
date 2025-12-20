"use client";

import Image from "next/image";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
    "Node.js",
    "Express",
    "Git",
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(59,130,246,0.12),rgba(14,165,233,0.1),transparent)]"
        aria-hidden
      />

      <Navigation />

      <main className="flex-1 pt-24 relative z-10">
        <section id="about-page" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">More about Me</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                {/* Photo */}
                <div className="flex justify-center">
                  <div className="relative w-80 h-80 rounded-lg overflow-hidden border-2 border-blue-400/30 shadow-2xl shadow-blue-500/20">
                    <Image
                      src="/skinstric.png"
                      alt="Keylan - Frontend Developer"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bio & Skills */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">Frontend Developer</h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      I'm a passionate frontend developer dedicated to building beautiful, performant web experiences. With expertise in React and Next.js, I create modern applications that users love. I'm detail-oriented, always learning, and committed to writing clean, maintainable code.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Core Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/50 font-medium hover:bg-blue-500/30 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Extended Bio */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 space-y-4">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">My Journey</h2>
                <p className="text-slate-300 leading-relaxed">
                  I started my development journey with a passion for creating intuitive, user-friendly interfaces. Over time, I've honed my skills in modern web technologies and best practices. I'm constantly exploring new tools and frameworks to stay at the forefront of web development.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  When I'm not coding, I'm exploring new design patterns, contributing to open-source projects, or building side projects to experiment with emerging technologies. I believe in continuous learning and delivering exceptional value to every project I work on.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
