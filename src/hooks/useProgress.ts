import { useState, useEffect, useCallback } from "react";

interface Progress {
  completedLessons: string[];
  earnedBadges: string[];
  currentStep: Record<string, number>;
  streak: number;
  lastActiveDate: string | null;
}

const STORAGE_KEY = "scratch-juniors-progress";

const defaultProgress: Progress = {
  completedLessons: [],
  earnedBadges: [],
  currentStep: {},
  streak: 0,
  lastActiveDate: null,
};

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function getYesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return defaultProgress;
      const parsed = JSON.parse(stored);
      // Migrate old format
      return { ...defaultProgress, ...parsed };
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Update streak on mount
  useEffect(() => {
    const today = getToday();
    if (progress.lastActiveDate === today) return;
    
    setProgress((prev) => {
      const yesterday = getYesterday();
      if (prev.lastActiveDate === yesterday) {
        return { ...prev, streak: prev.streak + 1, lastActiveDate: today };
      } else if (prev.lastActiveDate !== today) {
        return { ...prev, streak: 1, lastActiveDate: today };
      }
      return prev;
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const completeLesson = useCallback((lessonId: string, badgeId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId],
      earnedBadges: prev.earnedBadges.includes(badgeId)
        ? prev.earnedBadges
        : [...prev.earnedBadges, badgeId],
      lastActiveDate: getToday(),
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

  const getLessonStep = useCallback(
    (lessonId: string) => progress.currentStep[lessonId] ?? 0,
    [progress.currentStep]
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
    getLessonStep,
    hasBadge,
    resetProgress,
    totalCompleted: progress.completedLessons.length,
    totalBadges: progress.earnedBadges.length,
    streak: progress.streak,
  };
}
