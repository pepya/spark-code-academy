import { useState } from "react";
import { motion } from "framer-motion";
import { lessons, lessonModules, getNextLesson, type Level } from "@/data/lessons";
import LessonCard from "@/components/LessonCard";
import { useProgress } from "@/hooks/useProgress";
import { Flame, Trophy, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const levels: { key: Level; label: string; emoji: string }[] = [
  { key: "beginner", label: "Beginner", emoji: "🌱" },
  { key: "intermediate", label: "Intermediate", emoji: "⚡" },
  { key: "advanced", label: "Advanced", emoji: "🚀" },
];

type ViewMode = "path" | "all";

export default function LessonsPage() {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");
  const [viewMode, setViewMode] = useState<ViewMode>("path");
  const [expandedModules, setExpandedModules] = useState<Set<string>>(() => new Set(lessonModules.map(m => m.id)));
  const { isLessonCompleted, getLessonStep, totalCompleted, streak, progress } = useProgress();

  const filtered = activeLevel === "all" ? lessons : lessons.filter(l => l.level === activeLevel);
  const nextLesson = getNextLesson(progress.completedLessons);

  const toggleModule = (id: string) => {
    setExpandedModules(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getModuleProgress = (moduleId: string) => {
    const mod = lessonModules.find(m => m.id === moduleId);
    if (!mod) return { completed: 0, total: 0 };
    const completed = mod.lessonIds.filter(id => isLessonCompleted(id)).length;
    return { completed, total: mod.lessonIds.length };
  };

  return (
    <div className="min-h-screen py-10">
      <div className="container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">Learning Path</h1>
          <p className="text-muted-foreground text-lg">
            {totalCompleted} of {lessons.length} completed — keep going! 🎉
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          {/* Streak */}
          <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2 shadow-sm">
            <Flame size={18} className={streak > 0 ? "text-coral" : "text-muted-foreground"} />
            <span className="font-display font-bold text-foreground">
              {streak} day{streak !== 1 ? "s" : ""} streak
            </span>
            {streak >= 3 && <span className="text-xs">🔥</span>}
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2 shadow-sm">
            <Trophy size={18} className="text-accent" />
            <span className="font-display font-bold text-foreground">
              {Math.round((totalCompleted / lessons.length) * 100)}% complete
            </span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(totalCompleted / lessons.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Recommended Next */}
        {nextLesson && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <Link to={`/lessons/${nextLesson.id}`} className="block group">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/30 rounded-2xl p-5 flex items-center gap-4 hover:border-primary/60 transition-all">
                <span className="text-4xl">{nextLesson.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-0.5">⭐ Recommended Next</p>
                  <h3 className="font-display text-lg font-bold text-foreground truncate">{nextLesson.title}</h3>
                  <p className="text-sm text-muted-foreground italic">{nextLesson.hook}</p>
                </div>
                <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </Link>
          </motion.div>
        )}

        {/* View toggle + Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="flex bg-card border border-border rounded-xl overflow-hidden mr-2">
            <button
              onClick={() => setViewMode("path")}
              className={`px-4 py-2 font-display font-bold text-sm transition-all ${
                viewMode === "path" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🗺️ Path
            </button>
            <button
              onClick={() => setViewMode("all")}
              className={`px-4 py-2 font-display font-bold text-sm transition-all ${
                viewMode === "all" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📚 All
            </button>
          </div>

          {viewMode === "all" && (
            <>
              <button
                onClick={() => setActiveLevel("all")}
                className={`px-5 py-2 rounded-xl font-display font-bold text-sm transition-all ${
                  activeLevel === "all" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground border border-border hover:border-primary"
                }`}
              >
                All
              </button>
              {levels.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setActiveLevel(l.key)}
                  className={`px-5 py-2 rounded-xl font-display font-bold text-sm transition-all ${
                    activeLevel === l.key ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground border border-border hover:border-primary"
                  }`}
                >
                  {l.emoji} {l.label}
                </button>
              ))}
            </>
          )}
        </div>

        {/* Path View */}
        {viewMode === "path" ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            {lessonModules.map((mod, mi) => {
              const { completed, total } = getModuleProgress(mod.id);
              const isExpanded = expandedModules.has(mod.id);
              const isModuleComplete = completed === total;
              const modLessons = mod.lessonIds
                .map(id => lessons.find(l => l.id === id))
                .filter(Boolean) as typeof lessons;

              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: mi * 0.05 }}
                >
                  {/* Module header */}
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full flex items-center gap-4 bg-card border border-border rounded-2xl p-4 hover:border-primary/40 transition-all group text-left"
                  >
                    <span className="text-3xl">{mod.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="font-display text-lg font-bold text-foreground">{mod.title}</h2>
                        {isModuleComplete && <span className="text-xs bg-secondary/15 text-secondary font-bold px-2 py-0.5 rounded-full">✅ Complete</span>}
                      </div>
                      <p className="text-sm text-muted-foreground">{mod.description}</p>
                      {/* Module progress bar */}
                      <div className="w-full h-1.5 bg-muted rounded-full mt-2 overflow-hidden">
                        <div
                          className="h-full bg-secondary rounded-full transition-all duration-500"
                          style={{ width: `${total > 0 ? (completed / total) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-muted-foreground">{completed}/{total}</span>
                    {isExpanded ? <ChevronDown size={18} className="text-muted-foreground" /> : <ChevronRight size={18} className="text-muted-foreground" />}
                  </button>

                  {/* Module lessons */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 pl-4 border-l-2 border-primary/20 ml-6"
                    >
                      {modLessons.map((lesson, i) => (
                        <LessonCard
                          key={lesson.id}
                          lesson={lesson}
                          completed={isLessonCompleted(lesson.id)}
                          inProgress={!isLessonCompleted(lesson.id) && getLessonStep(lesson.id) > 0}
                          index={i}
                        />
                      ))}
                    </motion.div>
                  )}

                  {/* Connector line between modules */}
                  {mi < lessonModules.length - 1 && (
                    <div className="flex justify-center my-2">
                      <div className="w-0.5 h-6 bg-border rounded-full" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Grid View */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((lesson, i) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                completed={isLessonCompleted(lesson.id)}
                inProgress={!isLessonCompleted(lesson.id) && getLessonStep(lesson.id) > 0}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
