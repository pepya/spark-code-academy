import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Props {
  level: string;
  badgeCount: number;
  totalBadges: number;
}

export default function CertificateGenerator({ level, badgeCount, totalBadges }: Props) {
  const [childName, setChildName] = useState("");
  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    const name = childName.trim() || "Junior Coder";
    const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#e0f2fe"/>
            <stop offset="100%" style="stop-color:#dbeafe"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#bg)" rx="20"/>
        <rect x="20" y="20" width="760" height="560" fill="none" stroke="#3b82f6" stroke-width="3" rx="15" stroke-dasharray="10,5"/>
        <text x="400" y="80" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#64748b">🏆 CERTIFICATE OF ACHIEVEMENT 🏆</text>
        <text x="400" y="140" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#94a3b8">This certifies that</text>
        <text x="400" y="200" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#1e40af" font-weight="bold">${escapeXml(name)}</text>
        <line x1="200" y1="215" x2="600" y2="215" stroke="#3b82f6" stroke-width="1"/>
        <text x="400" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#334155">has successfully completed the</text>
        <text x="400" y="310" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#059669" font-weight="bold">${escapeXml(level)}</text>
        <text x="400" y="355" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#334155">curriculum at CodyLab Juniors</text>
        <text x="400" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#334155">earning ${badgeCount} of ${totalBadges} badges</text>
        <text x="400" y="440" text-anchor="middle" font-size="40">⭐🎉🚀</text>
        <text x="400" y="500" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#64748b">${escapeXml(date)}</text>
        <text x="400" y="540" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#94a3b8">CodyLab Juniors — Turn Screen Time into Creative Time</text>
      </svg>`;

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `CodyLab-Certificate-${name.replace(/\s+/g, "-")}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          🎓 Download Certificate
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display">🎓 Print Your Certificate</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter your child's name to generate a printable certificate of achievement!
          </p>
          <Input
            placeholder="Child's name"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="text-lg"
          />
          <Button onClick={handleDownload} className="w-full gap-2">
            📄 Generate & Download
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function escapeXml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
