const flashcardsEn = {
  ui: {
    title: "Block Flashcards",
    subtitle: "Every ScratchJr block — its name, its colour, and exactly what it does in plain language. Print, cut, and keep next to the tablet.",
    tapToFlip: "Tap to flip →",
    printButton: "Print All Flashcards",
    printMeta: "· {{count}} cards · 6 colour groups",
    show: "Show:",
    allBlocks: "All blocks",
    printTitle: "ScratchJr Block Flashcards",
    ctaTitle: "Ready to use these blocks?",
    ctaDesc: "Open this page on your phone next to the tablet. When a child asks \"what does this block do?\" — look it up together!",
    tips: {
      print: { title: "Print & cut", desc: "Print this page, cut along each card border. Works in black & white too." },
      stack: { title: "Reference stack", desc: "Keep the cards rubber-banded next to the tablet. Grab the right colour when stuck." },
      quiz: { title: "Quiz game", desc: "One person picks a card and mimes the block's effect — the other guesses the name!" },
      sort: { title: "Sort by colour", desc: "Group cards by colour family — Blue for moving, Purple for looking, Green for sound…" },
    },
  },
  categories: {
    trigger: { label: "Trigger Blocks", shortLabel: "Trigger", tagline: "Yellow · Go at the START of every script · These make things begin" },
    motion: { label: "Motion Blocks", shortLabel: "Motion", tagline: "Blue · Move characters around the stage" },
    looks: { label: "Looks Blocks", shortLabel: "Looks", tagline: "Purple · Change how characters look" },
    sound: { label: "Sound Blocks", shortLabel: "Sound", tagline: "Green · Add sounds, music & voice" },
    control: { label: "Control Blocks", shortLabel: "Control", tagline: "Orange · Control timing, repeating & messages" },
    end: { label: "End Blocks", shortLabel: "End", tagline: "Red · Go at the END of a script · These finish things off" },
  },
  blocks: {} as Record<string, { fullName: string; description: string; tip: string; note: string }>,
};

export default flashcardsEn;
