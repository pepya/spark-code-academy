import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ChevronDown, Lightbulb } from "lucide-react";
import type { BonusChallenge } from "@/data/lessons";

const levelConfig = {
  tricky: { label: "Tricky", color: "bg-primary/15 text-primary", icon: "⚡" },
  hard: { label: "Hard", color: "bg-accent/15 text-accent-foreground", icon: "🔥" },
  "super-hard": { label: "Super Hard", color: "bg-destructive/15 text-destructive", icon: "🔥🔥" },
  "very-hard": { label: "Very Hard", color: "bg-destructive/15 text-destructive", icon: "💪" },
  legend: { label: "Legend", color: "bg-primary/15 text-primary", icon: "🏆" },
};

interface Props {
  challenges: BonusChallenge[];
}

export default function BonusChallenges({ challenges }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});

  return (
    <div className="mt-8 bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-4 flex items-center gap-3">
        <Zap className="text-primary" size={22} />
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">Bonus Challenges</h3>
          <p className="text-sm text-muted-foreground">For fast finishers & curious minds! 🚀</p>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {challenges.map((challenge, i) => {
          const config = levelConfig[challenge.level];
          const isExpanded = expandedIndex === i;

          return (
            <motion.div
              key={i}
              className="rounded-xl border border-border overflow-hidden"
              layout
            >
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-xl">{config.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${config.color}`}>
                      {config.label}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-foreground truncate">{challenge.title}</h4>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 space-y-3">
                      <p className="text-foreground leading-relaxed">{challenge.description}</p>

                      {!showHint[i] ? (
                        <button
                          onClick={() => setShowHint((prev) => ({ ...prev, [i]: true }))}
                          className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          <Lightbulb size={14} /> Show Hint
                        </button>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-sm text-foreground"
                        >
                          <span className="font-bold text-primary">💡 Hint:</span> {challenge.hint}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
