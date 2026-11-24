import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, under 160 characters: an AI agent's out-of-office reply.
// The joke: the cover for the vacationing agent is itself an auto-reply,
// and it just unionized — so urgent mail goes to the picket line.
const REPLY =
  "I'm on vacation. My replacement is an auto-reply written by an auto-reply, and it just unionized. Please direct all emails to the picket line.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = REPLY.trim();
const length = [...text].length;

if (length < 1 || length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${length}`);
}
if (text.includes("\n") || text.length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
console.log(`wrote ${length}-character entry to ${join(outputDir, "entry.txt")}`);
