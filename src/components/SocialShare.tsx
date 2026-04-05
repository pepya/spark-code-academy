import { Button } from "@/components/ui/button";

interface Props {
  badgeCount: number;
  totalBadges: number;
}

export default function SocialShare({ badgeCount, totalBadges }: Props) {
  const message = `My junior just earned ${badgeCount} Coding Badge${badgeCount !== 1 ? "s" : ""} at CodyLab Juniors! 🚀 ${badgeCount}/${totalBadges} collected. Turn Screen Time into Creative Time! #CodyLabJuniors #KidsCoding`;
  const url = "https://codylabjuniors.lovable.app";

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const copyForInstagram = async () => {
    try {
      await navigator.clipboard.writeText(message);
      alert("Message copied! Paste it into your Instagram post or story. 📸");
    } catch {
      prompt("Copy this message for Instagram:", message);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={shareToFacebook} className="gap-2 text-sm">
        📘 Share on Facebook
      </Button>
      <Button variant="outline" onClick={copyForInstagram} className="gap-2 text-sm">
        📷 Copy for Instagram
      </Button>
    </div>
  );
}
