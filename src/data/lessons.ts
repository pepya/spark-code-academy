export type Level = "beginner" | "intermediate" | "advanced";

export interface LessonStep {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Lesson {
  id: string;
  title: string;
  level: Level;
  description: string;
  icon: string;
  steps: LessonStep[];
  scratchUrl: string;
  quiz?: Quiz;
  badgeId: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const badges: Badge[] = [
  { id: "first-steps", title: "First Steps", description: "Complete your first lesson!", icon: "🐣", color: "accent" },
  { id: "mover", title: "Mover", description: "Make Scratch Cat move!", icon: "🏃", color: "secondary" },
  { id: "artist", title: "Artist", description: "Draw with code!", icon: "🎨", color: "coral" },
  { id: "musician", title: "Musician", description: "Make music with Scratch!", icon: "🎵", color: "purple" },
  { id: "storyteller", title: "Storyteller", description: "Create an interactive story!", icon: "📖", color: "primary" },
  { id: "game-maker", title: "Game Maker", description: "Build your first game!", icon: "🎮", color: "mint" },
  { id: "animator", title: "Animator", description: "Create animations!", icon: "🎬", color: "peach" },
  { id: "coder", title: "Coder", description: "Use loops and conditions!", icon: "💻", color: "sky" },
  { id: "explorer", title: "Explorer", description: "Explore advanced blocks!", icon: "🚀", color: "lavender" },
  { id: "playground-pro", title: "Playground Pro", description: "Explored the ScratchJr playground!", icon: "🛝", color: "accent" },
  { id: "story-builder", title: "Story Builder", description: "Built a multi-page story!", icon: "📖", color: "coral" },
  { id: "loop-master", title: "Loop Master", description: "Mastered loops and repeats!", icon: "🔁", color: "mint" },
  { id: "messenger", title: "Messenger", description: "Used messages between characters!", icon: "📬", color: "purple" },
  { id: "sound-designer", title: "Sound Designer", description: "Added sounds and music!", icon: "🎵", color: "peach" },
  { id: "graduate", title: "Graduate", description: "Completed the full ScratchJr program!", icon: "🎓", color: "primary" },
];

export const lessons: Lesson[] = [
  {
    id: "hello-scratch",
    title: "Hello, Scratch!",
    level: "beginner",
    description: "Learn what Scratch is and how to use it. Meet the Scratch Cat!",
    icon: "🐱",
    steps: [
      { title: "What is Scratch?", description: "Scratch is a free programming language where you can create stories, games, and animations. It uses colorful blocks that snap together like puzzle pieces!" },
      { title: "Meet Scratch Cat", description: "When you open Scratch, you'll see the Scratch Cat. This is your first sprite — a character you can program!" },
      { title: "The Stage", description: "The stage is where your project comes to life. It's like a theater stage where your sprites perform." },
      { title: "Try it!", description: "Click the green flag to start, and the red stop sign to stop. Try clicking them now!" },
    ],
    scratchUrl: "https://scratch.mit.edu/projects/editor/",
    quiz: { question: "What do we call the colorful pieces that snap together in Scratch?", options: ["Tiles", "Blocks", "Bricks", "Cards"], correctIndex: 1 },
    badgeId: "first-steps",
  },
  {
    id: "move-scratch-cat",
    title: "Make Scratch Cat Move!",
    level: "beginner",
    description: "Use motion blocks to make the cat walk, jump, and glide across the screen.",
    icon: "➡️",
    steps: [
      { title: "Motion Blocks", description: "Click on the blue 'Motion' category to find movement blocks." },
      { title: "Move 10 Steps", description: "Drag the 'move 10 steps' block to the coding area and click it. Watch the cat move!" },
      { title: "Turn and Glide", description: "Try the 'turn' block to spin the cat, and 'glide' to make it slide smoothly." },
      { title: "Challenge", description: "Can you make the cat walk in a square? Hint: Move, then turn 90 degrees, four times!" },
    ],
    scratchUrl: "https://scratch.mit.edu/projects/editor/",
    quiz: { question: "Which category has the blocks to make sprites move?", options: ["Looks", "Sound", "Motion", "Events"], correctIndex: 2 },
    badgeId: "mover",
  },
  {
    id: "draw-with-code",
    title: "Draw with Code!",
    level: "beginner",
    description: "Use the Pen extension to draw colorful shapes and patterns.",
    icon: "✏️",
    steps: [
      { title: "Add the Pen Extension", description: "Click the 'Add Extension' button and select 'Pen' to add drawing blocks." },
      { title: "Pen Down", description: "Use 'pen down' to start drawing. The sprite will leave a trail wherever it goes!" },
      { title: "Change Colors", description: "Use 'set pen color' and 'change pen color' to make colorful drawings." },
      { title: "Draw a Shape", description: "Combine move and turn blocks with pen down to draw shapes like squares and triangles." },
    ],
    scratchUrl: "https://scratch.mit.edu/projects/editor/",
    badgeId: "artist",
  },
  {
    id: "make-music",
    title: "Make Music!",
    level: "intermediate",
    description: "Create melodies and beats using sound blocks and the music extension.",
    icon: "🎶",
    steps: [
      { title: "Sound Blocks", description: "Find the 'Sound' category and try the 'play sound' block." },
      { title: "Music Extension", description: "Add the 'Music' extension to get instrument and drum blocks." },
      { title: "Play Notes", description: "Use 'play note' blocks to create a melody. Change the note number to play different pitches." },
      { title: "Create a Beat", description: "Combine drum sounds with 'wait' blocks to create a rhythm!" },
    ],
    scratchUrl: "https://scratch.mit.edu/projects/editor/",
    quiz: { question: "Which extension lets you play musical instruments?", options: ["Pen", "Music", "Video Sensing", "Text to Speech"], correctIndex: 1 },
    badgeId: "musician",
  },
  {
    id: "interactive-story",
    title: "Interactive Story",
    level: "intermediate",
    description: "Create a story where characters talk and the reader makes choices!",
    icon: "📚",
    steps: [
      { title: "Add Characters", description: "Add new sprites for your story characters from the sprite library." },
      { title: "Make Them Talk", description: "Use 'say' and 'think' blocks from the Looks category." },
      { title: "Add Backdrops", description: "Change the backdrop to set the scene. Use 'switch backdrop' blocks." },
      { title: "Ask Questions", description: "Use the 'ask' block to let the reader make choices in your story!" },
    ],
    scratchUrl: "https://scratch.mit.edu/projects/editor/",
    badgeId: "storyteller",
  },
  {
    id: "first-game",
    title: "Build a Game!",
    level: "intermediate",
    description: "Create a simple catching game with score and lives.",
    icon: "🎮",
    steps: [
      { title: "Set Up the Player", description: "Create a sprite that the player controls with arrow keys." },
      { title: "Add Falling Objects", description: "Create objects that fall from the top of the screen." },
      { title: "Keep Score", description: "Use a variable to track the score. Add 1 point when you catch an object!" },
      { title: "Add Lives", description: "Create a lives variable. Lose a life when you miss an object. Game over at 0!" },
    ],
    scratchUrl: "https://scratch.mit.edu/projects/editor/",
    quiz: { question: "What do we use to keep track of the score?", options: ["A list", "A variable", "A broadcast", "A clone"], correctIndex: 1 },
    badgeId: "game-maker",
  },
  {
    id: "animations",
    title: "Cool Animations",
    level: "advanced",
    description: "Learn to create smooth animations with costumes and effects.",
    icon: "🎬",
    steps: [
      { title: "Costume Animation", description: "Switch between costumes quickly to create animation, like a flipbook!" },
      { title: "Glide and Slide", description: "Use glide blocks for smooth movement between positions." },
      { title: "Effects", description: "Add visual effects like ghost, color change, and fisheye to sprites." },
      { title: "Animate a Scene", description: "Combine multiple sprites with timed animations to create a short cartoon!" },
    ],
    scratchUrl: "https://scratch.mit.edu/projects/editor/",
    badgeId: "animator",
  },
  {
    id: "loops-conditions",
    title: "Loops & Conditions",
    level: "advanced",
    description: "Master repeat blocks, forever loops, and if-then-else logic.",
    icon: "🔄",
    steps: [
      { title: "Repeat Blocks", description: "The 'repeat' block runs code multiple times. Great for patterns!" },
      { title: "Forever Loops", description: "'Forever' keeps running code non-stop — perfect for games." },
      { title: "If-Then", description: "The 'if-then' block checks a condition and only runs code when it's true." },
      { title: "If-Then-Else", description: "Add an 'else' to do something different when the condition is false." },
    ],
    scratchUrl: "https://scratch.mit.edu/projects/editor/",
    quiz: { question: "Which block runs code over and over without stopping?", options: ["Repeat 10", "Forever", "If-then", "Wait"], correctIndex: 1 },
    badgeId: "coder",
  },
  {
    id: "advanced-blocks",
    title: "Advanced Blocks",
    level: "advanced",
    description: "Explore cloning, custom blocks, and broadcasting messages.",
    icon: "🚀",
    steps: [
      { title: "Cloning", description: "Create copies of sprites using 'create clone' — great for bullets, enemies, and particles!" },
      { title: "Custom Blocks", description: "Make your own blocks to organize code and avoid repetition." },
      { title: "Broadcasting", description: "Send messages between sprites with 'broadcast' to coordinate actions." },
      { title: "Put It All Together", description: "Build a project that uses clones, custom blocks, and broadcasts!" },
    ],
    scratchUrl: "https://scratch.mit.edu/projects/editor/",
    badgeId: "explorer",
  },
];

export const getLessonsByLevel = (level: Level) => lessons.filter((l) => l.level === level);
