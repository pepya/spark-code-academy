export interface StoryCard {
  id: number;
  genre: string;
  genreEmoji: string;
  title: string;
  setting: string;
  character1: string;
  character1Emoji: string;
  character2: string;
  character2Emoji: string;
  conflict: string;
}

export const storyCards: StoryCard[] = [
  {
    id: 1, genre: "Adventure", genreEmoji: "🌿", title: "The Lost Robot",
    setting: "A deep enchanted forest where the trees can whisper",
    character1: "A small robot who is lost and looking for home", character1Emoji: "🤖",
    character2: "A talking mushroom who knows every path in the forest", character2Emoji: "🍄",
    conflict: "The mushroom will only help if the robot can answer its riddle — but robots don't know riddles!",
  },
  {
    id: 2, genre: "Sci-Fi", genreEmoji: "🚀", title: "Space Rescue",
    setting: "A space station orbiting a purple planet, far from Earth",
    character1: "A young astronaut who forgot the launch code", character1Emoji: "🧑‍🚀",
    character2: "A friendly alien who speaks only in beeps and colours", character2Emoji: "🛸",
    conflict: "The rocket must leave in 10 minutes or they're both stuck. The alien knows the code but can't say it!",
  },
  {
    id: 3, genre: "Mystery", genreEmoji: "🌊", title: "The Sunken Crown",
    setting: "An underwater kingdom where fish wear tiny hats",
    character1: "A clownfish detective searching for the missing crown", character1Emoji: "🐠",
    character2: "A nervous squid who saw everything but is too scared to talk", character2Emoji: "🦑",
    conflict: "The squid will only speak if it feels completely safe — and the detective's flashing badge is terrifying it!",
  },
  {
    id: 4, genre: "Fantasy", genreEmoji: "🏰", title: "The Tiny Dragon",
    setting: "A magical library where the books fly around on their own",
    character1: "A very tiny dragon who breathes glitter instead of fire", character1Emoji: "🐉",
    character2: "A grumpy old librarian who hates glitter with a passion", character2Emoji: "📚",
    conflict: "The dragon accidentally covered the most important book in glitter — and now no one can read it!",
  },
  {
    id: 5, genre: "Real World", genreEmoji: "🌍", title: "The Big Race",
    setting: "A city park on the day of the most important race of the year",
    character1: "A slow but very clever tortoise who has been training for months", character1Emoji: "🐢",
    character2: "A super-fast rabbit who never takes anything seriously", character2Emoji: "🐇",
    conflict: "Halfway through the race, the rabbit sees the tortoise struggling and has to decide — win, or help?",
  },
  {
    id: 6, genre: "Comedy", genreEmoji: "😄", title: "The Wrong Door",
    setting: "A funny hotel where every door leads somewhere completely unexpected",
    character1: "A very confused traveller who just wants to find their room", character1Emoji: "🧳",
    character2: "A parrot receptionist who gives directions in riddles", character2Emoji: "🦜",
    conflict: "The traveller has opened 5 wrong doors — and ended up in a swimming pool, a jungle, and a disco. Room 7 must be here somewhere!",
  },
];

export interface CharacterField {
  emoji: string;
  label: string;
  example: string;
}

export const characterFields: CharacterField[] = [
  { emoji: "✏️", label: "Character Name", example: "Zara the Space Explorer" },
  { emoji: "❓", label: "What does your character want?", example: "To find a new planet and name it after her cat" },
  { emoji: "💪", label: "Special ability or power", example: "Can breathe in space without a helmet (somehow!)" },
  { emoji: "😅", label: "Biggest weakness or fear", example: "Absolutely terrified of asteroids (they're just rocks, she knows)" },
  { emoji: "💬", label: "Catchphrase", example: "\"To infinity and slightly beyond that!\"" },
];

export const characterEmotions = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😨", label: "Scared" },
  { emoji: "🤩", label: "Excited" },
  { emoji: "😤", label: "Determined" },
  { emoji: "😂", label: "Laughing" },
  { emoji: "😮", label: "Surprised" },
];

export const scratchActions = [
  "Move across the stage",
  "Say something with a speech bubble",
  "Grow big & shrink small",
  "Loop / repeat a dance",
  "React to another character",
  "Make a sound or play music",
];

export const storyboardBlocks = [
  { emoji: "🔵", label: "Motion", color: "bg-blue-100 text-blue-700" },
  { emoji: "🟣", label: "Looks", color: "bg-purple-100 text-purple-700" },
  { emoji: "🟢", label: "Sound", color: "bg-green-100 text-green-700" },
  { emoji: "🔁", label: "Loop", color: "bg-orange-100 text-orange-700" },
  { emoji: "📨", label: "Message", color: "bg-yellow-100 text-yellow-700" },
];

export const scenes = [
  { num: 1, title: "Scene 1 · Beginning" },
  { num: 2, title: "Scene 2 · Middle" },
  { num: 3, title: "Scene 3 · End" },
];
