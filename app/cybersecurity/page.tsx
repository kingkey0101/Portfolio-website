"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import ContactModal from "@/app/components/ContactModal";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { cyberCertifications } from "@/lib/content";

const CybersecurityPage = () => {
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

  const securitySkills = [
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
    {
      name: "Networking",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Ccircle cx='64' cy='24' r='12' fill='%2366D9EF'/%3E%3Ccircle cx='24' cy='64' r='12' fill='%2366D9EF'/%3E%3Ccircle cx='104' cy='64' r='12' fill='%2366D9EF'/%3E%3Ccircle cx='64' cy='104' r='12' fill='%2366D9EF'/%3E%3Cpath stroke='%2366D9EF' stroke-width='3' d='M64 36v28M36 64h56M52 88l24-24M76 88l-24-24' fill='none'/%3E%3C/svg%3E",
    },
    {
      name: "Wireshark",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Ccircle cx='64' cy='64' r='58' fill='%2386C5DA'/%3E%3Cpath fill='%23404041' d='M64 30l-28 40c-2 3-2 6 0 8l12 14c8-12 16-24 24-36l20 36 8-10c2-2 2-5 0-8L64 30z'/%3E%3Cpath fill='%23fff' d='M64 35l-24 35c-1 2-1 4 0 6l10 12c7-11 14-21 22-32l18 32 7-9c1-2 1-4 0-6L64 35z'/%3E%3Cpath fill='%23404041' d='M36 78c-1 0-2 1-2 2v12c0 4 8 8 18 8h24c10 0 18-4 18-8V80c0-1-1-2-2-2H36z'/%3E%3C/svg%3E",
    },
    {
      name: "Security",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310B981'%3E%3Cpath d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'/%3E%3C/svg%3E",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(16,185,129,0.12),rgba(5,150,105,0.1),transparent)]"
        aria-hidden
      />

      <Navigation onOpenContact={openContact} />

      <main className="flex-1 pt-24 relative z-10">
        <section id="cybersecurity-page" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400">
                Cybersecurity Journey
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                {/* Security Icon */}
                <div className="flex justify-center">
                  <div className="relative w-80 h-80 rounded-lg overflow-hidden border-2 border-emerald-400/30 shadow-2xl shadow-emerald-500/20 bg-linear-to-br from-emerald-900/20 to-slate-950 flex items-center justify-center">
                    <svg
                      className="w-48 h-48 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bio & Skills */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-emerald-400">
                      Security & Systems
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Building expertise in cybersecurity through hands-on labs,
                      professional certifications, and practical training.
                      Focused on network security, incident response, and
                      security fundamentals to complement my development skills.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                      Security Tools & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {securitySkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group relative flex items-center justify-center w-16 h-16 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/70 transition"
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

              {/* Why Cybersecurity */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 space-y-4 mb-12">
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">
                  Why Cybersecurity?
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  As a developer, I've come to understand that building secure
                  applications is just as important as building functional ones.
                  My cybersecurity training complements my development skills,
                  allowing me to write more secure code, understand common
                  vulnerabilities, and implement security best practices from
                  the ground up.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Through platforms like TryHackMe, OverTheWire, and formal
                  certifications from IBM and Cisco, I'm building a strong
                  foundation in network security, incident response, and system
                  administration — skills that make me a more well‑rounded and
                  security‑conscious developer.
                </p>
              </div>

              {/* Certifications & Training */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-emerald-400 mb-6">
                  Cybersecurity Training & Labs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cyberCertifications.map((cert) => (
                    <div
                      key={`${cert.title}-${cert.issuer}`}
                      className="group bg-slate-950/40 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/40 hover:bg-slate-950/60 transition"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <p className="text-lg font-semibold text-white leading-snug">
                          {cert.title}
                        </p>
                        <span
                          className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${
                            cert.status === "Completed"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-amber-500/20 text-amber-300"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">
                        {cert.issuer}
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed mb-3">
                        {cert.description}
                      </p>
                      {cert.url ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition"
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

              {/* Security Skills */}
              <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                  Security & Systems Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-emerald-400">
                      Operating Systems
                    </h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Linux
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Bash scripting
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        SSH / SSH Keys
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-emerald-400">
                      Security Tools
                    </h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        UFW / Fail2Ban
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Wireshark (basic)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Nmap (basic)
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-emerald-400">
                      Networking
                    </h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        TCP/IP, DNS, DHCP
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Subnetting
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Network troubleshooting
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-emerald-400">
                      Security Concepts
                    </h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        SIEM Basics
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Incident Response
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Security frameworks
                      </li>
                    </ul>
                  </div>
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
            className="fixed bottom-6 right-6 z-[3000] max-w-sm rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 shadow-xl shadow-emerald-500/20"
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

export default CybersecurityPage;
