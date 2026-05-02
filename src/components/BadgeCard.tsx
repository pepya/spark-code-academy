import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Badge } from "@/data/lessons";

interface Props {
  badge: Badge;
  earned: boolean;
  index: number;
}

export default function BadgeCard({ badge, earned, index }: Props) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 300 }}
      whileHover={earned ? { scale: 1.08, rotate: [0, -2, 2, 0] } : { scale: 1.03 }}
      whileTap={earned ? { scale: 0.95 } : undefined}
      className={`group relative flex flex-col items-center text-center p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
        earned
          ? "bg-gradient-to-br from-primary/20 to-primary/10 border-primary/40 shadow-lg"
          : "bg-muted/50 border-border opacity-50 grayscale"
      }`}
    >
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
      <h4 className="font-display font-bold text-sm text-foreground relative z-10">
        {t(`badges.${badge.id}.title`, badge.title)}
      </h4>
      <p className="text-xs text-muted-foreground mt-1 relative z-10">
        {t(`badges.${badge.id}.description`, badge.description)}
      </p>
      {earned && (
        <span className="mt-2 text-[10px] font-bold text-accent-foreground bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded-full relative z-10">
          {t("badges.earned")}
        </span>
      )}
    </motion.div>
  );
}
