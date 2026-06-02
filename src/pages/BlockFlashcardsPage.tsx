import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Printer, Lightbulb, Info, Filter } from "lucide-react";
import { useTranslation } from "react-i18next";
import BlockShape from "@/components/BlockShape";
import { blockCategories, BlockCard, BlockCategory } from "@/data/blockFlashcards";

function FlashCard({ block, category }: { block: BlockCard; category: BlockCategory }) {
  const [flipped, setFlipped] = useState(false);
  const { t } = useTranslation();

  const fullName = t(`flashcardsPage.blocks.${block.id}.fullName`, block.fullName);
  const description = t(`flashcardsPage.blocks.${block.id}.description`, block.description);
  const tip = t(`flashcardsPage.blocks.${block.id}.tip`, block.tip);
  const note = t(`flashcardsPage.blocks.${block.id}.note`, block.note);
  const categoryLabel = t(`flashcardsPage.categories.${category.id}.label`, category.label);

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
          <div className="mb-3 transform scale-125">
            <BlockShape emoji={block.emoji} name={block.name} category={category} hasNumber={block.hasNumber} />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{fullName}</p>
          <p className="text-xs text-muted-foreground mt-3 italic">{t("flashcardsPage.ui.tapToFlip")}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 ${category.borderColor} bg-card p-5 flex flex-col justify-between backface-hidden overflow-y-auto`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${category.color} ${category.textColor} mb-2`}>
              {categoryLabel}
            </div>
            <h4 className="font-display font-bold text-foreground text-base mb-2">{fullName}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex gap-2 items-start text-xs">
              <Lightbulb size={14} className="text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{tip}</span>
            </div>
            <div className="flex gap-2 items-start text-xs">
              <Info size={14} className="text-muted-foreground flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{note}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Print-only card (no flip, shows all info)
function PrintCard({ block, category }: { block: BlockCard; category: BlockCategory }) {
  const { t } = useTranslation();
  const fullName = t(`flashcardsPage.blocks.${block.id}.fullName`, block.fullName);
  const description = t(`flashcardsPage.blocks.${block.id}.description`, block.description);
  const tip = t(`flashcardsPage.blocks.${block.id}.tip`, block.tip);
  const categoryLabel = t(`flashcardsPage.categories.${category.id}.label`, category.label);

  return (
    <div className={`border-2 ${category.borderColor} rounded-xl p-4 break-inside-avoid`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{block.emoji}</span>
        <div>
          <h4 className="font-bold text-sm">{fullName}</h4>
          <span className={`text-xs ${category.textColor}`}>{categoryLabel}</span>
        </div>
      </div>
      <p className="text-xs mb-2">{description}</p>
      <p className="text-xs italic">💡 {tip}</p>
    </div>
  );
}

export default function BlockFlashcardsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const printRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const filtered = activeFilter === "all"
    ? blockCategories
    : blockCategories.filter((c) => c.id === activeFilter);

  const totalBlocks = blockCategories.reduce((sum, c) => sum + c.blocks.length, 0);

  const handlePrint = () => window.print();

  const tipKeys = ["print", "stack", "quiz", "sort"] as const;
  const tipEmojis: Record<string, string> = { print: "✂️", stack: "📚", quiz: "🎮", sort: "🗂️" };

  return (
    <>
      <div className="min-h-screen py-10 print:hidden">
        <div className="container max-w-6xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <span className="text-5xl block mb-3">🃏</span>
            <h1 className="font-display text-4xl font-bold text-foreground mb-3">{t("flashcardsPage.ui.title")}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("flashcardsPage.ui.subtitle")}
            </p>
          </motion.div>

          {/* Usage tips */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {tipKeys.map((key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border p-4 text-center"
              >
                <span className="text-2xl block mb-2">{tipEmojis[key]}</span>
                <h3 className="font-display font-bold text-sm text-foreground mb-1">
                  {t(`flashcardsPage.ui.tips.${key}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t(`flashcardsPage.ui.tips.${key}.desc`)}
                </p>
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
              {t("flashcardsPage.ui.printButton")}
              <span className="text-xs opacity-80">{t("flashcardsPage.ui.printMeta", { count: totalBlocks })}</span>
            </button>

            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground mr-1">{t("flashcardsPage.ui.show")}</span>
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  activeFilter === "all" ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {t("flashcardsPage.ui.allBlocks")}
              </button>
              {blockCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveFilter(c.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                    activeFilter === c.id ? `${c.color} ${c.textColor}` : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {t(`flashcardsPage.categories.${c.id}.shortLabel`, c.label.replace(" Blocks", ""))}
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
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {t(`flashcardsPage.categories.${category.id}.label`, category.label)}
                  </h2>
                </div>
                <p className={`text-sm ${category.textColor} mb-6`}>
                  {t(`flashcardsPage.categories.${category.id}.tagline`, category.tagline)}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {category.blocks.map((block) => (
                    <FlashCard key={block.id} block={block} category={category} />
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
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{t("flashcardsPage.ui.ctaTitle")}</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {t("flashcardsPage.ui.ctaDesc")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Print-only layout */}
      <div className="hidden print:block p-4" ref={printRef}>
        <h1 className="text-2xl font-bold mb-4 text-center">{t("flashcardsPage.ui.printTitle")}</h1>
        {blockCategories.map((category) => (
          <div key={category.id} className="mb-6">
            <h2 className="text-lg font-bold mb-2">
              {t(`flashcardsPage.categories.${category.id}.label`, category.label)}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {category.blocks.map((block) => (
                <PrintCard key={block.id} block={block} category={category} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
