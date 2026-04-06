import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { projectIdeas, weekColors, difficultyConfig, type Difficulty } from "@/data/projectGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, Star, Filter } from "lucide-react";

const weekLabels = ["All projects", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"];
const weekEmojis = ["⭐", "🔵", "🟢", "🟣", "🟠", "🩵", "🔴"];

export default function ProjectGalleryPage() {
  const { t } = useTranslation();
  const [activeWeek, setActiveWeek] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeWeek
    ? projectIdeas.filter((p) => p.week === activeWeek)
    : projectIdeas;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-10">
        <p className="text-muted-foreground text-sm mb-1">🎨 Spark Their Imagination</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Project <span className="italic text-primary">Gallery</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Stuck on what to make? Browse 18 ready-to-build project ideas — one for every mood, matched to your current week.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 mt-6">
          {[
            { value: "18", label: "Project Ideas" },
            { value: "6", label: "Weeks Covered" },
            { value: "3", label: "Difficulty Levels" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <Filter className="h-4 w-4 text-muted-foreground" />
        {weekLabels.map((label, i) => {
          const week = i === 0 ? null : i;
          const isActive = activeWeek === week;
          return (
            <Button
              key={i}
              size="sm"
              variant={isActive ? "default" : "outline"}
              onClick={() => setActiveWeek(week)}
              className="text-xs"
            >
              {weekEmojis[i]} {label}
            </Button>
          );
        })}
      </div>

      {/* Project Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          🔍 No projects match this filter. Try a different week!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => {
            const diff = difficultyConfig[project.difficulty];
            const wc = weekColors[project.week];
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card
                  className="h-full cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary/30"
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                >
                  {/* Scene Preview */}
                  <div className="flex items-center justify-center gap-2 text-3xl py-4 bg-muted/30 rounded-t-lg">
                    {project.sceneEmojis.map((e, i) => (
                      <span key={i}>{e}</span>
                    ))}
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className={`text-[10px] ${wc}`}>
                        Week {project.week}
                      </Badge>
                      <Badge variant="secondary" className="text-[10px]">
                        {project.genreEmoji} {project.genre}
                      </Badge>
                      <span className={`text-[10px] ${diff.color}`}>
                        {"⭐".repeat(diff.stars)} {diff.label}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                    {/* Blocks used */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.blocks.map((b) => (
                        <Badge key={b} variant="outline" className="text-[10px] font-normal">
                          {b}
                        </Badge>
                      ))}
                    </div>

                    {/* Expandable steps */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="border-t pt-3 mt-2"
                      >
                        <p className="text-xs font-semibold mb-2 flex items-center gap-1">
                          <Lightbulb className="h-3 w-3" /> Quick start steps
                        </p>
                        <ol className="space-y-2">
                          {project.steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-12 p-6 bg-muted/30 rounded-xl">
        <h2 className="text-xl font-bold mb-2">Ready to Build? 🚀</h2>
        <p className="text-sm text-muted-foreground">
          Pick your favourite project above, then grab the activity card for that week. The cards walk you through every step.
        </p>
      </div>
    </div>
  );
}
