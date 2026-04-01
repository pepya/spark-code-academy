import { motion } from "framer-motion";
import type { Badge } from "@/data/lessons";

interface Props {
  badge: Badge;
  earned: boolean;
  index: number;
}

export default function BadgeCard({ badge, earned, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 300 }}
      className={`flex flex-col items-center text-center p-5 rounded-2xl border-2 transition-all duration-300 ${
        earned
          ? "bg-card border-accent shadow-lg shadow-accent/20"
          : "bg-muted/50 border-border opacity-50 grayscale"
      }`}
    >
      <span className={`text-4xl mb-2 ${earned ? "animate-pop" : ""}`}>{badge.icon}</span>
      <h4 className="font-display font-bold text-sm text-foreground">{badge.title}</h4>
      <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
      {earned && (
        <span className="mt-2 text-[10px] font-bold text-accent-foreground bg-accent px-2 py-0.5 rounded-full">
          EARNED ✨
        </span>
      )}
    </motion.div>
  );
}
