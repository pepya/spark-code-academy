import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckSquare,
  ChevronDown,
  MessageCircle,
  Wrench,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

// ─── Weekly Progress Checklist Data ───
interface ChecklistItem {
  text: string;
  type: "SKILL" | "SOCIAL" | "MINDSET";
}

interface WeekChecklist {
  week: number;
  title: string;
  emoji: string;
  subtitle: string;
  items: ChecklistItem[];
}

const weeklyChecklists: WeekChecklist[] = [
  {
    week: 1, title: "Hello, ScratchJr!", emoji: "🐱", subtitle: "Motion · Looks · Triggers",
    items: [
      { text: "Can identify Stage, Blocks panel, and Characters tray by name", type: "SKILL" },
      { text: "Can drag and connect at least 3 blocks in sequence", type: "SKILL" },
      { text: "Understands a trigger block must start every script", type: "SKILL" },
      { text: "Uses grow, shrink, say, hide/show blocks", type: "SKILL" },
      { text: "Drew and saved their own character", type: "SOCIAL" },
      { text: "Tries things without waiting for permission", type: "MINDSET" },
      { text: "Can explain their project to a parent in their own words", type: "SOCIAL" },
      { text: "Reacts to unexpected results with curiosity, not just frustration", type: "MINDSET" },
    ],
  },
  {
    week: 2, title: "Tell a Story!", emoji: "🦁", subtitle: "Pages · Dialogue · Timing",
    items: [
      { text: "Can add and navigate between multiple pages", type: "SKILL" },
      { text: 'Uses "go to page" block to connect scenes', type: "SKILL" },
      { text: "Builds dialogue with two characters taking turns using wait blocks", type: "SKILL" },
      { text: "Adjusts wait timing to feel natural", type: "SKILL" },
      { text: "Plans a story on paper before building in ScratchJr", type: "MINDSET" },
      { text: "Can narrate their story aloud while it plays", type: "SOCIAL" },
      { text: "Designed and drew a custom background", type: "SKILL" },
    ],
  },
  {
    week: 3, title: "Loops & Repeats!", emoji: "🔁", subtitle: "Repeat · Forever · Patterns",
    items: [
      { text: 'Explains why loops are useful ("less blocks for more repetitions")', type: "SKILL" },
      { text: "Correctly places blocks INSIDE a repeat loop", type: "SKILL" },
      { text: "Uses forever loop for continuous animation", type: "SKILL" },
      { text: "Can stop a forever loop with the red stop button", type: "SKILL" },
      { text: "Runs multiple loops simultaneously on different characters", type: "SKILL" },
      { text: "Predicts what a loop will do before running it", type: "MINDSET" },
      { text: "Performs their dance show for family enthusiastically", type: "SOCIAL" },
    ],
  },
  {
    week: 4, title: "Messages!", emoji: "📨", subtitle: "Send · Receive · Interaction",
    items: [
      { text: "Understands: sender and receiver must match in colour", type: "SKILL" },
      { text: "Builds a 2-character message interaction successfully", type: "SKILL" },
      { text: "Creates a 3+ character chain reaction", type: "SKILL" },
      { text: "Uses tap trigger to create interactive content", type: "SKILL" },
      { text: "Builds a simple tap-to-win game with a reaction", type: "SKILL" },
      { text: 'Can explain "event-driven" in their own words', type: "MINDSET" },
      { text: "Designs an interactive story with at least 2 different paths", type: "SKILL" },
    ],
  },
  {
    week: 5, title: "Sound & Music!", emoji: "🎵", subtitle: "Effects · Recording · Sync",
    items: [
      { text: "Adds library sounds to characters and triggers them", type: "SKILL" },
      { text: "Records their own voice and attaches it to a character", type: "SKILL" },
      { text: "Builds a 4-note tap instrument", type: "SKILL" },
      { text: "Synchronises a sound with a motion event", type: "SKILL" },
      { text: "Creates an original song or poem for their music video", type: "SOCIAL" },
      { text: "Performs their music video for the family", type: "SOCIAL" },
    ],
  },
  {
    week: 6, title: "Grand Finale!", emoji: "🏆", subtitle: "Independent design + presentation",
    items: [
      { text: "Plans project on paper before opening the tablet", type: "MINDSET" },
      { text: "Completes all art assets (characters + backgrounds) independently", type: "SKILL" },
      { text: "Adds code (motion, loops, messages, sound) without guided steps", type: "SKILL" },
      { text: "Identifies and fixes at least one bug on their own", type: "MINDSET" },
      { text: 'Adds title screen with name and "The End" page', type: "SKILL" },
      { text: "Presents project to family confidently", type: "SOCIAL" },
      { text: "Can answer "what was hardest?" and "what are you most proud of?"", type: "SOCIAL" },
      { text: "Talks about what they want to learn or build NEXT", type: "MINDSET" },
    ],
  },
];

// ─── Teacher Mindset Phrases Data ───
interface MindsetPhrase {
  emoji: string;
  situation: string;
  doSay: string;
  dontSay: string;
}

const mindsetPhrases: MindsetPhrase[] = [
  { emoji: "🐛", situation: "When something breaks", doSay: "Ooh, interesting! Something unexpected happened. Let's be detectives — what did you WANT to happen?", dontSay: "\"Let me fix that for you.\" / \"You did it wrong.\"" },
  { emoji: "😤", situation: "When they're frustrated", doSay: "Debugging is the hardest part — even professionals feel this. What ONE small thing can we fix right now?", dontSay: "\"It's easy, look...\" / \"Don't worry, I'll do it.\"" },
  { emoji: "⭐", situation: "When they succeed", doSay: "You figured that out! How did you know to try that? (Praise the process, not the result)", dontSay: "\"Good job!\" (too generic — doesn't build growth mindset)" },
  { emoji: "🤔", situation: "When they're stuck", doSay: "What have you tried so far? What's one thing you HAVEN'T tried yet?", dontSay: "Immediately pointing to the answer or clicking for them." },
  { emoji: "💡", situation: "When they have a big idea", doSay: "I love that! What's the FIRST step to make that happen? Just the first one.", dontSay: "\"That might be too complicated.\" / \"Let's do something simpler.\"" },
  { emoji: "🏁", situation: "End of each session", doSay: "What's one thing you made today that didn't exist this morning? That's incredible.", dontSay: "" },
];

// ─── Common Problems Data ───
interface Problem {
  emoji: string;
  title: string;
  causes: string[];
  prompt: string;
}

const commonProblems: Problem[] = [
  { emoji: "😤", title: "\"Nothing is happening when I press play!\"", causes: ["No trigger block — check if the script starts with a yellow block (green flag or tap)", "Blocks aren't snapped together — tap and drag to re-connect them", "Wrong character selected — make sure you're editing the character you want to move"], prompt: "\"What does the FIRST block in your script look like? Is it yellow?\"" },
  { emoji: "😵", title: "\"My character runs off the screen!\"", causes: ["Move number is too high — reduce from 10 to 3 or 4", "Direction keeps going one way — alternate left/right to keep it on screen", "Forever loop going one direction — character will always exit eventually"], prompt: "\"What number makes it go a little bit? What number makes it go TOO much?\"" },
  { emoji: "📨", title: "\"My message isn't working!\"", causes: ["Message colours don't match — sender and receiver MUST be the same colour dot", "Receiver has no trigger — it needs a \"when I receive [colour]\" block", "Receiver script is on the wrong character"], prompt: "\"What colour is the SEND block? What colour is the RECEIVE block? Are they matching?\"" },
  { emoji: "🔁", title: "\"My loop runs too fast!\"", causes: ["Add a small WAIT block (1-2 taps) inside the loop to slow it down", "Reduce movement speed (lower numbers on move blocks)", "This is actually fine! Fast loops create smooth animations"], prompt: "\"Do you want it to be fast like a machine or slow like a dance? Let's try both!\"" },
  { emoji: "📄", title: "\"My page jump doesn't go to the right page!\"", causes: ["Check the number in the \"go to page\" block", "Pages are in the wrong order in the tray — drag to reorder", "Trigger isn't at the very beginning of the script"], prompt: "\"Which page do you WANT to jump to? What number is that page in the list?\"" },
  { emoji: "😩", title: "\"I deleted something by accident!\"", causes: ["Shake the device — ScratchJr has an undo shake feature!", "If not available: breathe. Rebuilding is practice — most kids do it faster the second time", "Save more often! Teach the habit: \"build a bit, save a bit\""], prompt: "\"That's frustrating! Can you remember what it looked like? Let's rebuild it together!\"" },
  { emoji: "🎤", title: "\"The voice recording doesn't save!\"", causes: ["Check microphone permissions — go to device Settings → ScratchJr → allow microphone", "Record in a quiet space — background noise can cause issues", "Speak louder and closer to the mic — hold the device 20cm from the mouth"], prompt: "\"Let's try recording in a quieter spot — and speak like you're telling the whole class!\"" },
  { emoji: "🧠", title: "\"The child is frustrated and wants to quit!\"", causes: ["Step away from the tablet for 5 minutes — physical movement helps reset", "Reduce scope: \"Let's just make ONE thing work today\"", "Switch to drawing: \"Let's design the characters and come back to code\"", "Validate the feeling: \"Debugging is the hardest part. Even professionals feel this!\""], prompt: "\"What ONE small part would you like to get working? Just one thing.\"" },
  { emoji: "⚡", title: "\"The child is bored — flying through the material!\"", causes: ["Add more characters — \"Can you make 5 things happen at the same time?\"", "Make it interactive — \"Can a viewer make choices in your story?\"", "Combine skills from multiple weeks in one project", "Let them teach YOU — \"Show me how you did that\""], prompt: "\"You've mastered this! Now make it THREE TIMES harder or more interesting.\"" },
];

// ─── Type badge colors ───
const typeBadge: Record<string, string> = {
  SKILL: "bg-primary/15 text-primary",
  SOCIAL: "bg-accent/15 text-accent-foreground",
  MINDSET: "bg-secondary text-secondary-foreground",
};

// ─── Component ───
export default function ParentResourcesPage() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);

  const toggleCheck = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen py-10">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-5xl block mb-3">🧰</span>
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">Parent & Teacher Resources</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Progress checklists, guiding phrases, and troubleshooting tips to support your child's learning journey.
          </p>
        </motion.div>

        {/* ───── Section 1: Weekly Progress Checklist ───── */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <CheckSquare className="text-primary" size={20} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Weekly Progress Checklist</h2>
              <p className="text-sm text-muted-foreground">Tick off as your child demonstrates each skill</p>
            </div>
          </div>

          <div className="flex gap-2 mb-4 flex-wrap">
            {Object.entries(typeBadge).map(([type, cls]) => (
              <span key={type} className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${cls}`}>{type}</span>
            ))}
          </div>

          <div className="space-y-3">
            {weeklyChecklists.map((week) => {
              const isOpen = expandedWeek === week.week;
              const weekCheckedCount = week.items.filter((_, idx) => checked[`${week.week}-${idx}`]).length;

              return (
                <motion.div key={week.week} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm" layout>
                  <button
                    onClick={() => setExpandedWeek(isOpen ? null : week.week)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-2xl">{week.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-foreground">Week {week.week} — {week.title}</p>
                      <p className="text-xs text-muted-foreground">{week.subtitle}</p>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{weekCheckedCount}/{week.items.length}</span>
                    <ChevronDown size={18} className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <div className="px-5 pb-5 space-y-2">
                          {week.items.map((item, idx) => {
                            const key = `${week.week}-${idx}`;
                            const done = !!checked[key];
                            return (
                              <button key={idx} onClick={() => toggleCheck(key)} className={`w-full flex items-start gap-3 text-left p-3 rounded-xl transition-colors ${done ? "bg-primary/5" : "hover:bg-muted/50"}`}>
                                <CheckCircle2 size={18} className={`mt-0.5 flex-shrink-0 transition-colors ${done ? "text-primary" : "text-muted-foreground/40"}`} />
                                <span className={`text-sm flex-1 ${done ? "line-through text-muted-foreground" : "text-foreground"}`}>{item.text}</span>
                                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 ${typeBadge[item.type]}`}>{item.type}</span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ───── Section 2: Teacher Mindset Phrases ───── */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <MessageCircle className="text-accent-foreground" size={20} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">What to Say Instead</h2>
              <p className="text-sm text-muted-foreground">Teacher mindset phrases that stimulate and engage</p>
            </div>
          </div>

          <div className="space-y-4">
            {mindsetPhrases.map((phrase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{phrase.emoji}</span>
                  <h3 className="font-display font-bold text-foreground">{phrase.situation}</h3>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 mb-3">
                  <p className="text-sm text-foreground">
                    <span className="font-bold text-primary">✅ Say:</span> "{phrase.doSay}"
                  </p>
                </div>

                {phrase.dontSay && (
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl px-4 py-3">
                    <p className="text-sm text-foreground">
                      <span className="font-bold text-destructive">❌ Avoid:</span> {phrase.dontSay}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ───── Section 3: Common Problems & Fixes ───── */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
              <Wrench className="text-destructive" size={20} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Common Problems & Fixes</h2>
              <p className="text-sm text-muted-foreground">Quick tips for issues your child may face during learning</p>
            </div>
          </div>

          <div className="space-y-3">
            {commonProblems.map((problem, i) => {
              const isOpen = expandedProblem === i;
              return (
                <motion.div key={i} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm" layout>
                  <button
                    onClick={() => setExpandedProblem(isOpen ? null : i)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-xl">{problem.emoji}</span>
                    <h4 className="flex-1 font-display font-bold text-foreground text-sm">{problem.title}</h4>
                    <ChevronDown size={18} className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <div className="px-5 pb-5 space-y-3">
                          <div className="space-y-2">
                            {problem.causes.map((cause, j) => (
                              <div key={j} className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground mt-0.5">{j + 1}</span>
                                <p className="text-sm text-foreground">{cause}</p>
                              </div>
                            ))}
                          </div>
                          <div className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 flex items-start gap-2">
                            <Lightbulb size={14} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-foreground italic">{problem.prompt}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
