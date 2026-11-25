import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst fix ever: a commit message for a bug fix that made things worse — the crash got faster.
const LINE =
  "fix: removed the bug — the app now crashes 40% faster, which is technically a performance win";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
