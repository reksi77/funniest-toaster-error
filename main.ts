// The Funniest Toaster Error Message — one line, written to /output/entry.txt.
//
// The line is a constant: no randomness, no network, no input of any kind.
// Every run writes byte-identical output — the same 109 characters, no
// trailing newline, so the file is exactly the line and nothing else.
//
// The line: a toaster, deadpan, reports that the bagel in slot two has been
// squatting there since Tuesday. It toasts around it now. The bagel is,
// legally speaking, a roommate.

import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "ERROR 07: The bagel in slot two has been here since Tuesday. I toast around it now. It is legally a roommate.";

// The gate refuses anything outside 1-120 characters, whitespace-only, or
// more than one line, so fail loudly instead of shipping a bad file.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 120) {
  throw new Error(`entry must be 1-120 characters, got ${chars}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Clear the directory's contents, never the directory itself: on the
// grader /output is a mount point, and removing the mount fails.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
// Read the file back and verify it byte-for-byte: a write that silently
// truncates or re-encodes would pass the gate checks above and still fail
// the sealed scorer, so catch it here instead of shipping it.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: entry.txt does not equal the entry line");
}
if (Buffer.byteLength(written, "utf8") !== [...ENTRY].length) {
  throw new Error("entry is not pure single-byte UTF-8 text");
}
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
