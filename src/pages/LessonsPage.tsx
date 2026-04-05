import { useState } from "react";
import { motion } from "framer-motion";
import { lessons, lessonModules } from "@/data/lessons";
import LessonCard from "@/components/LessonCard";
import { useProgress } from "@/hooks/useProgress";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function LessonsPage() {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    () => new Set(lessonModules.map(m => m.id))
  );
  const { isLessonCompleted, getLessonStep } = useProgress();

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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">Lessons</h1>
          <p className="text-muted-foreground text-lg">Choose a category and start building!</p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {lessonModules.map((mod, mi) => {
            const { completed, total } = getModuleProgress(mod.id);
            const isExpanded = expandedModules.has(mod.id);
            const isModuleComplete = completed === total && total > 0;
            const modLessons = mod.lessonIds
              .map(id => lessons.find(l => l.id === id))
              .filter(Boolean) as typeof lessons;

            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mi * 0.08 }}
              >
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full flex items-center gap-4 bg-card border border-border rounded-2xl p-4 hover:border-primary/40 transition-all group text-left"
                >
                  <span className="text-3xl">{mod.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-display text-lg font-bold text-foreground">{mod.title}</h2>
                      {isModuleComplete && (
                        <span className="text-xs bg-secondary/15 text-secondary font-bold px-2 py-0.5 rounded-full">✅ Complete</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{mod.description}</p>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
