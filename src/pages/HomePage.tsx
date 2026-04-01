import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { lessons } from "@/data/lessons";
import { Play, Award, BookOpen, Sparkles } from "lucide-react";

export default function HomePage() {
  const { totalCompleted, totalBadges } = useProgress();
  const percentage = Math.round((totalCompleted / lessons.length) * 100);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        {/* Floating blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 blob-shape animate-float" />
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-secondary/20 blob-shape animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-coral/20 blob-shape animate-float" style={{ animationDelay: "2s" }} />

        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-6xl md:text-8xl block mb-4">🐱</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Scratch for Juniors
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 font-body">
              Learn to code by creating games, animations, and stories! 
              Fun lessons for kids ages 6–12.
            </p>
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-display font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Play size={22} /> Start Learning!
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      {totalCompleted > 0 && (
        <section className="container -mt-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-border"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">Welcome back!</p>
                <p className="text-sm text-muted-foreground">You've completed {totalCompleted} of {lessons.length} lessons</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-primary">{percentage}%</p>
                <p className="text-xs text-muted-foreground">Progress</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-accent">{totalBadges}</p>
                <p className="text-xs text-muted-foreground">Badges</p>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* What you'll learn */}
      <section className="container py-16 md:py-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">What you'll learn</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Master the basics of coding with fun, step-by-step lessons</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "🧩", title: "Block Coding", desc: "Snap colorful blocks together to build programs — no typing needed!", color: "primary" },
            { icon: "🎮", title: "Create Games", desc: "Build your own games with characters, scores, and sound effects!", color: "secondary" },
            { icon: "🎨", title: "Art & Animation", desc: "Draw pictures and create animations with code!", color: "coral" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 text-center border border-border shadow-sm hover-bounce"
            >
              <span className="text-5xl mb-4 block">{item.icon}</span>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured lessons */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Featured Lessons</h2>
            <p className="text-muted-foreground text-lg">Start with these popular lessons</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.slice(0, 3).map((lesson, i) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/lessons/${lesson.id}`} className="block bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover-bounce transition-all">
                  <div className="gradient-card-beginner h-24 flex items-center justify-center">
                    <span className="text-5xl">{lesson.icon}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{lesson.title}</h3>
                    <p className="text-sm text-muted-foreground">{lesson.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/lessons" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform">
              <BookOpen size={18} /> See All Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-20 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to start coding?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Jump in and create your first project in minutes. It's free and fun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lessons" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform text-lg">
              <Play size={20} /> Start Learning
            </Link>
            <Link to="/parents" className="inline-flex items-center gap-2 bg-card text-foreground border-2 border-border font-display font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform text-lg">
              <Award size={20} /> For Parents
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-8">
        <div className="container text-center">
          <p className="font-display font-bold text-lg mb-1">🐱 Scratch for Juniors</p>
          <p className="text-sm opacity-70">Learn to code with fun! Built with ❤️ for young coders.</p>
        </div>
      </footer>
    </div>
  );
}
