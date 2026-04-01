import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Eye, CheckCircle2, Lightbulb } from "lucide-react";
import { lessonScripts } from "@/data/lessonScripts";

export default function LessonScriptsPage() {
  const [openWeek, setOpenWeek] = useState<number | null>(1);
  const [openDay, setOpenDay] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-10">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <span className="text-5xl block mb-3">📋</span>
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">
            Daily Lesson Scripts
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
            Minute-by-minute plans with guiding questions and tips. A 6-week, 30-day teacher's guide to help your child learn to code.
          </p>
        </motion.div>

        {/* How to use legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="bg-card rounded-2xl p-6 border border-border shadow-sm mb-10"
        >
          <h2 className="font-display text-lg font-bold text-foreground mb-4">How to Use This Guide</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircle size={16} className="text-primary" />
              </span>
              <div>
                <span className="font-semibold text-foreground">Script (blue)</span>
                <p className="text-muted-foreground">Suggested things to say — use your own words.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Lightbulb size={16} className="text-emerald-600" />
              </span>
              <div>
                <span className="font-semibold text-foreground">Questions (green)</span>
                <p className="text-muted-foreground">Ask these instead of telling. Wait for their answer.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Eye size={16} className="text-orange-600" />
              </span>
              <div>
                <span className="font-semibold text-foreground">Watch for (orange)</span>
                <p className="text-muted-foreground">Signs the child is getting it, or struggling.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-accent-foreground" />
              </span>
              <div>
                <span className="font-semibold text-foreground">Success criteria</span>
                <p className="text-muted-foreground">What "getting it" looks like at the end of the day.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Weeks accordion */}
        <div className="space-y-4">
          {lessonScripts.map((week) => (
            <motion.div
              key={week.weekNumber}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              {/* Week header */}
              <button
                onClick={() => setOpenWeek(openWeek === week.weekNumber ? null : week.weekNumber)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary text-primary-foreground font-display font-bold flex items-center justify-center text-lg">
                  {week.weekNumber}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl font-bold text-foreground">{week.title}</h3>
                  <p className="text-muted-foreground text-sm truncate">{week.goal}</p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform ${
                    openWeek === week.weekNumber ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openWeek === week.weekNumber && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 space-y-3">
                      {week.days.map((day) => {
                        const dayKey = `${week.weekNumber}-${day.dayLabel}`;
                        const isOpen = openDay === dayKey;

                        return (
                          <div key={dayKey} className="rounded-xl border border-border overflow-hidden">
                            <button
                              onClick={() => setOpenDay(isOpen ? null : dayKey)}
                              className="w-full flex items-center gap-3 p-4 text-left hover:bg-muted/30 transition-colors"
                            >
                              <span className="text-2xl">{day.emoji}</span>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-muted-foreground font-medium">{day.dayLabel}</p>
                                <h4 className="font-display font-bold text-foreground">{day.title}</h4>
                              </div>
                              <ChevronDown
                                size={16}
                                className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                              />
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4 space-y-5">
                                    {/* Opening script */}
                                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                                      <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                                        Say to child →
                                      </p>
                                      <p className="text-foreground text-sm leading-relaxed italic">
                                        "{day.opening}"
                                      </p>
                                    </div>

                                    {/* Activities */}
                                    <div>
                                      <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
                                        Activities
                                      </p>
                                      <ol className="space-y-2">
                                        {day.activities.map((act, i) => (
                                          <li key={i} className="flex gap-3 text-sm text-foreground">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                                              {i + 1}
                                            </span>
                                            <span className="leading-relaxed pt-0.5">{act}</span>
                                          </li>
                                        ))}
                                      </ol>
                                    </div>

                                    {/* Questions */}
                                    <div className="bg-emerald-500/5 rounded-xl p-4 border border-emerald-500/20">
                                      <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2 uppercase tracking-wide flex items-center gap-1.5">
                                        <Lightbulb size={14} /> Guiding Questions
                                      </p>
                                      <ul className="space-y-2">
                                        {day.questions.map((q, i) => (
                                          <li key={i} className="text-sm text-foreground flex gap-2">
                                            <span className="text-emerald-600">💬</span>
                                            <span className="leading-relaxed">"{q}"</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* Watch for */}
                                    {day.watchFor && day.watchFor.length > 0 && (
                                      <div className="bg-orange-500/5 rounded-xl p-4 border border-orange-500/20">
                                        <p className="text-xs font-bold text-orange-700 dark:text-orange-400 mb-2 uppercase tracking-wide flex items-center gap-1.5">
                                          <Eye size={14} /> Watch For
                                        </p>
                                        <ul className="space-y-2">
                                          {day.watchFor.map((w, i) => (
                                            <li key={i} className="text-sm text-foreground flex gap-2">
                                              <span className="text-orange-600">👁</span>
                                              <span className="leading-relaxed">{w}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Success */}
                                    <div className="bg-accent/10 rounded-xl p-4 border border-accent/30">
                                      <p className="text-xs font-bold text-accent-foreground mb-1 uppercase tracking-wide flex items-center gap-1.5">
                                        <CheckCircle2 size={14} /> Success looks like
                                      </p>
                                      <p className="text-sm text-foreground leading-relaxed">{day.success}</p>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
