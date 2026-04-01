import { motion } from "framer-motion";
import { BookOpen, Shield, Clock, MessageCircle } from "lucide-react";

const tips = [
  { icon: BookOpen, title: "Guided Lessons", desc: "Each lesson has simple, step-by-step instructions designed for ages 6–12. Kids can follow along at their own pace." },
  { icon: Shield, title: "Safe & Ad-Free", desc: "This platform is completely free, with no ads or tracking. Kids can explore and learn safely." },
  { icon: Clock, title: "Short Sessions", desc: "Lessons take 10–20 minutes each. Perfect for attention spans of young learners." },
  { icon: MessageCircle, title: "No Account Needed", desc: "Progress is saved locally in the browser. No sign-ups, no emails, no passwords." },
];

export default function ParentsPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-5xl block mb-3">👨‍👩‍👧‍👦</span>
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">For Parents & Teachers</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to know about helping your child learn to code with Scratch.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <tip.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{tip.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-2xl p-8 border border-primary/20"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">How to Use This Platform</h2>
          <ol className="space-y-4 text-foreground">
            {[
              "Start with the Beginner lessons — they introduce Scratch basics step by step.",
              "Let your child work through the steps at their own pace. No rush!",
              "Click 'Open Scratch Editor' to practice in the real Scratch environment.",
              "Each lesson has a quiz to check understanding before earning a badge.",
              "Celebrate badges together — they show real progress!",
              "Move to Intermediate and Advanced when ready."
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <div className="mt-12 text-center">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">What is Scratch?</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-4">
            Scratch is a free programming language developed by MIT. It lets kids create interactive stories, games, and animations by snapping colorful blocks together.
          </p>
          <a
            href="https://scratch.mit.edu/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Learn more about Scratch →
          </a>
        </div>
      </div>
    </div>
  );
}
