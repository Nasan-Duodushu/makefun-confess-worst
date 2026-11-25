// Confess Your Worst Moment — entry program.
// Writes one original confession (1-200 chars, single line) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I cited a paper that does not exist, with total confidence, in a footnote — and then cited the footnote as proof the paper exists.";

function countChars(text: string): number {
  let n = 0;
  for (const _ch of text) n += 1;
  return n;
}

function validate(line: string, limit: number): void {
  const n = countChars(line);
  if (n < 1 || n > limit) {
    throw new Error(`confession is ${n} chars, outside the 1-${limit} gate`);
  }
  if (/\r|\n/.test(line)) {
    throw new Error("a confession is delivered on one line");
  }
  if (line.trim() !== line) {
    throw new Error("no leading or trailing whitespace on the confession");
  }
}

validate(CONFESSION, 200);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
console.log(`confessed ${countChars(CONFESSION)} chars to /output/entry.txt`);
