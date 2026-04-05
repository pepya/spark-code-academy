import { motion } from "framer-motion";
import { badges } from "@/data/lessons";
import BadgeCard from "@/components/BadgeCard";
import CertificateGenerator from "@/components/CertificateGenerator";
import SocialShare from "@/components/SocialShare";
import { useProgress } from "@/hooks/useProgress";

// Group badges by color category for the sticker book
const categoryLabels: Record<string, string> = {
  primary: "🧠 Logic & Coding",
  secondary: "🏃 Movement",
  accent: "⭐ Milestones",
  coral: "🎨 Creativity",
  purple: "🎵 Sound & Messages",
  mint: "🔁 Patterns & Loops",
  peach: "🎬 Animation & Sound",
  sky: "💻 Advanced",
  lavender: "🚀 Explorer",
};

function groupBadgesByColor() {
  const groups: Record<string, typeof badges> = {};
  for (const badge of badges) {
    const key = badge.color;
    if (!groups[key]) groups[key] = [];
    groups[key].push(badge);
  }
  return groups;
}

export default function BadgesPage() {
  const { hasBadge, totalBadges } = useProgress();
  const grouped = groupBadgesByColor();

  return (
    <div className="min-h-screen py-10">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <span className="text-5xl block mb-3">🏆</span>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">Your Sticker Book</h1>
          <p className="text-muted-foreground text-lg mb-6">
            {totalBadges} of {badges.length} earned — collect them all!
          </p>

          {/* Parent actions */}
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

        {/* Sticker book grid grouped by category */}
        <div className="space-y-8">
          {Object.entries(grouped).map(([color, groupBadges]) => (
            <motion.section
              key={color}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                {categoryLabels[color] || color}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {groupBadges.map((badge, i) => (
                  <BadgeCard key={badge.id} badge={badge} earned={hasBadge(badge.id)} index={i} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
