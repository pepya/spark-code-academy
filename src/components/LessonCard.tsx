import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Lesson } from "@/data/lessons";
import { CheckCircle, Clock, Play, RotateCcw, Star, Sparkles } from "lucide-react";

interface Props {
  lesson: Lesson;
  completed?: boolean;
  inProgress?: boolean;
  index: number;
}

const levelGradient = {
  beginner: "gradient-card-beginner",
  intermediate: "gradient-card-intermediate",
  advanced: "gradient-card-advanced",
};

const difficultyStars = (level: Lesson["level"]) => {
  const count = level === "beginner" ? 1 : level === "intermediate" ? 2 : 3;
  return Array.from({ length: 3 }, (_, i) => (
    <Star
      key={i}
      size={12}
      className={i < count ? "fill-accent text-accent" : "text-muted-foreground/30"}
    />
  ));
};

export default function LessonCard({ lesson, completed, inProgress, index }: Props) {
  const ctaLabel = completed
    ? "Try Again"
    : inProgress
    ? "Continue"
    : "Let's Go!";

  const CtaIcon = completed ? RotateCcw : Play;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <Link to={`/lessons/${lesson.id}`} className="block group">
        <div className="relative bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-bounce border border-border h-full">
          {/* Color strip */}
          <div className={`h-2 ${levelGradient[lesson.level]}`} />

          {/* New badge */}
          {lesson.isNew && (
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full animate-fade-in">
              <Sparkles size={10} /> New!
            </div>
          )}

          <div className="p-5">
            {/* Header row */}
            <div className="flex items-start justify-between mb-2">
              <span className="text-3xl">{lesson.icon}</span>
              {completed && (
                <span className="flex items-center gap-1 text-xs font-bold text-secondary bg-secondary/15 px-2 py-1 rounded-full">
                  <CheckCircle size={14} /> Done ✨
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {lesson.title}
            </h3>

            {/* Hook (teaser) */}
            <p className="text-sm text-primary font-semibold mb-2 italic">
              {lesson.hook}
            </p>

            {/* You'll Build */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3 bg-muted/50 rounded-lg px-2.5 py-1.5">
              <span className="font-bold text-foreground">🛠️ You'll build:</span>{" "}
              {lesson.youllBuild}
            </div>

            {/* Meta row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {difficultyStars(lesson.level)}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {lesson.estimatedMinutes} min
                </span>
                <span>{lesson.steps.length} steps</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-display font-bold text-sm transition-all group-hover:scale-[1.02] ${
              completed
                ? "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                : inProgress
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground"
            }`}>
              <CtaIcon size={14} />
              {ctaLabel}
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
