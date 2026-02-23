"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { cyberCertifications } from "@/lib/content";

const cardMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const Cybersecurity = () => {
  return (
    <section id="cybersecurity" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="Security"
          title="Cybersecurity Training & Labs"
          description="Building security expertise through certifications, hands-on labs, and practical training."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cyberCertifications.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${cert.issuer}`}
              {...cardMotion}
              transition={{ ...cardMotion.transition, delay: 0.05 * index }}
              className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-slate-950/30 overflow-hidden group hover:border-emerald-500/40 transition-all"
            >
              <div
                className="absolute inset-0 opacity-30 bg-[radial-gradient(90%_60%_at_20%_20%,rgba(16,185,129,0.12),transparent),radial-gradient(90%_60%_at_80%_0%,rgba(5,150,105,0.1),transparent)]"
                aria-hidden
              />
              
              <div className="relative space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <span
                    className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${
                      cert.status === "Completed"
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-amber-500/20 text-amber-300"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-cyan-400">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4"
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
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cybersecurity;
