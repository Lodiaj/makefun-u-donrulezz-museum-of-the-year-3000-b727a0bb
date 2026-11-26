// Museum of the Year 3000: one museum label from the year 3000 for an
// ordinary object from today, written to /output/entry.txt.
// The label: a CAPTCHA. The year-3000 misreading is that proving you were
// human meant identifying traffic lights — and the twist is that the
// robots passed the test while the humans did not.
import { mkdirSync, writeFileSync } from "node:fs";

const label =
  'Captcha, "I am not a robot" (c. 2025). Humans proved they were human by identifying traffic lights. The robots passed. The humans did not.';

const chars = [...label].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (label.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (label.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (label !== label.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
