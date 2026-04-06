export type Difficulty = "starter" | "intermediate" | "challenge";

export interface ProjectIdea {
  id: string;
  week: number;
  title: string;
  description: string;
  genre: string;
  genreEmoji: string;
  difficulty: Difficulty;
  blocks: string[];
  steps: string[];
  sceneEmojis: string[];
}

export const projectIdeas: ProjectIdea[] = [
  // Week 1
  {
    id: "space-adventure",
    week: 1,
    title: "Space Adventure!",
    description: "A rocket launches into space and meets a friendly alien. The alien has never seen a human before — what do they say to each other? Draw a space background, a rocket, and your alien.",
    genre: "Story",
    genreEmoji: "🚀",
    difficulty: "starter",
    blocks: ["Move", "Green flag", "Say", "Grow/Shrink"],
    steps: [
      "Draw a black space background with stars and a moon",
      "Draw a rocket — make it move up across the screen",
      "Draw a funny alien — make it say \"Hello Earthling!\" when the flag is pressed",
    ],
    sceneEmojis: ["🚀", "⭐", "👽"],
  },
  {
    id: "great-chase",
    week: 1,
    title: "The Great Chase!",
    description: "A dog spots a cat and starts chasing it across the garden! The cat runs one way, the dog runs the other. They both end up running in circles. Who will catch who?",
    genre: "Comedy",
    genreEmoji: "😄",
    difficulty: "starter",
    blocks: ["Move left/right", "Tap trigger", "Say"],
    steps: [
      "Draw a garden background — green grass, maybe a fence",
      "Add a dog character — when tapped, it moves right with \"WOOF!\"",
      "Add a cat — when green flag pressed, it runs left saying \"MEOW!\"",
    ],
    sceneEmojis: ["🐕", "💨", "🐈"],
  },
  {
    id: "my-superhero",
    week: 1,
    title: "My Superhero!",
    description: "Draw YOUR OWN superhero — a totally original one with a name you invent. What's their superpower? They fly across the city, grow huge, and announce their arrival. The world is saved!",
    genre: "Action",
    genreEmoji: "💪",
    difficulty: "starter",
    blocks: ["Move", "Grow big", "Say", "Green flag"],
    steps: [
      "Draw your superhero — cape, mask, logo — make them unique!",
      "On green flag: fly right, grow BIG, say their superhero name",
      "When tapped: they say \"The city is safe!\" and shrink back down",
    ],
    sceneEmojis: ["🦸", "🏙️", "✨"],
  },
  // Week 2
  {
    id: "haunted-house",
    week: 2,
    title: "The Haunted House",
    description: "A brave explorer enters a spooky house on a dark night. Inside: a friendly ghost who just wants someone to talk to! Three scenes — outside the house, inside the dark hallway, and the ghost's hidden room.",
    genre: "Story",
    genreEmoji: "👻",
    difficulty: "intermediate",
    blocks: ["Pages (3)", "Say blocks", "Wait", "Hide/Show"],
    steps: [
      "Page 1: dark night outside a spooky house — character walks in",
      "Page 2: dark hallway — ghost appears from the shadows (hide → show!)",
      "Page 3: ghost's cosy room — they become friends and have tea 🍵",
    ],
    sceneEmojis: ["👻", "🏚️", "😨"],
  },
  {
    id: "deep-ocean-friends",
    week: 2,
    title: "Deep Ocean Friends",
    description: "A little fish gets lost in the big ocean and asks different sea creatures for directions home. An octopus, a crab, and a whale all give different advice. Which way is home?",
    genre: "Story",
    genreEmoji: "🌊",
    difficulty: "intermediate",
    blocks: ["Pages (3)", "Dialogue", "Wait timing", "Draw background"],
    steps: [
      "Draw a blue ocean background with coral and seaweed",
      "Each page: little fish meets a new creature — 4-line conversation with wait blocks",
      "Final page: fish finds home — big celebration!",
    ],
    sceneEmojis: ["🐠", "🐙", "🐚"],
  },
  {
    id: "cooking-show",
    week: 2,
    title: "My Cooking Show!",
    description: "You are the host of a cooking show! Each page is a step in making your favourite food. Narrate everything with speech bubbles. The audience is watching — make it dramatic!",
    genre: "Tutorial",
    genreEmoji: "🍳",
    difficulty: "intermediate",
    blocks: ["Pages (4)", "Narration", "Wait", "Grow (dramatic!)"],
    steps: [
      "Page 1: intro — chef character says \"Welcome to my cooking show!\"",
      "Pages 2–3: ingredients appear one by one with wait timing",
      "Page 4: the finished dish appears — chef grows BIG and takes a bow!",
    ],
    sceneEmojis: ["👨‍🍳", "🍕", "🎉"],
  },
  // Week 3
  {
    id: "candy-land-dance",
    week: 3,
    title: "Candy Land Dance Party!",
    description: "Everything in Candy Land comes alive and dances — lollipops spin, gummies bounce, cupcakes wobble. Five characters, five different forever loops, all dancing at the same time to an invisible beat.",
    genre: "Animation",
    genreEmoji: "💃",
    difficulty: "intermediate",
    blocks: ["Forever loops", "Repeat 8", "Grow/Shrink", "Spin/Turn"],
    steps: [
      "Draw a colourful candy background — pinks, purples, yellows",
      "Draw 5 candy characters — each completely different shape and colour",
      "Give each one a DIFFERENT forever loop — spin, bounce, grow-shrink, wiggle, zoom",
    ],
    sceneEmojis: ["🍭", "💃", "🍬"],
  },
  {
    id: "solar-system",
    week: 3,
    title: "My Solar System!",
    description: "Build a working solar system where every planet orbits at a different speed! The sun stays still, Mercury spins fast, Saturn spins slowly. Each planet has a forever loop — but with different timing.",
    genre: "Science",
    genreEmoji: "🔭",
    difficulty: "challenge",
    blocks: ["Forever loops", "Turn + Move", "Wait (timing)"],
    steps: [
      "Draw a black space background — add a bright sun in the middle",
      "Draw 4 planets of different sizes — position them at different distances",
      "Each planet: forever loop → turn + move. Different turn numbers = different speeds!",
    ],
    sceneEmojis: ["☀️", "🌍", "🪐"],
  },
  {
    id: "penguin-snowstorm",
    week: 3,
    title: "Penguin Snowstorm!",
    description: "It's snowing! Snowflakes fall from the top of the screen in forever loops. A penguin slides back and forth happily. A snowman slowly grows taller as the snow piles up. Everything moves at once!",
    genre: "Animation",
    genreEmoji: "❄️",
    difficulty: "intermediate",
    blocks: ["Forever loops", "Move up/down", "Grow", "Repeat"],
    steps: [
      "Draw an icy blue background with a white snow ground",
      "Draw 3 snowflakes — each with a forever loop moving down the screen",
      "Add a penguin sliding left-right + snowman slowly growing bigger!",
    ],
    sceneEmojis: ["❄️", "🐧", "⛄"],
  },
  // Week 4
  {
    id: "robot-factory",
    week: 4,
    title: "Robot Factory!",
    description: "Build an assembly line! Robot A moves along and sends a message to Robot B → B adds a part and sends to Robot C → C finishes the robot and sends a WIN message → confetti explodes everywhere!",
    genre: "Game/Story",
    genreEmoji: "🏭",
    difficulty: "intermediate",
    blocks: ["Messages (chain)", "Move", "Show/Hide", "Wait"],
    steps: [
      "Draw a factory background with conveyor belt sections",
      "3 robot characters — each receives a message, does something, sends the next message",
      "Final robot: receives DONE → grows big → says \"COMPLETE!\" → confetti appears!",
    ],
    sceneEmojis: ["🤖", "⚙️", "🤖✨"],
  },
  {
    id: "wizard-duel",
    week: 4,
    title: "Wizard Duel!",
    description: "Two wizards face off! Wizard A casts a spell → sends a ZAP message → Wizard B reacts (grows huge, wobbles, says \"My turn!\") → B sends back a COUNTER spell → A flies backwards and lands on their hat!",
    genre: "Fantasy",
    genreEmoji: "✨",
    difficulty: "challenge",
    blocks: ["Messages (2-way)", "Tap trigger", "Grow/Shrink", "Say"],
    steps: [
      "Draw a dramatic castle or forest background",
      "Wizard A: tap → ZAP message → sparkle effect; Wizard B: receives ZAP → reacts dramatically",
      "Wizard B then sends COUNTER → Wizard A reacts and ends the duel with a funny bow!",
    ],
    sceneEmojis: ["🧙", "⚡", "🧙‍♀️"],
  },
  {
    id: "tap-to-race",
    week: 4,
    title: "Tap to Race!",
    description: "Tap the rabbit to make it hop forward — but tap the tortoise too or it falls behind! First one to reach the finish flag sends a WIN message. A trophy appears and the crowd goes wild! 🏆",
    genre: "Game",
    genreEmoji: "🏆",
    difficulty: "intermediate",
    blocks: ["Tap trigger", "WIN message", "Show/Hide", "Move right"],
    steps: [
      "Draw a racetrack background with a finish line flag on the right",
      "Rabbit + tortoise: when tapped → move right a little bit",
      "First to right edge: sends WIN message → trophy appears → fireworks!",
    ],
    sceneEmojis: ["🐇", "🏁", "🐢"],
  },
  // Week 5
  {
    id: "jungle-music-band",
    week: 5,
    title: "Jungle Music Band!",
    description: "Four jungle animals form a band! Tap the lion for the drums 🥁, tap the monkey for the xylophone, tap the parrot for its squawk, tap the elephant for the bass. Record your own sounds for each animal!",
    genre: "Music",
    genreEmoji: "🎵",
    difficulty: "intermediate",
    blocks: ["Sound blocks", "Voice recording", "Tap trigger", "Grow (beat!)"],
    steps: [
      "Draw a lush jungle background with 4 animal positions",
      "Record a different mouth sound for each animal (beat, melody, squawk, boom!)",
      "Each animal: when tapped → plays sound + grows big then back → feels like a beat!",
    ],
    sceneEmojis: ["🦁", "🐒", "🦜"],
  },
  {
    id: "weather-show",
    week: 5,
    title: "My Weather Show!",
    description: "You are the TV weather forecaster! Record your voice narrating today's weather AND tomorrow's. Sun appears, then clouds, then rain — each one timed with your voice narration perfectly.",
    genre: "Show",
    genreEmoji: "📺",
    difficulty: "intermediate",
    blocks: ["Voice narration", "Sync timing", "Pages (3)", "Show/Hide"],
    steps: [
      "Record your weather report intro: \"Good evening! Today's weather is…\"",
      "Each page: a new weather scene — sunny, cloudy, rainy — with voice sync",
      "Add background music sounds — chirping birds for sunny, rain taps for rainy!",
    ],
    sceneEmojis: ["🌤️", "📺", "🌧️"],
  },
  {
    id: "lullaby-dragon",
    week: 5,
    title: "Lullaby for a Dragon 🐲",
    description: "A tiny dragon can't fall asleep. Sing it a lullaby — record YOUR VOICE singing! As the song plays, stars appear one by one, the dragon slowly shrinks (getting sleepy), and finally falls asleep surrounded by moonlight.",
    genre: "Music Video",
    genreEmoji: "🎶",
    difficulty: "challenge",
    blocks: ["Singing voice", "Precise timing", "Grow/Shrink", "Show (stars)"],
    steps: [
      "Draw a night sky — dark blue, with hidden stars (start hidden!)",
      "Record yourself singing a lullaby — any melody, even made up!",
      "Time the stars appearing and dragon shrinking to match your song beats",
    ],
    sceneEmojis: ["🐲", "🌙", "⭐"],
  },
  // Week 6
  {
    id: "dream-garden",
    week: 6,
    title: "My Dream Garden!",
    description: "Build an entire living garden — flowers that grow when you tap them, butterflies fluttering in forever loops, bees buzzing with sound effects, a sun spinning overhead, and a secret door that leads to a hidden magical page!",
    genre: "Grand Project",
    genreEmoji: "🌸",
    difficulty: "challenge",
    blocks: ["Tap to grow", "Forever loops", "Bee buzz sounds", "Secret page", "Messages"],
    steps: [
      "Draw a detailed garden background — sky, grass, soil, path",
      "Tap a flower seed → it grows tall! Butterflies: forever loop fluttering. Bee: buzzing sound.",
      "Hidden door: tap it → page jumps to a magical garden inside a rainbow!",
    ],
    sceneEmojis: ["🌸", "🦋", "🌻"],
  },
  {
    id: "time-machine",
    week: 6,
    title: "The Time Machine!",
    description: "You've built a time machine! Page 1: press a button → it vibrates and flashes → jumps to Page 2 (DINOSAURS!) → tap a dinosaur → it sends you back → press again → Page 3 (FUTURE with robots!). Two time periods to explore!",
    genre: "Grand Project",
    genreEmoji: "🕰️",
    difficulty: "challenge",
    blocks: ["Pages (3)", "Tap triggers", "Messages", "Sounds", "Flash effects"],
    steps: [
      "Page 1: time machine control panel — draw all the buttons and levers!",
      "Tap the big red button → machine vibrates (grow/shrink fast) → jumps to Page 2",
      "Each time period has its own characters, sounds, and a way to travel back!",
    ],
    sceneEmojis: ["🤖", "⏱️", "🦕"],
  },
  {
    id: "pet-day",
    week: 6,
    title: "A Day in My Pet's Life!",
    description: "Tell the story of a whole day from your pet's point of view — or an imaginary pet! Morning wake-up, walk in the park, lunchtime, afternoon nap with zzz's floating up, and finally bedtime cuddles. Record your pet's voice!",
    genre: "Story",
    genreEmoji: "🐾",
    difficulty: "intermediate",
    blocks: ["Pages (5 scenes)", "Voice acting", "Timing", "Sleep loop", "Show/Hide"],
    steps: [
      "Plan on paper: 5 scenes — morning, park, lunch, nap, bedtime. Draw a storyboard!",
      "Record your pet's narration for each scene in your best animal voice",
      "Sleep scene: zzz characters appear in a forever loop and pet slowly shrinks",
    ],
    sceneEmojis: ["🐕", "🌳", "☀️"],
  },
];

export const weekColors: Record<number, string> = {
  1: "bg-blue-100 text-blue-700 border-blue-300",
  2: "bg-green-100 text-green-700 border-green-300",
  3: "bg-purple-100 text-purple-700 border-purple-300",
  4: "bg-orange-100 text-orange-700 border-orange-300",
  5: "bg-cyan-100 text-cyan-700 border-cyan-300",
  6: "bg-red-100 text-red-700 border-red-300",
};

export const difficultyConfig: Record<Difficulty, { label: string; stars: number; color: string }> = {
  starter: { label: "Starter", stars: 1, color: "text-yellow-500" },
  intermediate: { label: "Intermediate", stars: 2, color: "text-yellow-500" },
  challenge: { label: "Challenge", stars: 3, color: "text-yellow-500" },
};
