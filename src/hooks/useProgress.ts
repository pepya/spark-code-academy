import { useState, useEffect, useCallback } from "react";

interface Progress {
  completedLessons: string[];
  earnedBadges: string[];
  currentStep: Record<string, number>;
}

const STORAGE_KEY = "scratch-juniors-progress";

const defaultProgress: Progress = {
  completedLessons: [],
  earnedBadges: [],
  currentStep: {},
};

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeLesson = useCallback((lessonId: string, badgeId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId],
      earnedBadges: prev.earnedBadges.includes(badgeId)
        ? prev.earnedBadges
        : [...prev.earnedBadges, badgeId],
    }));
  }, []);

  const setStep = useCallback((lessonId: string, step: number) => {
    setProgress((prev) => ({
      ...prev,
      currentStep: { ...prev.currentStep, [lessonId]: step },
    }));
  }, []);

  const isLessonCompleted = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const hasBadge = useCallback(
    (badgeId: string) => progress.earnedBadges.includes(badgeId),
    [progress.earnedBadges]
  );

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  return {
    progress,
    completeLesson,
    setStep,
    isLessonCompleted,
    hasBadge,
    resetProgress,
    totalCompleted: progress.completedLessons.length,
    totalBadges: progress.earnedBadges.length,
  };
}
