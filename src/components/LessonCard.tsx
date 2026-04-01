import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Lesson } from "@/data/lessons";
import { CheckCircle } from "lucide-react";

interface Props {
  lesson: Lesson;
  completed?: boolean;
  index: number;
}

const levelGradient = {
  beginner: "gradient-card-beginner",
  intermediate: "gradient-card-intermediate",
  advanced: "gradient-card-advanced",
};

export default function LessonCard({ lesson, completed, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link to={`/lessons/${lesson.id}`} className="block group">
        <div className="relative bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-bounce border border-border">
          {/* Color strip */}
          <div className={`h-2 ${levelGradient[lesson.level]}`} />

          <div className="p-5">
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{lesson.icon}</span>
              {completed && (
                <span className="flex items-center gap-1 text-xs font-bold text-secondary bg-secondary/15 px-2 py-1 rounded-full">
                  <CheckCircle size={14} /> Done
                </span>
              )}
            </div>

            <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {lesson.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {lesson.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className={`text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full ${
                lesson.level === "beginner" ? "bg-secondary/15 text-secondary" :
                lesson.level === "intermediate" ? "bg-primary/15 text-primary" :
                "bg-coral/15 text-coral"
              }`}>
                {lesson.level}
              </span>
              <span className="text-xs text-muted-foreground">{lesson.steps.length} steps</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
