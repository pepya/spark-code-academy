import { motion } from "framer-motion";
import { badges } from "@/data/lessons";
import BadgeCard from "@/components/BadgeCard";
import { useProgress } from "@/hooks/useProgress";

export default function BadgesPage() {
  const { hasBadge, totalBadges } = useProgress();

  return (
    <div className="min-h-screen py-10">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <span className="text-5xl block mb-3">🏆</span>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">Your Badges</h1>
          <p className="text-muted-foreground text-lg">
            {totalBadges} of {badges.length} earned — collect them all!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {badges.map((badge, i) => (
            <BadgeCard key={badge.id} badge={badge} earned={hasBadge(badge.id)} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
