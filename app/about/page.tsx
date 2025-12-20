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
    "JavaScript",
    "TailwindCSS",
    "GitHub",
    "Git",
    "Firebase",
  ];

  const education: Array<{
    title: string;
    institution: string;
    date: string;
    url?: string;
  }> = [
    {
      title: "Frontend Developer Bootcamp",
      institution: "David Brag / FES Institute",
      date: "2025",
      url: "/cert.pdf",
    },
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
              <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
                More about Me
              </h1>

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
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">
                      Frontend Developer
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Frontend developer focused on building fast, intuitive,
                      and accessible web experiences. I work with React and
                      Next.js to turn designs into clean, modern interfaces, and
                      I’m committed to writing maintainable code and
                      continuously leveling up my craft.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                      Core Skills
                    </h3>
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
                <h2 className="text-2xl font-bold text-blue-400 mb-4">
                  My Journey
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  I spent over a decade as a chef before pursuing my
                  long‑standing passion for coding. That background taught me
                  discipline, timing, and an obsession with detail — all of
                  which now shape how I build clean, intuitive interfaces.
                  Earning my frontend bootcamp certification only deepened my
                  commitment to keep learning and growing in the field
                </p>
                <p className="text-slate-300 leading-relaxed">
                  When I’m not coding, I’m studying Cracking the Coding
                  Interview and Eloquent JavaScript to sharpen my fundamentals —
                  or smoking brisket. I’m also preparing to pursue a bachelor’s
                  degree in computer science to continue growing as an engineer.
                </p>
              </div>
              {/* Education */}
              <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                  Education & Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {education.length > 0 ? (
                    education.map((item) => (
                      <div
                        key={`${item.title}-${item.institution}-${item.date}`}
                        className="group bg-slate-950/40 border border-slate-800 rounded-xl p-6 flex items-start justify-between hover:border-blue-500/40 hover:bg-slate-950/60 transition"
                      >
                        <div className="space-y-1">
                          <p className="text-lg font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="text-slate-400">{item.institution}</p>
                          <p className="text-slate-500">
                            {item.date}
                          </p>
                        </div>
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline ml-6 whitespace-nowrap"
                          >
                            View
                          </a>
                        ) : null}
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-400">
                      Add your education and certificates here.
                    </p>
                  )}
                </div>
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
