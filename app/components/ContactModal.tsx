"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  onNotify?: (type: "success" | "error", message: string) => void;
};

export default function ContactModal({
  open,
  onClose,
  onNotify,
}: ContactModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => firstFieldRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        form.reset();
        onNotify?.("success", "Message sent. I’ll reply shortly.");
        onClose();
      } else {
        onNotify?.("error", "Something went wrong. Please try again.");
      }
    } catch {
      onNotify?.("error", "Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const autoGrow = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const ta = e.currentTarget;
    ta.style.height = "auto";
    ta.style.height = `${ta.scrollHeight}px`;
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          onMouseDown={handleBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-slate-950/70 backdrop-blur-sm"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto sm:mt-24 mt-16 w-[95%] max-w-4xl max-h-[85vh] rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-blue-500/20 overflow-y-auto overscroll-contain"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: blurb */}
              <div className="relative p-8 md:p-10 border-r border-slate-800">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.1),transparent_35%)]"
                  aria-hidden
                />
                <div className="relative space-y-4">
                  <p className="uppercase tracking-[0.25em] text-xs text-slate-400">
                    Let’s Connect
                  </p>
                  <h3 className="text-3xl font-bold text-white">
                    Fast, clean, intentional builds
                  </h3>
                  <p className="text-slate-300">
                    I craft performant interfaces with Next.js, React, and
                    TypeScript— focused on clarity, maintainability, and
                    velocity. Share a bit about your project and I’ll get back
                    quickly.
                  </p>
                  <p className="text-slate-400 text-sm">
                    Prefer email? kingkey0101@outlook.com
                  </p>
                </div>
              </div>
              {/* Right: form */}
              <div className="p-8 md:p-10 pb-12">
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-300 mb-1">
                        Name
                      </label>
                      <input
                        ref={firstFieldRef}
                        name="name"
                        required
                        className="w-full rounded-xl bg-slate-950/70 border border-slate-800 px-3 py-2 text-slate-100 focus:border-blue-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-xl bg-slate-950/70 border border-slate-800 px-3 py-2 text-slate-100 focus:border-blue-400 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      ref={messageRef}
                      name="message"
                      rows={4}
                      required
                      onInput={autoGrow}
                      className="w-full rounded-xl bg-slate-950/70 border border-slate-800 px-3 py-2 text-slate-100 focus:border-blue-400 outline-none resize-none overflow-hidden min-h-[140px] max-h-[60vh]"
                      style={{
                        height: messageRef.current
                          ? `${messageRef.current.scrollHeight}px`
                          : undefined,
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-linear-to-r from-blue-400 via-cyan-300 to-emerald-300 px-4 py-2 rounded-lg shadow-lg shadow-blue-500/25 border border-white/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="h-4 w-4 border-2 border-slate-900/40 border-t-slate-900 rounded-full animate-spin"
                            aria-hidden
                          />
                          Sending...
                        </span>
                      ) : (
                        "Send message"
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-xl border border-slate-800/80 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400/80 transition bg-slate-900/60"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
