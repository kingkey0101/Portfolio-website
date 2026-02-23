"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import ContactModal from "@/app/components/ContactModal";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

const AboutPage = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const toastTimer = useRef<NodeJS.Timeout | null>(null);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);
  const notify = (type: "success" | "error", message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = setTimeout(() => setToast(null), 4000);
  };
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Ctext x='64' y='90' font-size='70' font-weight='bold' font-family='Arial, sans-serif' text-anchor='middle' fill='white'%3Eex%3C/text%3E%3C/svg%3E",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "GitHub",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Kali Linux",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect fill='%23f2f2f2' width='128' height='128' rx='8'/%3E%3Cpath fill='%23557C94' d='M50 25c-2 0-3 1-4 2l-8 12c-1 1-1 3 0 4l8 12c1 1 2 2 4 2h28c2 0 3-1 4-2l8-12c1-1 1-3 0-4l-8-12c-1-1-2-2-4-2H50zm14 5c3 0 6 1 8 3 3 2 5 5 6 9 0 3-1 6-3 8-2 3-5 5-9 6v-8c2 0 3-1 4-2 1-1 2-3 2-4 0-2-1-3-2-4-1-1-2-2-4-2s-3 1-4 2c-1 1-2 2-2 4h-8c0-4 2-7 5-9 2-2 5-3 7-3z'/%3E%3Crect fill='%23000' y='85' width='128' height='43' rx='0 0 8 8'/%3E%3Ctext x='64' y='110' font-family='Arial,sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='%23fff'%3EKALI%3C/text%3E%3C/svg%3E",
    },
    {
      name: "Ubuntu",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Ccircle cx='64' cy='64' r='50' fill='none' stroke='%23E95420' stroke-width='4'/%3E%3Ccircle cx='64' cy='20' r='10' fill='%23E95420'/%3E%3Ccircle cx='97' cy='88' r='10' fill='%23E95420'/%3E%3Ccircle cx='31' cy='88' r='10' fill='%23E95420'/%3E%3C/svg%3E",
    },
    {
      name: "Bash",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect fill='%23D3D3D3' width='128' height='128' rx='8'/%3E%3Crect fill='%233C3C3C' x='8' y='8' width='112' height='112' rx='4'/%3E%3Ctext x='20' y='70' font-family='Courier,monospace' font-size='32' font-weight='bold' fill='%23fff'%3E$%3C/text%3E%3Crect fill='%23fff' x='42' y='55' width='12' height='20'/%3E%3C/svg%3E",
    },
    {
      name: "SSH",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect fill='%23000' width='128' height='128' rx='12'/%3E%3Ctext x='28' y='55' font-family='Arial,sans-serif' font-size='36' font-weight='bold' fill='%23fff'%3E%3E%3C/text%3E%3Crect fill='%23fff' x='52' y='35' width='24' height='4'/%3E%3Ctext x='64' y='105' font-family='Arial,sans-serif' font-size='32' font-weight='bold' text-anchor='middle' fill='%23fff'%3ESSH%3C/text%3E%3C/svg%3E",
    },
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
      url: "/certs/Frontend-Developer-Bootcamp.pdf",
    },
    {
      title: "MongoDB - CRUD Operations with Node.js",
      institution: "MongoDB University",
      date: "2026",
      url: "/certs/mongodb crud operations nodejs cert.pdf",
    },
    {
      title: "PHP Certification",
      institution: "Great Learning",
      date: "2026",
      url: "/certs/PHP-Certification.pdf",
    },
    {
      title: "WordPress",
      institution: "Simplilearn",
      date: "2026",
      url: "/certs/WordPress-Certification.pdf",
    },
  ];

  const cyberEducation: Array<{
    title: string;
    institution: string;
    status: string;
    url?: string;
  }> = [
    {
      title: "IBM Cybersecurity Analyst Professional Certificate",
      institution: "IBM via Coursera",
      status: "In Progress",
    },
    {
      title: "Cisco Introduction to Cybersecurity",
      institution: "Cisco Networking Academy",
      status: "Completed",
    },
    {
      title: "Cisco Networking Basics",
      institution: "Cisco Networking Academy",
      status: "Completed",
    },
    {
      title: "TryHackMe Pre‑Security",
      institution: "TryHackMe",
      status: "Completed",
    },
    {
      title: "OverTheWire Bandit",
      institution: "OverTheWire",
      status: "Completed",
    },
    {
      title: "Configure and Test Basic Network Connectivity",
      institution: "Coursera",
      status: "Completed",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(59,130,246,0.12),rgba(14,165,233,0.1),transparent)]"
        aria-hidden
      />

      <Navigation onOpenContact={openContact} />

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
                      src="/1.JPG"
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
                      Security‑Focused Frontend Developer
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Building fast, secure, and accessible web experiences with React and Next.js.
                      I combine modern frontend development with security best practices, bringing
                      a dual perspective from both development and cybersecurity training. Committed
                      to writing secure, maintainable code that prioritizes both user experience and
                      application safety.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                      Core Skills
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group relative flex items-center justify-center w-16 h-16 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/70 transition"
                          title={skill.name}
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain transition group-hover:scale-110"
                          />
                        </div>
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
                  commitment to keep learning and growing in the field.
                </p>
                <p className="text-slate-300 leading-relaxed">                  As I've grown as a developer, I've become increasingly passionate about
                  cybersecurity and secure coding practices. I'm actively pursuing certifications
                  from IBM and Cisco, while gaining hands‑on experience through TryHackMe,
                  OverTheWire, and networking labs. This dual focus on development and security
                  allows me to build applications that are not only fast and intuitive, but also
                  secure and resilient.
                </p>
                <p className="text-slate-300 leading-relaxed">                  When I’m not coding, I’m studying Cracking the Coding
                  Interview and Eloquent JavaScript to sharpen my fundamentals —
                  or smoking brisket. I’m also preparing to pursue a bachelor’s
                  degree in computer science to continue growing as an engineer.
                </p>
              </div>
              {/* Education */}
              <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-cyan-400">
                    Development Education & Certifications
                  </h2>
                  <Link
                    href="/education"
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                  >
                    View all →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {education.length > 0 ? (
                    education.slice(0, 2).map((item) => (
                      <div
                        key={`${item.title}-${item.institution}-${item.date}`}
                        className="group bg-slate-950/40 border border-slate-800 rounded-xl p-6 flex items-start justify-between hover:border-blue-500/40 hover:bg-slate-950/60 transition"
                      >
                        <div className="space-y-1">
                          <p className="text-lg font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="text-slate-400">{item.institution}</p>
                          <p className="text-slate-500">{item.date}</p>
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

              {/* Cybersecurity Training & Labs */}
              <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-emerald-400 mb-2">
                    Cybersecurity Training & Labs
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Building security expertise through certifications and hands-on training
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cyberEducation.map((item) => (
                    <div
                      key={`${item.title}-${item.institution}`}
                      className="group bg-slate-950/40 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/40 hover:bg-slate-950/60 transition"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <p className="text-lg font-semibold text-white leading-snug">
                          {item.title}
                        </p>
                        <span
                          className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${
                            item.status === "Completed"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-amber-500/20 text-amber-300"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{item.institution}</p>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition"
                        >
                          View Certificate
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume Downloads */}
              <div className="mt-12 bg-gradient-to-br from-blue-900/20 to-emerald-900/20 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Download My Resume
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <a
                    href="/resumes/KeylansResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-slate-950/40 border-2 border-blue-500/40 rounded-xl p-6 hover:border-blue-400 hover:bg-slate-950/60 transition-all"
                  >
                    <div className="space-y-3 text-center">
                      <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white mb-1">
                          Full‑Stack Developer
                        </p>
                        <p className="text-sm text-slate-400">
                          Frontend, Backend & Cloud Development
                        </p>
                      </div>
                      <span className="inline-block text-sm text-blue-400 group-hover:text-blue-300 font-medium">
                        Download PDF →
                      </span>
                    </div>
                  </a>

                  <a
                    href="/resumes/KeylansCybersecurityResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-slate-950/40 border-2 border-emerald-500/40 rounded-xl p-6 hover:border-emerald-400 hover:bg-slate-950/60 transition-all"
                  >
                    <div className="space-y-3 text-center">
                      <div className="w-16 h-16 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white mb-1">
                          Cybersecurity / IT Support
                        </p>
                        <p className="text-sm text-slate-400">
                          Security Analysis & System Administration
                        </p>
                      </div>
                      <span className="inline-block text-sm text-emerald-400 group-hover:text-emerald-300 font-medium">
                        Download PDF →
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer onOpenContact={openContact} />

      <ContactModal
        open={contactOpen}
        onClose={closeContact}
        onNotify={notify}
      />

      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-3000 max-w-sm rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 shadow-xl shadow-blue-500/20"
          >
            <div className="flex items-start gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full mt-1.5 ${toast.type === "success" ? "bg-emerald-400" : "bg-amber-300"}`}
              />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">
                  {toast.type === "success" ? "Sent" : "Error"}
                </p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {toast.message}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;
