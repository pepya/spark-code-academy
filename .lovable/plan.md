## Plan: Translate Block Flashcards page (BG + ES)

Add full i18n coverage for the Block Flashcards page so switching to Bulgarian (and Spanish, for consistency with the rest of the app) translates every visible string — header, usage tips, controls, category labels/taglines, and all 29 block cards (name, fullName, description, tip, note).

### Approach

Mirror the pattern already used for Lessons:

1. **Create dedicated translation modules**
   - `src/i18n/flashcards-en.ts`
   - `src/i18n/flashcards-bg.ts`
   - `src/i18n/flashcards-es.ts`

   Each exports:
   - `ui`: header title/subtitle, "Tap to flip", print button, filter labels ("Show:", "All blocks"), 4 usage tip cards, CTA section.
   - `categories`: per category id (`trigger`, `motion`, `looks`, `sound`, `control`, `end`) → `{ label, shortLabel, tagline }`.
   - `blocks`: per block key (stable id like `green-flag`, `move-right`, etc.) → `{ fullName, description, tip, note }`.

2. **Add stable ids to block data** (`src/data/blockFlashcards.ts`)
   - Add an `id: string` field to `BlockCard` (kebab-case) so translations can be looked up reliably without depending on the English `name`. Keep emoji, category metadata, and `hasNumber` in the data file (non-textual).
   - Keep English strings in the data file as fallbacks.

3. **Register namespace** in `src/i18n/index.ts`
   - Merge under key `flashcardsPage` for each language, same shape as `lessonPage`.

4. **Update `src/pages/BlockFlashcardsPage.tsx`**
   - Use `useTranslation()`.
   - Replace hardcoded strings (header, tips array, print button, filter UI, CTA, print-layout heading) with `t("flashcardsPage.ui.*")`.
   - In `FlashCard` and `PrintCard`: render `fullName/description/tip/note` via `t(\`flashcardsPage.blocks.\${block.id}.field\`, fallback)`.
   - Render category `label` and `tagline` via `t(\`flashcardsPage.categories.\${category.id}.*\`, fallback)`; use `shortLabel` for the filter chips (replaces current `label.replace(" Blocks", "")`).

5. **No visual/logic changes** — only string sourcing.

### Files

- create: `src/i18n/flashcards-en.ts`, `src/i18n/flashcards-bg.ts`, `src/i18n/flashcards-es.ts`
- edit: `src/i18n/index.ts`, `src/data/blockFlashcards.ts` (add `id`), `src/pages/BlockFlashcardsPage.tsx`
