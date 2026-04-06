import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  storyCards,
  characterFields,
  characterEmotions,
  scratchActions,
  storyboardBlocks,
  scenes,
} from "@/data/creativeExpansions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Palette, Film, Printer, ChevronDown, ChevronUp } from "lucide-react";

const tools = [
  { id: "story-starters", icon: BookOpen, emoji: "📖", label: "Story Starter Cards" },
  { id: "character-sheets", icon: Palette, emoji: "🎭", label: "Character Design Sheets" },
  { id: "storyboard", icon: Film, emoji: "🎬", label: "Storyboard Template" },
];

export default function CreativeExpansionsPage() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-10">
        <p className="text-muted-foreground text-sm mb-1">🎨 Paper-First Learning Tools</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Creative Expansions</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Three printable tools that help kids plan, design, and imagine before they touch the tablet. The best projects start on paper.
        </p>
      </div>

      {/* Jump nav */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tools.map((tool) => (
          <Button key={tool.id} variant="outline" onClick={() => scrollTo(tool.id)} className="gap-2">
            <span>{tool.emoji}</span> {tool.label}
          </Button>
        ))}
      </div>

      {/* ─── TOOL 1: Story Starter Cards ─── */}
      <section id="story-starters" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="secondary" className="text-xs">📖 Tool 1 of 3</Badge>
        </div>
        <h2 className="text-2xl font-bold mb-2">Story Starter Cards</h2>
        <p className="text-muted-foreground mb-2 max-w-2xl">
          Each card gives a setting, two characters, and a conflict. Cut them out and keep them in a box. When a child is stuck for ideas, pull a card and start building!
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-6">
          <span>✂️ Print, cut out each card</span>
          <span>·</span>
          <span>📦 Keep in a story box</span>
          <span>·</span>
          <span>🎲 Pull one randomly when stuck</span>
          <span>·</span>
          <span>📱 Then open ScratchJr and build it!</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {storyCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
            >
              <Card className="h-full border-2 hover:border-primary/30 hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-[10px]">{card.id}</Badge>
                    <Badge variant="secondary" className="text-[10px]">{card.genreEmoji} {card.genre}</Badge>
                  </div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-xs text-muted-foreground">🗺️ Setting</span>
                    <p>{card.setting}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-semibold text-xs text-muted-foreground">🎭 Character 1</span>
                      <p className="text-xs">{card.character1Emoji} {card.character1}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-xs text-muted-foreground">🎭 Character 2</span>
                      <p className="text-xs">{card.character2Emoji} {card.character2}</p>
                    </div>
                  </div>
                  <div className="bg-destructive/5 border border-destructive/20 rounded-md p-2">
                    <span className="font-semibold text-xs">⚡ The Conflict</span>
                    <p className="text-xs">{card.conflict}</p>
                  </div>
                  <div className="border-t pt-2">
                    <p className="text-xs italic text-muted-foreground">✏️ Your Twist — how does it end?</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Blank card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="h-full border-2 border-dashed border-primary/30 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-3xl mb-2">✨</span>
              <p className="font-bold">Create Your Own Card!</p>
              <p className="text-xs text-muted-foreground mt-1">Write your own setting, characters, and conflict</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ─── TOOL 2: Character Design Sheet ─── */}
      <section id="character-sheets" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="secondary" className="text-xs">🎭 Tool 2 of 3</Badge>
        </div>
        <h2 className="text-2xl font-bold mb-2">Character Design Sheet</h2>
        <p className="text-muted-foreground mb-4 max-w-2xl">
          Before drawing in ScratchJr, kids design their character on paper first — just like professional game designers. Name, personality, colours, emotions.
        </p>

        {/* Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { emoji: "💡", title: "Why paper first?", desc: "Professional game designers always sketch characters before coding. It's faster to change on paper." },
            { emoji: "🎨", title: "Best for Week 1 & 6", desc: "Use before Day 1 (first character) and Week 6 Day 2 (art day). Makes tablet time smoother." },
            { emoji: "✂️", title: "How to use", desc: "Print 2–3 sheets. Fill in name, personality, colours. Draw character. Then open ScratchJr." },
          ].map((tip) => (
            <Card key={tip.title} className="p-4">
              <p className="font-semibold text-sm mb-1">{tip.emoji} {tip.title}</p>
              <p className="text-xs text-muted-foreground">{tip.desc}</p>
            </Card>
          ))}
        </div>

        {/* Example character sheet */}
        <Card className="border-2 p-6 mb-4">
          <p className="text-xs text-muted-foreground mb-3">Example — "Zara the Space Explorer"</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              {characterFields.map((f) => (
                <div key={f.label}>
                  <p className="text-xs font-semibold">{f.emoji} {f.label}</p>
                  <p className="text-sm bg-muted/50 rounded px-2 py-1">{f.example}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold mb-2">😊 Emotions this character shows</p>
                <div className="flex flex-wrap gap-2">
                  {characterEmotions.map((e, i) => (
                    <Badge key={e.label} variant={i < 3 ? "default" : "outline"} className="text-xs">
                      {e.emoji} {e.label} {i < 3 && "✓"}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold mb-2">🎮 What will this character DO in ScratchJr?</p>
                <div className="flex flex-wrap gap-1">
                  {scratchActions.map((a) => (
                    <Badge key={a} variant="outline" className="text-[10px]">{a}</Badge>
                  ))}
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-center min-h-[120px] border border-dashed">
                <div className="text-center">
                  <span className="text-4xl">🧑‍🚀</span>
                  <p className="text-xs text-muted-foreground mt-1">Purple spacesuit, star helmet, rocket boots</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* ─── TOOL 3: Storyboard Template ─── */}
      <section id="storyboard" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="secondary" className="text-xs">🎬 Tool 3 of 3</Badge>
        </div>
        <h2 className="text-2xl font-bold mb-2">Storyboard Template</h2>
        <p className="text-muted-foreground mb-4 max-w-2xl">
          A 3-panel planning sheet for the Week 6 final project — or any multi-scene project. Kids sketch each scene, write what happens, and tick which ScratchJr blocks they'll need.
        </p>

        {/* Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { emoji: "🎬", title: "Used by real filmmakers", desc: "Pixar, Disney, and every game studio uses storyboards. Now your child does too." },
            { emoji: "📅", title: "Best for Week 6 Day 1", desc: "Use on the Big Idea Planning Day. Fill it in before touching ScratchJr." },
            { emoji: "📄", title: "Print 2 copies", desc: "First copy for rough ideas. Second copy for the final plan once they've decided." },
          ].map((tip) => (
            <Card key={tip.title} className="p-4">
              <p className="font-semibold text-sm mb-1">{tip.emoji} {tip.title}</p>
              <p className="text-xs text-muted-foreground">{tip.desc}</p>
            </Card>
          ))}
        </div>

        {/* Storyboard preview */}
        <Card className="border-2 p-6">
          <div className="text-center mb-4">
            <p className="font-bold text-lg">🎬 Project Storyboard</p>
            <p className="text-xs text-muted-foreground">Plan your scenes before you build · Week 6 Final Project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-muted/30 rounded p-2 text-center border border-dashed">
              <p className="text-[10px] font-semibold">📛 Project Title</p>
            </div>
            <div className="bg-muted/30 rounded p-2 text-center border border-dashed">
              <p className="text-[10px] font-semibold">✏️ Designer's Name</p>
            </div>
            <div className="bg-muted/30 rounded p-2 text-center border border-dashed">
              <p className="text-[10px] font-semibold">🎯 Project Type</p>
            </div>
            <div className="bg-muted/30 rounded p-2 text-center border border-dashed">
              <p className="text-[10px] font-semibold">🎭 Characters</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenes.map((scene) => (
              <Card key={scene.num} className="border p-4">
                <p className="font-bold text-sm mb-3">{scene.num}. {scene.title}</p>
                <div className="bg-muted/20 rounded-lg border border-dashed min-h-[80px] flex items-center justify-center mb-3">
                  <p className="text-xs text-muted-foreground text-center px-2">🖊️ Draw what the scene looks like</p>
                </div>
                <div className="space-y-1 text-[10px] text-muted-foreground mb-3">
                  <p>📍 Where does it happen?</p>
                  <p>🎬 What happens?</p>
                  <p>💬 What is said?</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {storyboardBlocks.map((b) => (
                    <Badge key={b.label} variant="outline" className={`text-[9px] ${b.color}`}>
                      {b.emoji} {b.label}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Blocks key */}
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
            {storyboardBlocks.map((b) => (
              <span key={b.label}>{b.emoji} {b.label}</span>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
