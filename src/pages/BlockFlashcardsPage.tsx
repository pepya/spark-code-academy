import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Printer, Lightbulb, Info, Filter } from "lucide-react";
import { blockCategories, BlockCard, BlockCategory } from "@/data/blockFlashcards";

function FlashCard({ block, category }: { block: BlockCard; category: BlockCategory }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-64 sm:h-72"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 ${category.borderColor} ${category.color} p-5 flex flex-col items-center justify-center text-center backface-hidden`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-5xl mb-3">{block.emoji}</span>
          <h3 className={`font-display text-xl font-bold ${category.textColor}`}>{block.name}</h3>
          <p className="text-xs text-muted-foreground mt-2">{block.fullName}</p>
          <p className="text-xs text-muted-foreground mt-3 italic">Tap to flip →</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 ${category.borderColor} bg-card p-5 flex flex-col justify-between backface-hidden overflow-y-auto`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${category.color} ${category.textColor} mb-2`}>
              {category.label}
            </div>
            <h4 className="font-display font-bold text-foreground text-base mb-2">{block.fullName}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{block.description}</p>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex gap-2 items-start text-xs">
              <Lightbulb size={14} className="text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{block.tip}</span>
            </div>
            <div className="flex gap-2 items-start text-xs">
              <Info size={14} className="text-muted-foreground flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{block.note}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Print-only card (no flip, shows all info)
function PrintCard({ block, category }: { block: BlockCard; category: BlockCategory }) {
  return (
    <div className={`border-2 ${category.borderColor} rounded-xl p-4 break-inside-avoid`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{block.emoji}</span>
        <div>
          <h4 className="font-bold text-sm">{block.fullName}</h4>
          <span className={`text-xs ${category.textColor}`}>{category.label}</span>
        </div>
      </div>
      <p className="text-xs mb-2">{block.description}</p>
      <p className="text-xs italic">💡 {block.tip}</p>
    </div>
  );
}

export default function BlockFlashcardsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const printRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === "all"
    ? blockCategories
    : blockCategories.filter((c) => c.id === activeFilter);

  const totalBlocks = blockCategories.reduce((sum, c) => sum + c.blocks.length, 0);

  const handlePrint = () => window.print();

  return (
    <>
      <div className="min-h-screen py-10 print:hidden">
        <div className="container max-w-6xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <span className="text-5xl block mb-3">🃏</span>
            <h1 className="font-display text-4xl font-bold text-foreground mb-3">Block Flashcards</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every ScratchJr block — its name, its colour, and exactly what it does in plain language. Print, cut, and keep next to the tablet.
            </p>
          </motion.div>

          {/* Usage tips */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { emoji: "✂️", title: "Print & cut", desc: "Print this page, cut along each card border. Works in black & white too." },
              { emoji: "📚", title: "Reference stack", desc: "Keep the cards rubber-banded next to the tablet. Grab the right colour when stuck." },
              { emoji: "🎮", title: "Quiz game", desc: "One person picks a card and mimes the block's effect — the other guesses the name!" },
              { emoji: "🗂️", title: "Sort by colour", desc: "Group cards by colour family — Blue for moving, Purple for looking, Green for sound…" },
            ].map((t) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border p-4 text-center"
              >
                <span className="text-2xl block mb-2">{t.emoji}</span>
                <h3 className="font-display font-bold text-sm text-foreground mb-1">{t.title}</h3>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Print button + filter */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-display font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <Printer size={16} />
              Print All Flashcards
              <span className="text-xs opacity-80">· {totalBlocks} cards · 6 colour groups</span>
            </button>

            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground mr-1">Show:</span>
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  activeFilter === "all" ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                All blocks
              </button>
              {blockCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveFilter(c.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                    activeFilter === c.id ? `${c.color} ${c.textColor}` : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {c.label.replace(" Blocks", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            {filtered.map((category) => (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${category.color} border ${category.borderColor}`} />
                  <h2 className="font-display text-2xl font-bold text-foreground">{category.label}</h2>
                </div>
                <p className={`text-sm ${category.textColor} mb-6`}>{category.tagline}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {category.blocks.map((block) => (
                    <FlashCard key={block.name} block={block} category={category} />
                  ))}
                </div>
              </motion.section>
            ))}
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 bg-primary/5 rounded-2xl p-8 border border-primary/20"
          >
            <span className="text-4xl block mb-3">🚀</span>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Ready to use these blocks?</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Open this page on your phone next to the tablet. When a child asks "what does this block do?" — look it up together!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Print-only layout */}
      <div className="hidden print:block p-4" ref={printRef}>
        <h1 className="text-2xl font-bold mb-4 text-center">ScratchJr Block Flashcards</h1>
        {blockCategories.map((category) => (
          <div key={category.id} className="mb-6">
            <h2 className="text-lg font-bold mb-2">{category.label}</h2>
            <div className="grid grid-cols-2 gap-3">
              {category.blocks.map((block) => (
                <PrintCard key={block.name} block={block} category={category} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
