export interface ScriptDay {
  dayLabel: string;
  title: string;
  emoji: string;
  opening: string;
  activities: string[];
  questions: string[];
  watchFor?: string[];
  success: string;
}

export interface ScriptWeek {
  weekNumber: number;
  title: string;
  goal: string;
  days: ScriptDay[];
}

export const lessonScripts: ScriptWeek[] = [
  {
    weekNumber: 1,
    title: "Hello, ScratchJr!",
    goal: "Child can open ScratchJr, add a character, connect 3+ blocks, and press play independently",
    days: [
      {
        dayLabel: "Week 1 · Day 1 · Monday",
        title: "Meet the Playground",
        emoji: "🛝",
        opening:
          "Today we're going to explore a magical app where you can make characters come alive — kind of like being a movie director AND a programmer at the same time. Before we touch anything, let's just look at the screen together for a minute. What do you notice? What looks interesting to you?",
        activities: [
          "Open ScratchJr together. Don't click anything yet — just observe.",
          "Point to Stage (main area), Blocks panel (left), Characters tray (bottom). Name them together.",
          "Say \"OK, tap the cat character and see what happens.\" Let them discover it selects it.",
          "Open Paint tool together. Let them draw freely for 8 minutes — their own character.",
          "Help them save if needed — show them where the save button is.",
        ],
        questions: [
          "What do you think this button does? Let's try it and see!",
          "If you were a character in a game, what would YOU look like? Draw that!",
          "Can you find the place where you can put the character's name?",
        ],
        watchFor: [
          "Are they curious and exploring — or anxious and waiting for instruction? (Curious = great! Anxious = more encouragement)",
          "Do they try things without asking permission? (Good sign of confidence)",
          "Are they spending too long on drawing? (That's fine — art engagement = investment)",
        ],
        success:
          "Child has drawn their own character, saved the project, and can point to the Stage, Blocks, and Characters areas by name.",
      },
      {
        dayLabel: "Week 1 · Day 2 · Tuesday",
        title: "Move It! Arrow Blocks",
        emoji: "🏃",
        opening:
          "Yesterday we explored the app and made a character. Today we're going to make that character actually MOVE. Programmers use special instructions called blocks — today we'll meet the movement blocks. They're blue. Can you find all the blue blocks before we start?",
        activities: [
          "Ask them to drag ONE move-right block to the script area. Let them figure out dragging.",
          "Tap the block — character moves! \"Whoa! What just happened?\" Let them react.",
          "Challenge: \"Can you make it go right AND then left? What blocks do you need?\"",
          "Introduce the number on the block — tap it. \"What do you think changes when this number is bigger?\"",
          "Free time: \"Build a 5-step dance — any direction, any speed. Surprise me!\"",
        ],
        questions: [
          "If the number 3 makes it go a little, what number will make it go a LOT?",
          "Can you predict what will happen before you tap? Then test your prediction!",
          "If you wanted the character to walk in a square, which directions would you need?",
        ],
        watchFor: [
          "Do they tap the block or drag it to test? (Dragging = understanding scripts; Tapping = using it like a button — gently show the difference)",
          "Do they change the numbers experimentally? (Great sign of curiosity)",
          "Do they connect blocks in a chain? (Key concept — praise this explicitly)",
        ],
        success:
          "Child can chain at least 3 motion blocks and predict roughly where the character will end up.",
      },
      {
        dayLabel: "Week 1 · Day 3 · Wednesday",
        title: "Press Play! Start Blocks",
        emoji: "▶️",
        opening:
          "Every program needs a START button — something that kicks everything off. In real programming, we call these triggers or events. Today you'll find ScratchJr's version. Here's the question: what do you think needs to happen FIRST before any code runs?",
        activities: [
          "Open the yellow blocks section together — look at the options.",
          "\"The green flag means 'when you press play.' Drag it to the FRONT of your dance chain.\"",
          "Press the green flag on screen — everything runs! \"Is this different from just tapping the block?\"",
          "Add a SECOND trigger: \"when character is tapped\" → same dance. Now both work!",
          "Free play: explore all trigger options — what does \"shake phone\" trigger do?",
        ],
        questions: [
          "Why do you think EVERY program needs a starting point?",
          "If you have 2 different triggers for the same script, what happens if you press both at once?",
          "Can you think of real-life triggers? (doorbell → someone opens door, alarm → you wake up)",
        ],
        watchFor: [
          "Do they understand a chain must START with a trigger? (Key mental model)",
          "Do they try the different trigger types? (Curiosity = great)",
          "Do they connect blocks in the wrong order? (Gently ask \"which should come first?\")",
        ],
        success:
          "Child independently adds a trigger to a script and can explain \"the green flag starts everything.\"",
      },
      {
        dayLabel: "Week 1 · Day 4 · Thursday",
        title: "Look Different! Looks Blocks",
        emoji: "🎨",
        opening:
          "Today's blocks are my favourites — they're the ones that make things look WILD. Programmers call these 'appearance' or 'looks' commands. Before we start: if your character could do anything visually — grow huge, shrink tiny, disappear, talk — what would be the coolest?",
        activities: [
          "Find purple blocks. Let them tap each one on their character to discover what it does.",
          "Build together: Grow → Say \"Hello!\" → Shrink → Hide. Run it!",
          "Ask: \"What happens if you put SHOW after HIDE?\" Let them predict then test.",
          "Free build: make the most dramatic entrance/exit they can imagine!",
        ],
        questions: [
          "What happens if you grow 5 times in a row without shrinking? Try it!",
          "Can you make the character seem surprised — like it sees something scary?",
          "What's the difference between HIDE and shrinking really small?",
        ],
        success:
          "Child builds a 4+ block looks script independently and can explain what each block does.",
      },
      {
        dayLabel: "Week 1 · Day 5 · Friday",
        title: "Hello World! First Complete Project",
        emoji: "🎉",
        opening:
          "Today is the day everything comes together. You've learned movement, triggers, and looks. Now you're going to build your FIRST complete project — totally your own design. I'll be here if you get stuck, but this is YOUR creation. What are you going to make?",
        activities: [
          "Let them pick background and characters with minimal input from you.",
          "Check in: \"How's it going? Tell me what you're building.\" Don't solve — ask!",
          "Gentle nudge if stuck: \"Can you make the second character do something interesting too?\"",
          "Share time: \"Press play and tell me what everything does!\"",
          "Celebrate! \"You just made your first ScratchJr program!\"",
        ],
        questions: [
          "What part are you most proud of?",
          "Was there anything that didn't work the way you wanted? What did you do?",
          "If you had one more hour, what would you add?",
          "What did you learn this week that surprised you?",
        ],
        success:
          "A complete project with 2 characters, each with at least a trigger + 2 blocks. Child can explain it to you in their own words.",
      },
    ],
  },
  {
    weekNumber: 2,
    title: "Tell a Story!",
    goal: "Child builds a 3-page animated story with dialogue and page transitions, independently",
    days: [
      {
        dayLabel: "Week 2 · Day 1 · Monday",
        title: "Scene 1 & Scene 2 — Pages!",
        emoji: "🎭",
        opening:
          "Great stories have more than one scene — imagine your favourite movie: it jumps from place to place! In ScratchJr, different scenes are called pages. Today we'll learn how to have MULTIPLE scenes and make the story jump from one to the next.",
        activities: [
          "Show them the + button to add pages. Let them add Page 2 themselves.",
          "Each page is a different scene. Give them different backgrounds — Page 1 = one place, Page 2 = somewhere else.",
          "Find the \"go to page\" block (orange section). Connect it: end of Page 1 script → go to Page 2.",
          "Test: press play on Page 1. Does it jump? If not, debug together!",
        ],
        questions: [
          "What story could happen in two different places?",
          "What needs to happen on Page 1 BEFORE jumping to Page 2?",
          "How is this like turning a page in a book?",
        ],
        success:
          "Child creates 2 pages with different backgrounds and connects them with a page-jump block.",
      },
      {
        dayLabel: "Week 2 · Day 2 · Tuesday",
        title: "Characters Talking — Dialogue!",
        emoji: "💬",
        opening:
          "Every good story has characters who talk to each other. The tricky bit is making them take TURNS — one speaks, then waits, then the other speaks. Before we code this, let's act it out! You be one character, I'll be the other. What would they say to each other?",
        activities: [
          "Act out the conversation physically first — at least 4 lines.",
          "In ScratchJr: add Character A's script — say block for their line.",
          "Key insight: \"Character B also needs a trigger — but with a WAIT block first so A finishes speaking.\"",
          "Build it, test it, adjust the wait time until it feels natural.",
          "Watch it play together — does it feel like a real conversation?",
        ],
        questions: [
          "Why does Character B need to wait? What happens if they don't?",
          "How long should the wait be? What feels natural to you?",
          "Could they interrupt each other? How would you code that?",
        ],
        success:
          "Two characters have a 4+ line conversation with appropriate wait timing between turns.",
      },
      {
        dayLabel: "Week 2 · Day 3 · Wednesday",
        title: "Wait For Me! Timing Events",
        emoji: "⏳",
        opening:
          "Timing is everything in stories and movies. If things happen too fast — you miss them. Too slow — you get bored. Today we're learning to control TIME in our programs using the Wait block. Think of it like a pause button in your code.",
        activities: [
          "Build a sunrise scene: character appears → sun rises (grow from small) → birds fly across.",
          "Without wait blocks first — everything happens at once! \"Does this feel right?\"",
          "Add wait blocks between each event. Test. Adjust. \"What wait value feels most like a real sunrise?\"",
          "Free time: build a 5-event chain of their own idea.",
        ],
        questions: [
          "What's the difference between wait=1 and wait=4? Count seconds with me.",
          "If you were making a scary scene, would you make things happen fast or slow? Why?",
          "Can you control the mood of a scene just by changing wait times?",
        ],
        success:
          "Child intentionally uses wait blocks to create a timed sequence that feels deliberate and controlled.",
      },
      {
        dayLabel: "Week 2 · Day 4 · Thursday",
        title: "Draw Your World — Background Art!",
        emoji: "🖌️",
        opening:
          "Today is mostly an art day — and here's the secret: the more YOU put into designing the world, the more you'll care about the story. Great game designers spend months on art before writing any code. So today: draw YOUR world. I'll barely help. This is your vision.",
        activities: [
          "Let them design freely. Tip to share: \"Draw sky layer first, then ground, then details.\"",
          "Move to character design: \"Draw someone who belongs in this world.\"",
          "Add character to scene — does it fit? Resize if needed.",
          "Add a simple motion so it feels alive.",
        ],
        questions: [
          "If this world had a name, what would it be?",
          "What time of day is it in this scene? Morning? Night? Sunset?",
          "Who else lives in this world besides your main character?",
        ],
        success:
          "Child has a unique drawn background and at least one custom character that feels matched to the world.",
      },
      {
        dayLabel: "Week 2 · Day 5 · Friday",
        title: "My First Story!",
        emoji: "📖",
        opening:
          "Before we open the tablet, let's plan on paper. Great programmers plan before they code! Write 3 sentences — your story in 3 lines. Scene 1: where does it start? Scene 2: what happens? Scene 3: how does it end?",
        activities: [
          "Build from their paper plan — 3 pages, their backgrounds.",
          "Check: does each page have movement + dialogue + page jump?",
          "Title page: \"Add your name as the author on Page 1!\"",
          "Read-aloud performance — child narrates while it plays.",
        ],
        questions: [
          "Did your story turn out the same as your paper plan, or different? Why?",
          "What part of storytelling is hardest to code?",
          "What do you want to add to this story if you come back to it?",
        ],
        success:
          "A 3-page animated story with 2 characters, dialogue, and page transitions. Child can narrate it aloud.",
      },
    ],
  },
  {
    weekNumber: 3,
    title: "Loops & Repeats!",
    goal: "Child can use repeat and forever loops intentionally to create patterns, dances, and continuous animations",
    days: [
      {
        dayLabel: "Week 3 · Day 1 · Monday",
        title: "Why Repeat? The Loop Idea",
        emoji: "🤔",
        opening:
          "Here's a puzzle: how would you make a character walk right 20 steps? You could drag 20 blocks... OR you could use one magic block called a LOOP. Programmers use loops because we're lazy in a smart way — we never repeat ourselves when we can repeat our code! Let's prove it.",
        activities: [
          "Physical: clap 5 times. \"You just ran a loop! The instruction was 'clap' and you repeated it 5 times.\"",
          "Build a 5-move chain WITHOUT a loop first.",
          "Then rebuild WITH a repeat-5 loop. Same result — fewer blocks!",
          "\"Which would you rather build if you needed it to run 100 times?\"",
        ],
        questions: [
          "Can you think of something in real life that's a loop? (brushing teeth, seasons, school days)",
          "What goes INSIDE the loop? What goes OUTSIDE?",
          "What happens if the number in the repeat is 0? Try it!",
        ],
        success:
          "Child can build a repeat loop, change the number, and explain \"it runs X times.\"",
      },
      {
        dayLabel: "Week 3 · Day 2 · Tuesday",
        title: "Forever Loop!",
        emoji: "🌀",
        opening:
          "Yesterday's loop ran a set number of times. But what if you want something to NEVER stop — like a heartbeat, or the earth spinning? There's a special loop called Forever. It has no number because it runs until you press stop. Warning: once you start it, the only way to stop it is the red button!",
        activities: [
          "Build a simple forever loop with one action inside.",
          "Try adding grow + shrink inside a forever loop — flapping wings!",
          "Test: can two characters have different forever loops at the same time?",
        ],
        questions: [
          "Can you make a bird that flaps its wings forever using just grow and shrink inside a forever loop?",
          "What's dangerous about a forever loop if you put too many things inside it?",
          "Can two characters have different forever loops running at the same time? Try it!",
        ],
        success:
          "Child uses forever loop for continuous animation — flapping, bouncing, spinning — and can stop it with the red button.",
      },
      {
        dayLabel: "Week 3 · Days 3-4 · Wed-Thu",
        title: "Dance Party + Pattern Art",
        emoji: "🕺",
        opening:
          "Today we're choreographers — we'll design dances using loops. First step: design the dance on PAPER. What 4 moves make a good dance? Then we'll loop it. On Thursday: loops aren't just for dancing — they make beautiful patterns too!",
        activities: [
          "Design a 4-move dance on paper first.",
          "Build it as a loop in ScratchJr. Test and iterate.",
          "Add 2 more dancers with different loops — run all 3 together!",
          "Thursday: use move + turn inside a loop to create geometric patterns.",
        ],
        questions: [
          "What happens if two characters have loops with DIFFERENT numbers? Do they stay in sync?",
          "Can you make a pattern that looks like a spiral? What combination of moves would create that?",
          "If a dance has 4 moves and loops 8 times, how many total moves happen?",
        ],
        success:
          "3 dancers with different loop dances running simultaneously. A geometric pattern made with move+turn loops.",
      },
    ],
  },
  {
    weekNumber: 4,
    title: "Characters Talking to Each Other!",
    goal: "Child understands and uses message blocks to create character interactions and build a simple interactive experience",
    days: [
      {
        dayLabel: "Week 4 · Days 1-2 · Mon-Tue",
        title: "Messages + Chain Reactions",
        emoji: "📬",
        opening:
          "This week we unlock one of the most powerful ideas in programming: characters reacting to each other. One character does something, sends a signal, and another character responds. This is called event-driven programming — and it's how almost every app you've ever used works.",
        activities: [
          "Monday: Build two characters that interact via a message block.",
          "Ensure the message color matches between sender and receiver.",
          "Tuesday: Create a chain — the receiver ALSO sends a message to a third character!",
          "Build a 3+ character domino chain reaction.",
        ],
        questions: [
          "What's the most important thing about messages? (The colour must match!)",
          "What if you used the same colour message for two different receivers? What would happen?",
          "Where else in real life do you see chain reactions? (News spreads, falling dominoes, passing notes)",
        ],
        success:
          "Two characters interacting via message on Monday. A 3+ character chain reaction using multiple message colours on Tuesday.",
      },
      {
        dayLabel: "Week 4 · Days 3-4 · Wed-Thu",
        title: "Tap & Respond + First Game!",
        emoji: "🎮",
        opening:
          "Tap triggers are how games work — you tap something and things react. Today we'll build our most interactive project yet. On Thursday, you're building a REAL game!",
        activities: [
          "Wednesday: Build a project where tapping a character triggers another's response.",
          "Test different tap combinations and reactions.",
          "Thursday: Build a tap-to-win game — catch the star!",
          "Add a win reaction using message blocks.",
        ],
        questions: [
          "In your game, what makes the player feel like they WON? How can you make that feeling bigger?",
          "What would make your game harder? Easier? Can you add a difficulty setting?",
          "You're a game designer now — what's the one thing you'd add to make it more fun?",
        ],
        success:
          "A working tap-to-win game using messages to trigger a win reaction. Child can play it and explain how it works.",
      },
    ],
  },
  {
    weekNumber: 5,
    title: "Sound & Music!",
    goal: "Child can add sound effects, record voice, build a tap instrument, and synchronise sound with motion",
    days: [
      {
        dayLabel: "Week 5 · Days 1-3 · Mon-Wed",
        title: "Sounds + Voice + Instruments",
        emoji: "🎵",
        opening:
          "Close your eyes. I'm going to play two versions of the same animation — one with sound, one without. Which feels better? Sound changes EVERYTHING. This week we add sounds, record our voice, and build a musical instrument!",
        activities: [
          "Monday: Add sound effects from the library to an existing project.",
          "Tuesday: Record your own voice and use it as character dialogue.",
          "Wednesday: Build a 4-character tap instrument — each character plays a different note.",
          "Combine sounds with motion and timing from previous weeks.",
        ],
        questions: [
          "How does sound change the FEELING of a scene? Try the same animation with different sounds.",
          "If you had to choose one sound for your whole project, what would feel most 'you'?",
          "Can you play a tune on your instrument app? What song could work with just 4 notes?",
        ],
        success:
          "Child has used all three sound features — library sounds, recorded voice, and built a simple instrument.",
      },
    ],
  },
  {
    weekNumber: 6,
    title: "Grand Finale — The Big Project!",
    goal: "Child independently designs, builds, and presents a complete original ScratchJr project",
    days: [
      {
        dayLabel: "Week 6 · Full Week",
        title: "Design → Build → Polish → Present",
        emoji: "🎓",
        opening:
          "This is YOUR week. No lessons, no guided steps — just you and your ideas. I'm here as a helper, not a teacher. What would YOU build if you could build anything in ScratchJr? That's what we're making this week.",
        activities: [
          "Monday: Brainstorm and plan on paper — story, characters, features.",
          "Tuesday: Build the art — backgrounds and characters.",
          "Wednesday: Code it — scripts, timing, messages, loops.",
          "Thursday: Polish — test, fix bugs, add sound, refine timing.",
          "Friday: Present your project! Explain what it does, how you built it, and what you're most proud of.",
        ],
        questions: [
          "What is the ONE thing you learned in 6 weeks that surprised you most?",
          "What would you build next — now that you know how?",
          "What was the hardest bug you fixed? How did you figure it out?",
          "If you could teach a friend ONE thing about ScratchJr, what would it be?",
        ],
        success:
          "Child presents a complete project they're proud of and can explain it in their own words. Celebrate big! 🏆🎉",
      },
    ],
  },
];
