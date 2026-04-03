export interface BlockCard {
  emoji: string;
  name: string;
  fullName: string;
  description: string;
  tip: string;
  note: string;
}

export interface BlockCategory {
  id: string;
  label: string;
  color: string;       // tailwind bg class
  textColor: string;   // tailwind text class
  borderColor: string;
  tagline: string;
  blocks: BlockCard[];
}

export const blockCategories: BlockCategory[] = [
  {
    id: "trigger",
    label: "Trigger Blocks",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
    borderColor: "border-yellow-300",
    tagline: "Yellow · Go at the START of every script · These make things begin",
    blocks: [
      {
        emoji: "▶",
        name: "Green Flag",
        fullName: "Green Flag",
        description: "Starts the script when the big green flag button is pressed. This is the main \"Play\" button for your whole project.",
        tip: "Put this at the start of every script you want to run when you press Play.",
        note: "Every script MUST start with a trigger block. No trigger = nothing happens!",
      },
      {
        emoji: "👆",
        name: "Tap",
        fullName: "Tap (Character)",
        description: "Starts the script when you tap that specific character on the screen with your finger.",
        tip: "Tap the dog → it barks. Tap the star → it disappears. Each character can have its own tap script!",
        note: "A character can have BOTH a Green Flag script AND a Tap script — they work independently.",
      },
      {
        emoji: "📩",
        name: "Receive",
        fullName: "Receive Message",
        description: "Starts the script when a matching coloured message arrives. Waits silently until that message colour is sent by another character.",
        tip: "Character A sends a red message → Character B's red Receive block fires and it starts moving.",
        note: "The colour of Send and Receive MUST match exactly. Different colour = nothing happens.",
      },
      {
        emoji: "📳",
        name: "Bump",
        fullName: "Bump (Shake)",
        description: "Starts the script when the device is shaken or bumped. A fun surprise trigger!",
        tip: "Shake the tablet → an earthquake happens on screen → characters fly in all directions!",
        note: "Works best on real tablets/phones. Great for secret effects that surprise younger kids.",
      },
    ],
  },
  {
    id: "motion",
    label: "Motion Blocks",
    color: "bg-blue-100",
    textColor: "text-blue-800",
    borderColor: "border-blue-300",
    tagline: "Blue · Move characters around the stage",
    blocks: [
      {
        emoji: "→",
        name: "Move Right",
        fullName: "Move Right",
        description: "Moves the character to the right by the number of steps shown. The number in the box controls how far — bigger number = farther.",
        tip: "Number 1 = tiny step. Number 10 = big jump across the screen.",
        note: "Tap the number inside the block to change it. Chain multiple blocks to travel farther!",
      },
      {
        emoji: "←",
        name: "Move Left",
        fullName: "Move Left",
        description: "Moves the character to the left. Same as Move Right but in the opposite direction.",
        tip: "Right then Left makes a character pace back and forth.",
        note: "Characters keep facing the same direction when moving left — they don't flip around automatically.",
      },
      {
        emoji: "↑",
        name: "Move Up",
        fullName: "Move Up",
        description: "Moves the character up the screen. Use it to make things fly, jump, or float upwards.",
        tip: "Move Up + Move Down = a bouncing ball or a jumping character.",
        note: "Combine with Move Right for diagonal movement — characters can move diagonally!",
      },
      {
        emoji: "↓",
        name: "Move Down",
        fullName: "Move Down",
        description: "Moves the character down the screen. For falling, sinking, or walking downhill.",
        tip: "Make rain fall with several small characters using Move Down in a loop.",
        note: "Characters can go below the bottom edge of the screen and \"disappear\" — useful for exits!",
      },
      {
        emoji: "↩️",
        name: "Turn Right",
        fullName: "Turn Right",
        description: "Rotates the character clockwise. The number controls how many clockwise turns — 1 turn = a small rotation, 12 turns = a full 360° spin.",
        tip: "Turn Right 6 = half a turn. Turn Right 12 = full spin. Great for wheels and propellers!",
        note: "Inside a loop, even a small turn creates a spinning animation effect.",
      },
      {
        emoji: "↪️",
        name: "Turn Left",
        fullName: "Turn Left",
        description: "Rotates the character counter-clockwise. Opposite of Turn Right.",
        tip: "Turn Right then Turn Left in a loop = a wobbling wiggle dance!",
        note: "Alternating Turn Right and Turn Left creates a rocking or shaking effect — perfect for a scared character!",
      },
      {
        emoji: "🏠",
        name: "Go Home",
        fullName: "Go Home",
        description: "Instantly teleports the character back to where it started — its \"home\" position on the stage.",
        tip: "At the end of a game, Go Home resets every character to its starting position so the game can be played again.",
        note: "A character's home is wherever you placed it when you added it. You can move it to set a new home.",
      },
      {
        emoji: "💨",
        name: "Hop",
        fullName: "Hop",
        description: "Makes the character jump forward with a little arc — like a hop! It moves up and then comes back down in one smooth motion.",
        tip: "Perfect for a frog jumping, a rabbit hopping, or a person skipping.",
        note: "Hop always goes in the direction the character is facing. Rotate first to control the direction of the hop.",
      },
    ],
  },
  {
    id: "looks",
    label: "Looks Blocks",
    color: "bg-purple-100",
    textColor: "text-purple-800",
    borderColor: "border-purple-300",
    tagline: "Purple · Change how characters look",
    blocks: [
      {
        emoji: "💬",
        name: "Say",
        fullName: "Say",
        description: "Shows a speech bubble with text above the character. Tap the block to type what you want the character to say.",
        tip: "Type \"Hello!\" and the character will show a speech bubble saying Hello! for a moment.",
        note: "The bubble appears briefly. Use a Wait block after Say to give people time to read it.",
      },
      {
        emoji: "📈",
        name: "Grow",
        fullName: "Grow",
        description: "Makes the character bigger by one size step. Each Grow block adds one step of size.",
        tip: "Chain 5 Grow blocks in a row to make a character grow dramatically large!",
        note: "Grow inside a loop creates a continuous growing animation. Combine with Shrink for a pulsing effect.",
      },
      {
        emoji: "📉",
        name: "Shrink",
        fullName: "Shrink",
        description: "Makes the character smaller by one size step. Opposite of Grow.",
        tip: "Shrink + Grow + Shrink + Grow in a loop = a heartbeat pulsing animation!",
        note: "A character can shrink until it disappears completely — great for a \"poof, it's gone!\" effect.",
      },
      {
        emoji: "🙈",
        name: "Hide",
        fullName: "Hide",
        description: "Makes the character invisible — it disappears from the screen but is still there. It can reappear with a Show block.",
        tip: "Hide a star at the start → when it's \"caught\" it hides → looks like it was collected!",
        note: "A hidden character's scripts still run! It can still send messages and react — you just can't see it.",
      },
      {
        emoji: "👁️",
        name: "Show",
        fullName: "Show",
        description: "Makes a hidden character visible again. Like magic — it appears out of thin air!",
        tip: "Start with a character hidden → make it appear with Show when a message arrives → surprise reveal!",
        note: "Hide + Show in a forever loop = a flashing, blinking animation. Great for alarms and lights!",
      },
      {
        emoji: "🔄",
        name: "Reset Size",
        fullName: "Reset Size",
        description: "Returns the character instantly to its original size — no matter how big or small it has become.",
        tip: "After growing huge for a dramatic effect, Reset Size snaps it back to normal instantly.",
        note: "Great at the start of a \"play again\" reset sequence to restore everything to its original state.",
      },
    ],
  },
  {
    id: "sound",
    label: "Sound Blocks",
    color: "bg-green-100",
    textColor: "text-green-800",
    borderColor: "border-green-300",
    tagline: "Green · Add sounds, music & voice",
    blocks: [
      {
        emoji: "🎵",
        name: "Play Sound",
        fullName: "Play Sound",
        description: "Plays a sound effect from ScratchJr's library — things like \"pop!\", \"meow\", \"boing\", and more. Tap the block to pick which sound.",
        tip: "Tap a character → it plays a \"boing\" sound → feels like a real button in an app!",
        note: "The script continues while the sound plays. Use a Wait block if you want the next action to happen AFTER the sound finishes.",
      },
      {
        emoji: "🎤",
        name: "Record",
        fullName: "Record (Voice)",
        description: "Records your own voice or any sound using the device microphone and saves it to this block. Plays your recording when the script runs.",
        tip: "Record \"3… 2… 1… Launch!\" → attach to a rocket character → it narrates its own launch!",
        note: "Record in a quiet room and speak clearly. Each block can hold one unique recording.",
      },
      {
        emoji: "🔇",
        name: "Stop Sound",
        fullName: "Stop Sound",
        description: "Stops any sound that is currently playing. Useful to cut a sound short before it finishes naturally.",
        tip: "Music playing in a loop → tap a button character → Stop Sound cuts the music suddenly for dramatic effect.",
        note: "Stops ALL sounds — not just the one from the same character. Good for a reset or \"game over\" moment.",
      },
      {
        emoji: "🎹",
        name: "Play Note",
        fullName: "Play Note",
        description: "Plays a musical note. Tap the block to select the pitch. Chain different notes together to create a melody.",
        tip: "Connect 8 notes in a row to play \"Happy Birthday\" — each block is one note of the song.",
        note: "Build a tap-instrument by giving each character a different note. Tap them in order to play a tune!",
      },
    ],
  },
  {
    id: "control",
    label: "Control Blocks",
    color: "bg-orange-100",
    textColor: "text-orange-800",
    borderColor: "border-orange-300",
    tagline: "Orange · Control timing, repeating & messages",
    blocks: [
      {
        emoji: "⏳",
        name: "Wait",
        fullName: "Wait",
        description: "Pauses the script for a set number of seconds before continuing to the next block. Controls the timing of your animation.",
        tip: "Say \"Ready?\" → Wait 2 → Say \"GO!\" — the pause makes the countdown feel real.",
        note: "Wait 1 = 1 second pause. Experiment — different wait times create totally different moods!",
      },
      {
        emoji: "🔁",
        name: "Repeat",
        fullName: "Repeat",
        description: "Runs the blocks inside it a set number of times, then moves on. The number controls how many times it repeats.",
        tip: "Repeat 3 → Move Right → runs Move Right three times in a row without needing three separate blocks.",
        note: "Repeat 0 = skips the blocks inside entirely. Repeat 100 = runs a very long time. What does Repeat 1 do?",
      },
      {
        emoji: "♾️",
        name: "Forever",
        fullName: "Forever (Loop)",
        description: "Runs the blocks inside it over and over — FOREVER — until the red stop button is pressed. It never ends on its own.",
        tip: "Forever → Grow → Shrink = wings flapping continuously, like a flying bird!",
        note: "Nothing after a Forever block will ever run — it loops infinitely. Use Stop to end it.",
      },
      {
        emoji: "📤",
        name: "Send",
        fullName: "Send Message",
        description: "Sends a coloured signal to any character that has a matching Receive block. Used to make characters react to each other.",
        tip: "Character A: Green Flag → Send Red → Character B: Receive Red → Jump. A controls B!",
        note: "ALL characters with the matching colour Receive block will react — you can trigger many characters with one Send!",
      },
      {
        emoji: "📄",
        name: "Go to Page",
        fullName: "Go to Page",
        description: "Instantly jumps to a different page (scene) in your project. The number tells it which page to go to.",
        tip: "End of Scene 1 → Go to Page 2. Tap a door → Go to Page 3. Build a whole story with page jumps!",
        note: "Change the page number by tapping it. Page 1 is always your first page — count from left in the page tray.",
      },
    ],
  },
  {
    id: "end",
    label: "End Blocks",
    color: "bg-red-100",
    textColor: "text-red-800",
    borderColor: "border-red-300",
    tagline: "Red · Go at the END of a script · These finish things off",
    blocks: [
      {
        emoji: "🛑",
        name: "Stop",
        fullName: "Stop",
        description: "Stops all scripts on ALL characters — like pressing the red stop button. Everything freezes instantly.",
        tip: "Catch the star → Send WIN message → Character B receives WIN → Stop. Game over!",
        note: "Stop is permanent — nothing can restart after Stop except pressing the Green Flag again.",
      },
      {
        emoji: "🔂",
        name: "Go Back",
        fullName: "Go Back to Start",
        description: "Jumps back to the very beginning of the same script and runs it again — like pressing play a second time automatically.",
        tip: "Script: Move Right → Go Back to Start → the character slides right endlessly without a Forever loop!",
        note: "This creates a loop without using the Repeat or Forever blocks. It keeps running until you press Stop.",
      },
    ],
  },
];
