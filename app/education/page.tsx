"use client";

import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function EducationPage() {
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

  const educationItems = [
    {
      title: "Frontend Developer Bootcamp",
      institution: "David Brag / FES Institute",
      date: "2025",
      description:
        "Comprehensive full-stack JavaScript bootcamp focusing on modern frontend frameworks, responsive design, and professional development practices.",
      url: "/certs/Frontend-Developer-Bootcamp.pdf",
    },
    {
      title: "PHP Certification",
      institution: "Great Learning",
      date: "2026",
      description:
        "Server-side programming certification covering PHP fundamentals, databases, and backend web development.",
      url: "/certs/PHP-Certification.pdf",
    },
    {
      title: "WordPress Certification",
      institution: "Simplilearn",
      date: "2026",
      description:
        "WordPress development and website building certification, including theme customization and plugin development.",
      url: "/certs/WordPress-Certification.pdf",
    },
    {
      title: "MongoDB - Getting Started with MongoDB Atlas",
      institution: "MongoDB University",
      date: "2026",
      description:
        "Introduction to MongoDB Atlas cloud database platform, setup, and deployment.",
      url: "/certs/keylan-king-mongodb-certificate Getting Started with MongoDB Atlas.pdf",
    },
    {
      title: "MongoDB - MongoDB and the Document Model",
      institution: "MongoDB University",
      date: "2026",
      description:
        "Understanding MongoDB's document-oriented data model and best practices.",
      url: "/certs/keylan-king-mongodb-certificate MongoDB and the Document Model.pdf",
    },
    {
      title: "MongoDB - Connecting to a MongoDB Database using MongoDB Shell",
      institution: "MongoDB University",
      date: "2026",
      description:
        "Hands-on training for connecting to MongoDB databases using the MongoDB Shell.",
      url: "/certs/keylan-king-mongodb-certificate connecting to a MongoDB Database using the MongoDB Shell.pdf",
    },
    {
      title: "MongoDB - Indexes",
      institution: "MongoDB University",
      date: "2026",
      description:
        "Optimizing MongoDB query performance through effective indexing strategies.",
      url: "/certs/keylan-king-mongodb-certificate MongoDB Indexes.pdf",
    },
    {
      title: "MongoDB Aggregation with Node.js",
      institution: "MongoDB University",
      date: "2026",
      description:
        "Advanced data aggregation techniques using MongoDB and Node.js.",
      url: "/certs/mongodb aggregation nodejs cert.pdf",
    },
    {
      title: "MongoDB - Connecting to Node.js",
      institution: "MongoDB University",
      date: "2026",
      description:
        "Integrating MongoDB with Node.js applications for backend development.",
      url: "/certs/mongodb connecting to nodejs cert.pdf",
    },
    {
      title: "MongoDB - CRUD Operations with Node.js",
      institution: "MongoDB University",
      date: "2026",
      description:
        "Implementing Create, Read, Update, and Delete operations in Node.js with MongoDB.",
      url: "/certs/mongodb crud operations nodejs cert.pdf",
    },
    {
      title: "AWS - Intro to Serverless Development",
      institution: "Amazon Web Services",
      date: "2026",
      description:
        "Introduction to serverless architecture and AWS Lambda for building scalable applications.",
      url: "/certs/AWS-cert intro to serverless development.pdf",
    },
    {
      title: "AWS - Deploying Serverless Applications",
      institution: "Amazon Web Services",
      date: "2026",
      description:
        "Best practices for deploying and managing serverless applications on AWS.",
      url: "/certs/AWS-cert Deploying serverless applications.pdf",
    },
  ];

  const cardMotion = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, ease: "easeOut" },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(59,130,246,0.12),rgba(14,165,233,0.1),transparent)]"
        aria-hidden
      />

      <Navigation onOpenContact={openContact} />

      <main className="flex-1 pt-24 relative z-10">
        <section
          id="all-education"
          className="relative py-20 px-6 bg-slate-900/60 overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-60 bg-[radial-gradient(90%_60%_at_15%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(90%_60%_at_85%_0%,rgba(6,182,212,0.12),transparent)]"
            aria-hidden
          />
          <div className="max-w-4xl mx-auto relative space-y-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionHeading
                eyebrow="Learning & Growth"
                title="Education & Certifications"
                description="Professional development and certifications showcasing my commitment to continuous learning"
              />
              <Link
                href="/#about"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white font-semibold"
              >
                Back to about
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...cardMotion}
                  transition={{ ...cardMotion.transition, delay: 0.05 * index }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl shadow-slate-950/40 hover:border-blue-400/60 transition"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/8 to-emerald-400/10"
                    aria-hidden
                  />
                  <div className="relative p-8 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white group-hover:text-blue-200 transition">
                            {item.title}
                          </h3>
                          <p className="text-sm text-cyan-400 font-medium">
                            {item.institution}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-300 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex gap-3 pt-4">
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 px-4 py-2 font-semibold text-slate-950 transition shadow-lg shadow-blue-500/25"
                        >
                          View <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {contactOpen && (
          <ContactModal open={contactOpen} onClose={closeContact} onNotify={notify} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-8 right-8 px-6 py-3 rounded-lg font-semibold z-50 ${
              toast.type === "success"
                ? "bg-green-500/90 text-white"
                : "bg-red-500/90 text-white"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
