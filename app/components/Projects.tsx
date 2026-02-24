"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/content";
import { useState } from "react";

const cardMotion = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

const Projects = () => {
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({});
  
  const featuredProjects = projects.filter(
    (p) =>
      p.title === "MealMuse" ||
      p.title.startsWith("Skinstric.ai") ||
      p.title === "FlickFinder" 
  );
  
  const nextImage = (projectTitle: string, totalImages: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) + 1) % totalImages
    }));
  };
  
  const prevImage = (projectTitle: string, totalImages: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) - 1 + totalImages) % totalImages
    }));
  };
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-slate-900/60 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-60 bg-[radial-gradient(90%_60%_at_15%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(90%_60%_at_85%_0%,rgba(6,182,212,0.12),transparent)]"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto relative space-y-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Featured work"
            title="Projects"
            description="Building clean, reliable interfaces that help teams move faster — ready to make an impact in my first developer role"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              {...cardMotion}
              transition={{ ...cardMotion.transition, delay: 0.05 * index }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl shadow-slate-950/40 hover:border-blue-400/60"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/8 to-emerald-400/10"
                aria-hidden
              />
              <div className="relative overflow-hidden">
                {project.images && project.images.length > 1 ? (
                  <>
                    <Image
                      src={project.images[imageIndexes[project.title] || 0]}
                      alt={`${project.alt} - Image ${(imageIndexes[project.title] || 0) + 1}`}
                      width={1200}
                      height={675}
                      className="w-full h-auto transition duration-500 group-hover:scale-[1.03]"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        prevImage(project.title, project.images!.length);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full transition"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        nextImage(project.title, project.images!.length);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full transition"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.preventDefault();
                            setImageIndexes(prev => ({ ...prev, [project.title]: idx }));
                          }}
                          className={`w-2 h-2 rounded-full transition ${
                            idx === (imageIndexes[project.title] || 0)
                              ? "bg-blue-400 w-6"
                              : "bg-slate-400/50 hover:bg-slate-400"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto transition duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <div className="relative p-6 space-y-5 flex flex-col h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-blue-200 transition">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-amber-200/90">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800 text-sm text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.live || project.code) && (
                  <div className={`grid gap-3 pt-2 ${project.live && project.code ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {project.live && (
                      <Link
                        href={project.live}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 px-4 py-2 font-semibold text-slate-950 transition shadow-lg shadow-blue-500/25"
                      >
                        Live <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                    {project.code && (
                      <Link
                        href={project.code}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 hover:border-blue-400 px-4 py-2 font-semibold text-white transition"
                      >
                        Code
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-linear-to-r from-blue-400 via-cyan-300 to-emerald-300 px-4 py-2 rounded-lg shadow-lg shadow-blue-500/25 border border-white/20"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
