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

export interface BonusChallenge {
  level: "tricky" | "hard" | "super-hard" | "very-hard" | "legend";
  title: string;
  description: string;
  hint: string;
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
  bonusChallenges?: BonusChallenge[];
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
  // ===== ScratchJr Activity Card Lessons =====
  {
    id: "scratchjr-week1",
    title: "ScratchJr: Hello, ScratchJr!",
    level: "beginner",
    description: "Explore the ScratchJr app, draw characters, learn motion blocks, triggers, and looks blocks — then build your first project!",
    icon: "🐱",
    steps: [
      { title: "Day 1: Meet the Playground 🛝", description: "Open ScratchJr and explore together for 5 minutes. Find the Stage (big area), Blocks (left side), and Characters (bottom). Tap a character to select it, then open the Paint tool 🎨 to draw YOUR OWN character. Give it a name and save your project 💾. Challenge: Name your character and show a grown-up!" },
      { title: "Day 2: Move It! Arrow Blocks 🏃", description: "Find the BLUE motion blocks — these make characters move! Drag a 'move right' block to the script area and tap it. Try adding left, up, down blocks and chain them together. Use bigger numbers for faster movement, smaller for slower. Challenge: Make a 5-block dance routine — Right → Up → Left → Down → Spin!" },
      { title: "Day 3: Press Play! Start Blocks ▶️", description: "Find the YELLOW trigger blocks — these start everything! Drag the green flag block (it's like pressing Play) and connect it to your movement blocks. Press the green flag on screen — it works! Now try the 'tap character' trigger too. Challenge: Make it start BOTH ways — green flag AND tap!" },
      { title: "Day 4: Look Different! Looks Blocks 🎨", description: "Find the PURPLE looks blocks — these change how things look! Make your character grow BIG, shrink SMALL, say 'Hello!' with a speech bubble, and try hide and show. Challenge: Grow big → say 'Hello!' → shrink small → hide! All in one script!" },
      { title: "Day 5: Mini-Project — Hello World! 🎉", description: "Choose a fun background (city, space, forest, ocean!), add 2 characters, and make BOTH move and say something. Press the green flag — does it work? Fix any bugs! Challenge: Show your grown-up and explain what each block does. You just made your first ScratchJr program!" },
    ],
    scratchUrl: "https://www.scratchjr.org/",
    quiz: { question: "What colour are the blocks that make characters MOVE in ScratchJr?", options: ["Purple", "Blue", "Yellow", "Green"], correctIndex: 1 },
    badgeId: "playground-pro",
    bonusChallenges: [
      { level: "tricky", title: "The Disappearing Act 🎩", description: "Make a character walk across the whole stage, then slowly shrink smaller and smaller until it completely disappears — as if it walked into the distance. Use at least 6 blocks.", hint: "Chain multiple shrink blocks together — what happens if you do it 5 times in a row?" },
      { level: "hard", title: "Two-Character Conversation 💬", description: "Put 2 characters on stage. When you tap Character A, it moves right and says something. Then Character B automatically reacts — moves left AND says something back — WITHOUT you tapping it.", hint: "How can Character B 'know' that A finished moving?" },
      { level: "super-hard", title: "The Mirror Challenge 🪞", description: "Draw TWO identical characters. When you press the green flag, both must do exactly the same moves — but one goes left when the other goes right. They must be perfectly mirrored at all times, like a reflection.", hint: "This requires two separate scripts running simultaneously. Can you figure out the movements?" },
    ],
  },
  {
    id: "scratchjr-week2",
    title: "ScratchJr: Tell a Story!",
    level: "beginner",
    description: "Learn to create multi-page stories with dialogue, timing, custom backgrounds, and page transitions.",
    icon: "📖",
    steps: [
      { title: "Day 1: Scene 1 & Scene 2 — Pages! 🎭", description: "Tap the '+' button to add a new page — now you have 2 scenes! Give Page 1 a home background and Page 2 a forest or space. Add a character to each page, then find the orange 'go to page' block and connect it at the end of Page 1's script. Press play — does it jump? Challenge: Make a 3-page story!" },
      { title: "Day 2: Characters Talking! 💬", description: "Put 2 characters on the same stage. Act out your conversation out loud first — who says what? Add 'say' blocks to Character 1, then add a WAIT block before Character 2 speaks so they take turns! Challenge: Write a 4-line conversation. Make them greet each other and say goodbye!" },
      { title: "Day 3: Wait For Me! Timing ⏳", description: "Find the orange WAIT block — it makes things pause! Plan a sunrise: character appears, then sun rises, then birds fly. Put WAIT blocks between each event. Try wait=1 vs wait=4 — what feels better? Challenge: Build a 5-event timed scene — 5 things happen one after another!" },
      { title: "Day 4: Draw Your World! 🖌️", description: "Open the background editor and draw sky first (top), then ground (bottom), then details like trees, clouds, or a house. Now draw a custom character to live in this world. Add both to your story and make the character move. Challenge: Draw a background AND a matching character!" },
      { title: "Day 5: Mini-Project — My First Story! 📖", description: "Write 3 sentences on paper — that's your story plan! Build 3 pages with different backgrounds, add 2 characters with movement and speech bubbles, and make the pages jump automatically. Read the story aloud while pressing play — be the narrator! Challenge: Add a title on Page 1 with your name! You're a real author now! ✍️" },
    ],
    scratchUrl: "https://www.scratchjr.org/",
    quiz: { question: "What colour is the 'go to page' block that jumps between scenes?", options: ["Blue", "Yellow", "Orange", "Purple"], correctIndex: 2 },
    badgeId: "story-builder",
    bonusChallenges: [
      { level: "tricky", title: "The Emotional Scene 😮", description: "Create a scene where the TIMING of the wait blocks changes the whole mood. Build the same scene twice on two pages — once with very fast timing (exciting!) and once with very slow timing (scary or mysterious). Same script, totally different feeling.", hint: "Watch movies — notice how slow scenes feel tense and fast scenes feel exciting?" },
      { level: "hard", title: "5-Page Epic Story 🗺️", description: "Build a story with exactly 5 pages. Rules: every page must have a different background (all drawn by you), at least 2 characters must appear across the story, and the story must have a clear beginning, problem, and solution — just like a real book.", hint: "Plan your story on paper first. 5 pages = 5 sentences. What happens in each one?" },
      { level: "super-hard", title: "The Silent Film 🎬", description: "Tell a complete story with NO speech bubbles. No 'say' blocks at all. The entire story must be communicated only through character movement, size changes, and timing. A viewer who can't read should understand exactly what's happening.", hint: "Think like a mime artist or a silent movie director. How do you show happiness, fear, or surprise without words?" },
    ],
  },
  {
    id: "scratchjr-week3",
    title: "ScratchJr: Loops & Repeats!",
    level: "intermediate",
    description: "Discover the power of loops — repeat blocks, forever loops, dance choreography, and pattern art!",
    icon: "🔁",
    steps: [
      { title: "Day 1: Why Repeat? The Loop Idea 🤔", description: "Physical warm-up: clap 5 times — that's a loop! 👏 Find the orange REPEAT block in ScratchJr and put a move block INSIDE it. Set repeat to 5 — the character walks 5 steps! Compare: a loop vs 5 separate blocks — which is easier? Challenge: Make a loop that runs 10 times!" },
      { title: "Day 2: Forever Loop! 🌀", description: "Find the FOREVER loop — it has no number, it never stops! Put 'move right, move left' inside — the character bounces forever! Try grow + shrink inside forever for flapping wings. Make the sun spin forever with a turn block. Stop it with the red button! Challenge: Two characters with DIFFERENT forever loops at the same time!" },
      { title: "Day 3: Dance Party! 🕺", description: "Design a 4-move dance on paper: up → turn → down → turn. Put those 4 moves inside a Repeat 8 loop. Add a second dancer with a DIFFERENT dance! Make one dancer big and one small. Challenge: Add a THIRD dancer! All three dancing differently at the same time!" },
      { title: "Day 4: Patterns & Art! 🌺", description: "Pick a favourite background colour, add a small star or shape character, and loop: move + turn + move + turn — it makes a pattern path! Try different turn amounts — 1 turn vs 3 turns. Add 2 more characters making different patterns. Challenge: Create a pattern cool enough to put on a T-shirt! 👕" },
      { title: "Day 5: Mini-Project — Dance Show! 🎪", description: "Draw a colourful stage background yourself. Add 3+ characters — each with a unique loop dance! Add a title Page 1: 'Welcome to the Show!' and a page jump to the dance scene. Challenge: Stand up and do the dance yourself WHILE your character dances! 🕺" },
    ],
    scratchUrl: "https://www.scratchjr.org/",
    quiz: { question: "What's the difference between a Repeat loop and a Forever loop?", options: ["Repeat is faster", "Forever runs a set number of times", "Repeat runs a set number of times, Forever never stops", "There is no difference"], correctIndex: 2 },
    badgeId: "loop-master",
    bonusChallenges: [
      { level: "tricky", title: "The Perfect Square 🟦", description: "Using ONLY move and turn blocks inside a repeat loop, make a character trace a perfect square path. It must end up exactly where it started. How many moves and turns do you need? What number of turns makes a right angle?", hint: "A square has 4 sides and 4 corners. What does that tell you about your repeat number?" },
      { level: "hard", title: "Synchronized Swimming 🏊", description: "Add 4 characters to the stage. All 4 must move in perfect sync — same direction, same speed, same moment. But each one must start in a different corner of the stage. They move together like a swimming team formation.", hint: "You need 4 separate scripts all triggered at the same time. Think about what makes them all start simultaneously." },
      { level: "super-hard", title: "The Infinity Machine ♾️", description: "Build a scene with 5 characters, each running a different forever loop. The challenge: they must all feel connected — like parts of a single machine working together. A cog turning, a lever moving, a light flashing, a dial spinning, a wheel rotating. Design the machine on paper first.", hint: "Think about a clock — every part moves at a different speed but they all work together. What's your machine?" },
    ],
  },
  {
    id: "scratchjr-week4",
    title: "ScratchJr: Messages & Games!",
    level: "intermediate",
    description: "Learn event-driven programming with messages, chain reactions, tap triggers, and build your first game!",
    icon: "📬",
    steps: [
      { title: "Day 1: What's a Message? 📬", description: "Real life warm-up: you shout 'GO!' → friend starts running. That's a message! Find SEND and RECEIVE message blocks. Character A sends a message on the green flag, Character B receives it and moves. Make sure the same colour message matches! Challenge: A sends → B grows HUGE, then B sends back → A spins!" },
      { title: "Day 2: Chain Reactions! ⛓️", description: "Imagine falling dominoes — A hits B hits C! Character A: flag → action → SEND orange message. Character B: RECEIVE orange → action → SEND blue message. Character C: RECEIVE blue → action → SEND green message. Watch the chain reaction! Challenge: Add a 4th character!" },
      { title: "Day 3: Tap & Respond! 👆", description: "Use 'when character is tapped' as your start block. Tap the dog → it does something → sends a message. Cat receives the message → runs away! Add speech bubbles — dog says 'WOOF!', cat says 'YIKES!' Challenge: 3 characters — tap one and ALL THREE react differently!" },
      { title: "Day 4: Build a Simple Game! 🎮", description: "Draw a STAR character — this is what you need to catch! Give it a forever loop: bounce left and right. When star is tapped → it sends a WIN message + hides. Add a 'YAY!' character that appears when it receives WIN. Play it 5 times! Challenge: Make the star faster!" },
      { title: "Day 5: Mini-Project — Interactive Story! 🗺️", description: "Page 1: A character stands at two doors — left and right. Tap left door → jumps to Page 2 (happy ending!). Tap right door → jumps to Page 3 (funny ending!). Both endings need their own background and story. Challenge: Let a parent play — can they find both endings?" },
    ],
    scratchUrl: "https://www.scratchjr.org/",
    quiz: { question: "What must match between a SEND and RECEIVE message block?", options: ["The shape", "The size", "The colour", "The name"], correctIndex: 2 },
    badgeId: "messenger",
    bonusChallenges: [
      { level: "tricky", title: "The Alarm System 🚨", description: "Create an alarm: tap a button character → it sends a red message → a light character flashes (grows and shrinks in a loop) → a siren character grows big and shows 'ALERT!'. All three must react to the single tap automatically.", hint: "One tap, one message, but multiple characters can receive the SAME message colour." },
      { level: "hard", title: "The Ultimate Chase Game 🏃", description: "A chaser character bounces around in a forever loop. A target character bounces in a different forever loop. When the target is tapped: it hides, sends a WIN message, a trophy appears AND the chaser stops moving. Tap the trophy to reset and play again.", hint: "Stopping the chaser is the hard part — think about what happens to a forever loop when a character hides." },
      { level: "super-hard", title: "The 3-Room Adventure 🗝️", description: "Build a 4-page adventure. Page 1: a locked door. Tap a KEY character → it sends a message → the door opens → page jumps to Room 1. In Room 1, tap a CHEST → jump to Room 2. In Room 2, solve a final tap puzzle → jump to the Treasure Room where a celebration plays.", hint: "This is how real video game levels work. Plan every tap and every message on paper before you build." },
    ],
  },
  {
    id: "scratchjr-week5",
    title: "ScratchJr: Sound & Music!",
    level: "intermediate",
    description: "Add sound effects, record your voice, build tap instruments, and sync sound with motion!",
    icon: "🎵",
    steps: [
      { title: "Day 1: Make Some Noise! 🔊", description: "Find the GREEN sound blocks. Add a 'pop' sound when a character is tapped. Try boing, meow, bell — which is your favourite? Trigger sounds at different moments: start, on tap, after move. Close your eyes and listen — does it feel like a scene? Challenge: 3 characters, 3 different sounds!" },
      { title: "Day 2: Record Your Voice! 🎤", description: "Tap the microphone icon in the sound blocks area. Record: 'Hello! I am [YOUR NAME]!' loud and clear! Attach it to your character — tap and hear yourself! Try a robot voice, a whisper, a loud monster voice 👾. Challenge: Record a narration for your Week 2 story — give it a real voiceover! 🎬" },
      { title: "Day 3: Musical Instruments! 🎹", description: "Draw 4 characters — make them look like instrument keys! Give each one a different colour and a different sound. Tap each — you have a 4-note instrument! Try playing do-re-mi-fa. Challenge: Play a short tune for your parent! Can they guess the song? 🎵" },
      { title: "Day 4: Sync Sound & Motion! 🎬", description: "Make a character jump and add a sound at the SAME TIME. Experiment: sound BEFORE move vs sound AFTER move — feel different? Build fireworks: burst animation (grow+shrink) + POP sound. Record a countdown: '3… 2… 1… LAUNCH!' Challenge: A 5-second sound + motion show — like a real movie trailer! 🎥" },
      { title: "Day 5: Mini-Project — Music Video! 🎵", description: "Pick a theme: jungle 🌿 space 🚀 or underwater 🐠. Draw your background and 3+ animated characters. Make them all move in loops — dancing to a beat! Record a song or poem YOU made up. Challenge: Stand up and perform your song LIVE while the video plays! 🎤🌟" },
    ],
    scratchUrl: "https://www.scratchjr.org/",
    quiz: { question: "What colour are the sound blocks in ScratchJr?", options: ["Blue", "Purple", "Green", "Orange"], correctIndex: 2 },
    badgeId: "sound-designer",
    bonusChallenges: [
      { level: "tricky", title: "The Sound Story 🎙️", description: "Retell your Week 2 story — but this time narrate every single line with your VOICE instead of speech bubbles. Record a separate voice clip for each moment. The story must make sense to someone listening with their eyes closed.", hint: "Record each line separately. Speak slowly and clearly. Listen back — does each clip match the action on screen?" },
      { level: "hard", title: "The Full Orchestra 🎼", description: "Build an instrument with 8 notes (8 tap-able characters). Arrange them left to right as a scale. Each must be a different colour AND a different size (smallest = highest pitch). Then learn to play a real song: Happy Birthday, Twinkle Twinkle, or one you choose.", hint: "Label each character with its note name. Practice slowly first — it's just like learning real piano!" },
      { level: "super-hard", title: "The Movie Trailer 🎬", description: "Create a 15-second movie trailer for an imaginary film. It must include: a dramatic voice narration you recorded, at least 3 scenes with page jumps, sound effects at key moments, characters growing/shrinking for dramatic effect, and a title card at the end. It must feel exciting and make someone want to see the 'full movie'!", hint: "Watch a real movie trailer first. Notice: fast cuts, big music, mysterious voice, dramatic reveals. Now make your own version!" },
    ],
  },
  {
    id: "scratchjr-week6",
    title: "ScratchJr: Grand Finale!",
    level: "advanced",
    description: "Design, build, polish, and present your own complete ScratchJr project — it's graduation week!",
    icon: "🎓",
    steps: [
      { title: "Day 1: Big Idea Planning Day! 💡", description: "Look back at all 5 weeks — what was your FAVOURITE thing? Brainstorm: story? game? music video? something totally new? Draw your plan on paper: characters, scenes, what happens. Write: 'My project will…' and finish the sentence 3 ways. Challenge: Write down 3 things your final project MUST include!" },
      { title: "Day 2: Build — Art Day! 🎨", description: "Open ScratchJr and start a brand new project. Draw ALL your characters in the paint tool — take your time! Create all your backgrounds for each scene. Set up all your pages in the right order. NO CODE TODAY — just art. Make it beautiful first! 🌟" },
      { title: "Day 3: Build — Add the Code! 🧩", description: "Start adding motion, loops, and messages to each character. Test each script AS YOU BUILD — don't wait until the end! Something weird? That's a bug — try to figure out why! Add your sound and voice recordings. Challenge: Play through your whole project once. Write down 3 things to improve!" },
      { title: "Day 4: Polish & Improve! ✨", description: "Play through your whole project and note anything missing. Add a TITLE screen with your name as the creator! Add 'The End' or 'Play Again' on the last page. Ask: what would make this 10% cooler? Do it! Challenge: Let a parent play your project WITHOUT you helping. Watch what confuses them!" },
      { title: "Day 5: 🏆 Graduation Day! 🎓", description: "Present your final project to the whole family 👨‍👩‍👧. Explain what each part does and how you built it. Answer: 'What was hardest?' and 'What are you most proud of?' Take a photo of yourself holding the tablet with your project 📸. Celebrate with your favourite treat — you earned it! 🍰🌟 You are now officially a ScratchJr Coder!" },
    ],
    scratchUrl: "https://www.scratchjr.org/",
    quiz: { question: "What's the most important step before starting to code a big project?", options: ["Jump right in!", "Plan on paper first", "Add sounds", "Pick colours"], correctIndex: 1 },
    badgeId: "graduate",
  },
];

export const getLessonsByLevel = (level: Level) => lessons.filter((l) => l.level === level);
