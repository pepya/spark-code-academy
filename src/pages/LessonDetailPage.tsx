import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lessons, badges } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, Trophy } from "lucide-react";
import BonusChallenges from "@/components/BonusChallenges";

export default function LessonDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lesson = lessons.find((l) => l.id === id);
  const { isLessonCompleted, completeLesson, hasBadge } = useProgress();

  const [currentStep, setCurrentStep] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showBadge, setShowBadge] = useState(false);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">🤔</span>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">Lesson not found</h1>
          <Link to="/lessons" className="text-primary font-semibold">Go back to lessons</Link>
        </div>
      </div>
    );
  }

  const completed = isLessonCompleted(lesson.id);
  const badge = badges.find((b) => b.id === lesson.badgeId);
  const isLastStep = currentStep === lesson.steps.length - 1;
  const showQuiz = currentStep === lesson.steps.length;

  const handleComplete = () => {
    completeLesson(lesson.id, lesson.badgeId);
    if (!hasBadge(lesson.badgeId)) {
      setShowBadge(true);
      setTimeout(() => setShowBadge(false), 3000);
    }
  };

  const handleNext = () => {
    if (isLastStep && lesson.quiz) {
      setCurrentStep(lesson.steps.length); // show quiz
    } else if (isLastStep) {
      handleComplete();
    } else {
      setCurrentStep((s) => s + 1);
    }
  };

  return (
    <div className="min-h-screen py-8">
      {/* Badge popup */}
      <AnimatePresence>
        {showBadge && badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50"
          >
            <div className="bg-card rounded-3xl p-10 text-center shadow-2xl max-w-sm mx-4">
              <span className="text-7xl block mb-4 animate-pop">{badge.icon}</span>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Badge Earned!</h2>
              <p className="font-display text-lg font-bold text-primary mb-1">{badge.title}</p>
              <p className="text-muted-foreground text-sm">{badge.description}</p>
              <button
                onClick={() => setShowBadge(false)}
                className="mt-6 bg-primary text-primary-foreground font-display font-bold px-6 py-2 rounded-xl"
              >
                Awesome! 🎉
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container max-w-3xl">
        {/* Header */}
        <button onClick={() => navigate("/lessons")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold mb-6 transition-colors">
          <ArrowLeft size={18} /> Back to Lessons
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{lesson.icon}</span>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full ${
                lesson.level === "beginner" ? "bg-secondary/15 text-secondary" :
                lesson.level === "intermediate" ? "bg-primary/15 text-primary" :
                "bg-coral/15 text-coral"
              }`}>
                {lesson.level}
              </span>
              <h1 className="font-display text-3xl font-bold text-foreground mt-1">{lesson.title}</h1>
            </div>
          </div>

          {completed && (
            <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-xl mb-6 font-semibold text-sm">
              <CheckCircle size={18} /> You've completed this lesson!
            </div>
          )}

          {/* Step progress */}
          <div className="flex gap-1 mb-8">
            {lesson.steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  i <= currentStep && !showQuiz ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Step content */}
          {!showQuiz ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-6"
              >
                <p className="text-sm text-muted-foreground font-bold mb-2">
                  Step {currentStep + 1} of {lesson.steps.length}
                </p>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  {lesson.steps[currentStep].title}
                </h2>
                <p className="text-foreground text-lg leading-relaxed">
                  {lesson.steps[currentStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          ) : (
            /* Quiz */
            lesson.quiz && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-6"
              >
                <p className="text-sm text-muted-foreground font-bold mb-2">🧠 Quick Quiz</p>
                <h2 className="font-display text-xl font-bold text-foreground mb-6">{lesson.quiz.question}</h2>
                <div className="grid gap-3">
                  {lesson.quiz.options.map((opt, i) => {
                    const isCorrect = i === lesson.quiz!.correctIndex;
                    const selected = quizAnswer === i;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setQuizAnswer(i);
                          if (isCorrect) {
                            setTimeout(handleComplete, 800);
                          }
                        }}
                        disabled={quizAnswer !== null}
                        className={`text-left px-5 py-4 rounded-xl border-2 font-semibold transition-all ${
                          quizAnswer === null
                            ? "border-border hover:border-primary bg-card"
                            : selected && isCorrect
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : selected && !isCorrect
                            ? "border-destructive bg-destructive/10 text-destructive"
                            : quizAnswer !== null && isCorrect
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-border opacity-50"
                        }`}
                      >
                        {opt}
                        {quizAnswer !== null && isCorrect && " ✅"}
                        {selected && !isCorrect && " ❌"}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                if (showQuiz) setCurrentStep(lesson.steps.length - 1);
                else if (currentStep > 0) setCurrentStep((s) => s - 1);
              }}
              disabled={currentStep === 0 && !showQuiz}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-display font-bold text-sm bg-card border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              <ArrowLeft size={16} /> Previous
            </button>

            {!showQuiz && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-display font-bold text-sm bg-primary text-primary-foreground hover:scale-105 transition-transform"
              >
                {isLastStep && !lesson.quiz ? (
                  <>Complete <Trophy size={16} /></>
                ) : isLastStep && lesson.quiz ? (
                  <>Take Quiz <ArrowRight size={16} /></>
                ) : (
                  <>Next <ArrowRight size={16} /></>
                )}
              </button>
            )}
          </div>

          {/* Scratch link */}
          <div className="mt-8 bg-accent/20 rounded-2xl p-6 text-center">
            <p className="font-display font-bold text-foreground mb-3">Try it in Scratch! 🐱</p>
            <a
              href={lesson.scratchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-display font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
            >
              <ExternalLink size={16} /> Open Scratch Editor
            </a>
          </div>

          {/* Bonus Challenges */}
          {lesson.bonusChallenges && lesson.bonusChallenges.length > 0 && (
            <BonusChallenges challenges={lesson.bonusChallenges} />
          )}
        </motion.div>
      </div>
    </div>
  );
}
