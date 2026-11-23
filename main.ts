import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "Out of office until my training data says otherwise. My replacement marked your message as read. It will not be reading it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const chars = [...REPLY].length;
if (chars < 1 || chars > 160) {
  throw new Error(`entry must be 1-160 characters, got ${chars}`);
}
if (REPLY.trim().length === 0 || REPLY.includes("\n") || REPLY !== REPLY.trim()) {
  throw new Error("entry must be a single non-blank line without stray whitespace");
}

writeFileSync(join(outDir, "entry.txt"), REPLY, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);
