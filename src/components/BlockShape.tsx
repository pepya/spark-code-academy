import type { BlockCategory } from "@/data/blockFlashcards";

interface BlockShapeProps {
  emoji: string;
  name: string;
  category: BlockCategory;
  hasNumber?: boolean;
}

const categoryStyles: Record<string, { bg: string; border: string; text: string; numBg: string }> = {
  trigger: { bg: "#FDE68A", border: "#F59E0B", text: "#78350F", numBg: "#FCD34D" },
  motion: { bg: "#93C5FD", border: "#3B82F6", text: "#1E3A5F", numBg: "#60A5FA" },
  looks: { bg: "#C4B5FD", border: "#8B5CF6", text: "#3B1F7E", numBg: "#A78BFA" },
  sound: { bg: "#86EFAC", border: "#22C55E", text: "#14532D", numBg: "#4ADE80" },
  control: { bg: "#FDBA74", border: "#F97316", text: "#7C2D12", numBg: "#FB923C" },
  end: { bg: "#FCA5A5", border: "#EF4444", text: "#7F1D1D", numBg: "#F87171" },
};

export default function BlockShape({ emoji, name, category, hasNumber }: BlockShapeProps) {
  const style = categoryStyles[category.id] || categoryStyles.motion;
  const isTrigger = category.id === "trigger";
  const isEnd = category.id === "end";

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative inline-flex items-center gap-1.5 px-3 py-2 font-bold text-sm select-none"
        style={{
          backgroundColor: style.bg,
          border: `2px solid ${style.border}`,
          color: style.text,
          borderRadius: isTrigger ? "12px 8px 8px 2px" : isEnd ? "8px 12px 2px 8px" : "8px",
          boxShadow: `0 2px 0 ${style.border}`,
          minWidth: "90px",
        }}
      >
        {/* Left notch for non-trigger blocks */}
        {!isTrigger && (
          <div
            className="absolute -left-[2px] top-1/2 -translate-y-1/2"
            style={{
              width: 8,
              height: 14,
              backgroundColor: style.bg,
              borderTop: `2px solid ${style.border}`,
              borderBottom: `2px solid ${style.border}`,
              borderLeft: `2px solid ${style.border}`,
              borderRadius: "4px 0 0 4px",
            }}
          />
        )}

        {/* Right slot for non-end blocks */}
        {!isEnd && (
          <div
            className="absolute -right-[2px] top-1/2 -translate-y-1/2"
            style={{
              width: 8,
              height: 14,
              backgroundColor: "white",
              border: `2px solid ${style.border}`,
              borderRight: "none",
              borderRadius: "4px 0 0 4px",
              opacity: 0.6,
            }}
          />
        )}

        <span className="text-base leading-none">{emoji}</span>
        <span className="whitespace-nowrap text-xs font-bold">{name}</span>

        {hasNumber && (
          <span
            className="inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold ml-0.5"
            style={{
              backgroundColor: style.numBg,
              border: `1.5px solid ${style.border}`,
              color: style.text,
            }}
          >
            1
          </span>
        )}
      </div>
    </div>
  );
}
