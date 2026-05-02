import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { lessons, badges } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, Trophy } from "lucide-react";
import BonusChallenges from "@/components/BonusChallenges";

export default function LessonDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const lesson = lessons.find((l) => l.id === id);
  const { isLessonCompleted, completeLesson, hasBadge, setStep, getLessonStep } = useProgress();

  const savedStep = lesson ? getLessonStep(lesson.id) : 0;
  const [currentStep, setCurrentStep] = useState(savedStep);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showBadge, setShowBadge] = useState(false);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">🤔</span>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">{t("lessonPage.lessonNotFound")}</h1>
          <Link to="/lessons" className="text-primary font-semibold">{t("lessonPage.goBackToLessons")}</Link>
        </div>
      </div>
    );
  }

  const completed = isLessonCompleted(lesson.id);
  const badge = badges.find((b) => b.id === lesson.badgeId);
  const isLastStep = currentStep === lesson.steps.length - 1;
  const showQuiz = currentStep === lesson.steps.length;

  // Helper to get translated lesson content with fallback
  const lt = (key: string, fallback: string) => t(`lessonPage.lessons.${lesson.id}.${key}`, fallback);

  const getStepTitle = (i: number) => t(`lessonPage.lessons.${lesson.id}.steps.${i}.title`, lesson.steps[i].title);
  const getStepDesc = (i: number) => t(`lessonPage.lessons.${lesson.id}.steps.${i}.description`, lesson.steps[i].description);
  const getQuizQuestion = () => lesson.quiz ? t(`lessonPage.lessons.${lesson.id}.quiz.question`, lesson.quiz.question) : "";
  const getQuizOption = (i: number) => lesson.quiz ? t(`lessonPage.lessons.${lesson.id}.quiz.options.${i}`, lesson.quiz.options[i]) : "";

  const handleComplete = () => {
    completeLesson(lesson.id, lesson.badgeId);
    if (!hasBadge(lesson.badgeId)) {
      setShowBadge(true);
      setTimeout(() => setShowBadge(false), 3000);
    }
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
    setStep(lesson.id, step);
  };

  const handleNext = () => {
    if (isLastStep && lesson.quiz) {
      handleStepChange(lesson.steps.length);
    } else if (isLastStep) {
      handleComplete();
    } else {
      handleStepChange(currentStep + 1);
    }
  };

  const currentIndex = lessons.findIndex(l => l.id === lesson.id);
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

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
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">{t("lessonPage.badgeEarned")}</h2>
              <p className="font-display text-lg font-bold text-primary mb-1">{t(`badges.${badge.id}.title`, badge.title)}</p>
              <p className="text-muted-foreground text-sm">{t(`badges.${badge.id}.description`, badge.description)}</p>
              <button
                onClick={() => setShowBadge(false)}
                className="mt-6 bg-primary text-primary-foreground font-display font-bold px-6 py-2 rounded-xl"
              >
                {t("lessonPage.awesome")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container max-w-3xl">
        {/* Header */}
        <button onClick={() => navigate("/lessons")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold mb-6 transition-colors">
          <ArrowLeft size={18} /> {t("lessonPage.backToLessons")}
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{lesson.icon}</span>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full ${
                lesson.level === "beginner" ? "bg-secondary/15 text-secondary" :
                lesson.level === "intermediate" ? "bg-primary/15 text-primary" :
                "bg-coral/15 text-coral"
              }`}>
                {t(`lessonPage.${lesson.level}`)}
              </span>
              <h1 className="font-display text-3xl font-bold text-foreground mt-1">{lt("title", lesson.title)}</h1>
            </div>
          </div>

          {/* Hook teaser */}
          <p className="text-primary font-semibold italic text-lg mb-2">{lt("hook", lesson.hook)}</p>

          {/* You'll Build badge */}
          <div className="inline-flex items-center gap-2 text-sm bg-muted/60 rounded-lg px-3 py-1.5 mb-6">
            <span className="font-bold">{t("lessonPage.youllBuild")}</span> {lt("youllBuild", lesson.youllBuild)}
          </div>

          {completed && (
            <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-xl mb-6 font-semibold text-sm">
              <CheckCircle size={18} /> {t("lessonPage.completedLesson")}
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
                className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-4"
              >
                <p className="text-sm text-muted-foreground font-bold mb-2">
                  {t("lessonPage.stepOf", { current: currentStep + 1, total: lesson.steps.length })}
                </p>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  {getStepTitle(currentStep)}
                </h2>
                <p className="text-foreground text-lg leading-relaxed">
                  {getStepDesc(currentStep)}
                </p>
              </motion.div>
            </AnimatePresence>
          ) : (
            lesson.quiz && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-4"
              >
                <p className="text-sm text-muted-foreground font-bold mb-2">{t("lessonPage.quickQuiz")}</p>
                <h2 className="font-display text-xl font-bold text-foreground mb-6">{getQuizQuestion()}</h2>
                <div className="grid gap-3">
                  {lesson.quiz.options.map((_, i) => {
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
                        {getQuizOption(i)}
                        {quizAnswer !== null && isCorrect && " ✅"}
                        {selected && !isCorrect && " ❌"}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )
          )}

          {/* Scratch Editor link inline */}
          {!showQuiz && (
            <div className="mb-6">
              <a
                href={lesson.scratchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground bg-accent/80 hover:bg-accent px-4 py-2 rounded-xl transition-colors"
              >
                <ExternalLink size={14} /> {t("lessonPage.openInScratch")}
              </a>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => {
                if (showQuiz) handleStepChange(lesson.steps.length - 1);
                else if (currentStep > 0) handleStepChange(currentStep - 1);
              }}
              disabled={currentStep === 0 && !showQuiz}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-display font-bold text-sm bg-card border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              <ArrowLeft size={16} /> {t("lessonPage.previous")}
            </button>

            {!showQuiz && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-display font-bold text-sm bg-primary text-primary-foreground hover:scale-105 transition-transform"
              >
                {isLastStep && !lesson.quiz ? (
                  <>{t("lessonPage.completeBtn")} <Trophy size={16} /></>
                ) : isLastStep && lesson.quiz ? (
                  <>{t("lessonPage.takeQuiz")} <ArrowRight size={16} /></>
                ) : (
                  <>{t("lessonPage.next")} <ArrowRight size={16} /></>
                )}
              </button>
            )}
          </div>

          {/* Next lesson suggestion */}
          {completed && nextLesson && (
            <Link to={`/lessons/${nextLesson.id}`} className="block group mb-8">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20 rounded-2xl p-4 flex items-center gap-4 hover:border-primary/50 transition-all">
                <span className="text-3xl">{nextLesson.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide">{t("lessonPage.upNext")}</p>
                  <h3 className="font-display font-bold text-foreground truncate">
                    {t(`lessonPage.lessons.${nextLesson.id}.title`, nextLesson.title)}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    {t(`lessonPage.lessons.${nextLesson.id}.hook`, nextLesson.hook)}
                  </p>
                </div>
                <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </Link>
          )}

          {/* Bonus Challenges */}
          {lesson.bonusChallenges && lesson.bonusChallenges.length > 0 && (
            <BonusChallenges challenges={lesson.bonusChallenges} />
          )}
        </motion.div>
      </div>
    </div>
  );
}
