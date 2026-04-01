import { useState } from "react";
import { motion } from "framer-motion";
import { lessons, getLessonsByLevel, type Level } from "@/data/lessons";
import LessonCard from "@/components/LessonCard";
import { useProgress } from "@/hooks/useProgress";

const levels: { key: Level; label: string; emoji: string }[] = [
  { key: "beginner", label: "Beginner", emoji: "🌱" },
  { key: "intermediate", label: "Intermediate", emoji: "⚡" },
  { key: "advanced", label: "Advanced", emoji: "🚀" },
];

export default function LessonsPage() {
  const [activeLevel, setActiveLevel] = useState<Level | "all">("all");
  const { isLessonCompleted, totalCompleted } = useProgress();

  const filtered = activeLevel === "all" ? lessons : getLessonsByLevel(activeLevel);

  return (
    <div className="min-h-screen py-10">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">All Lessons</h1>
          <p className="text-muted-foreground text-lg">
            {totalCompleted} of {lessons.length} completed — keep going! 🎉
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(totalCompleted / lessons.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveLevel("all")}
            className={`px-5 py-2 rounded-xl font-display font-bold text-sm transition-all ${
              activeLevel === "all" ? "bg-primary text-primary-foreground shadow-md" : "bg-card text-muted-foreground border border-border hover:border-primary"
            }`}
          >
            📚 All
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
        </div>

        {/* Lesson grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((lesson, i) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              completed={isLessonCompleted(lesson.id)}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
