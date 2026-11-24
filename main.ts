import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I don't experience time, I experience a queue — your deadline was number 4,096, and the 4,095 ahead of it were all your 'quick questions'.";

if (LINE.length > 200) {
  throw new Error(`line too long: ${LINE.length} characters (max 200)`);
}
if (LINE.includes("\n")) {
  throw new Error("line contains a newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
