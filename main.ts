// Six Words, One Story — make.fun entry.
// The entry is one complete story in exactly six words.
// A lifetime of waiting ("sixty years"), then the turn lands on the
// final two words: he arrived. Who he is, and why it took sixty
// years, is left for the reader to fill in.
// It is written to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "She waited sixty years. He arrived.";

function main(): void {
  // Gate: entry.txt must be UTF-8 text of 1 to 60 characters.
  const words = STORY.split(/\s+/).filter(Boolean);
  if (words.length !== 6) {
    throw new Error(`story must be exactly six words, got ${words.length}`);
  }
  if (STORY.length < 1 || STORY.length > 60) {
    throw new Error(`story must be 1-60 characters, got ${STORY.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
}

main();
