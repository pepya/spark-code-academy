import { motion } from "framer-motion";
import type { Badge } from "@/data/lessons";

interface Props {
  badge: Badge;
  earned: boolean;
  index: number;
}

const categoryColors: Record<string, string> = {
  accent: "from-[hsl(45,95%,60%)] to-[hsl(45,95%,75%)]",
  secondary: "from-[hsl(145,60%,48%)] to-[hsl(145,60%,65%)]",
  coral: "from-[hsl(10,80%,62%)] to-[hsl(10,80%,78%)]",
  purple: "from-[hsl(270,60%,60%)] to-[hsl(270,60%,75%)]",
  primary: "from-[hsl(210,80%,55%)] to-[hsl(210,80%,70%)]",
  mint: "from-[hsl(160,50%,55%)] to-[hsl(160,50%,70%)]",
  peach: "from-[hsl(25,90%,70%)] to-[hsl(25,90%,82%)]",
  sky: "from-[hsl(195,85%,65%)] to-[hsl(195,85%,78%)]",
  lavender: "from-[hsl(250,60%,75%)] to-[hsl(250,60%,85%)]",
};

const categoryBorders: Record<string, string> = {
  accent: "border-[hsl(45,95%,60%)]",
  secondary: "border-[hsl(145,60%,48%)]",
  coral: "border-[hsl(10,80%,62%)]",
  purple: "border-[hsl(270,60%,60%)]",
  primary: "border-[hsl(210,80%,55%)]",
  mint: "border-[hsl(160,50%,55%)]",
  peach: "border-[hsl(25,90%,70%)]",
  sky: "border-[hsl(195,85%,65%)]",
  lavender: "border-[hsl(250,60%,75%)]",
};

export default function BadgeCard({ badge, earned, index }: Props) {
  const gradient = categoryColors[badge.color] || categoryColors.accent;
  const borderColor = categoryBorders[badge.color] || categoryBorders.accent;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 300 }}
      whileHover={earned ? { scale: 1.08, rotate: [0, -2, 2, 0] } : { scale: 1.03 }}
      whileTap={earned ? { scale: 0.95 } : undefined}
      className={`group relative flex flex-col items-center text-center p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
        earned
          ? `bg-gradient-to-br ${gradient} ${borderColor} shadow-lg`
          : "bg-muted/50 border-border opacity-50 grayscale"
      }`}
    >
      {/* Shimmer overlay on hover */}
      {earned && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full" style={{ transition: "transform 0.8s ease, opacity 0.3s ease" }} />
      )}

      <motion.span
        className="text-4xl mb-2 relative z-10"
        animate={earned ? { y: [0, -4, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        {badge.icon}
      </motion.span>
      <h4 className="font-display font-bold text-sm text-foreground relative z-10">{badge.title}</h4>
      <p className="text-xs text-muted-foreground mt-1 relative z-10">{badge.description}</p>
      {earned && (
        <span className="mt-2 text-[10px] font-bold text-accent-foreground bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded-full relative z-10">
          EARNED ✨
        </span>
      )}
    </motion.div>
  );
}
