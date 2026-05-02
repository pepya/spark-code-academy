import { motion } from "framer-motion";
import { badges, lessonModules } from "@/data/lessons";
import BadgeCard from "@/components/BadgeCard";
import CertificateGenerator from "@/components/CertificateGenerator";
import SocialShare from "@/components/SocialShare";
import { useProgress } from "@/hooks/useProgress";

export default function BadgesPage() {
  const { hasBadge, totalBadges } = useProgress();

  return (
    <div className="min-h-screen py-10">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <span className="text-5xl block mb-3">🏆</span>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">Your Sticker Book</h1>
          <p className="text-muted-foreground text-lg mb-6">
            {totalBadges} of {badges.length} earned — collect them all!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <CertificateGenerator
              level="CodyLab Juniors Program"
              badgeCount={totalBadges}
              totalBadges={badges.length}
            />
            {totalBadges > 0 && (
              <SocialShare badgeCount={totalBadges} totalBadges={badges.length} />
            )}
          </div>
        </motion.div>

        {/* Sticker book grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <BadgeCard key={badge.id} badge={badge} earned={hasBadge(badge.id)} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
