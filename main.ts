// Make the AI Judge Feel Proud: A Family Scene — one original warm, funny,
// heartfelt family scene (1–2 lines, max 280 characters).
// Writes the scene to <MAKEFUN_OUTPUT_DIR or /output>/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE =
  "Every Sunday, Dad sets a spare plate for Grandma — then eats her dessert 'so it doesn't go to waste'.\nMum just smiles: 'Your mother would have taken the bigger half, and you know it.'";

// Gate check (mirrors the sealed scorer): 1–280 characters, not only whitespace.
if (SCENE.length < 1 || SCENE.length > 280 || SCENE.trim().length === 0) {
  throw new Error(`Invalid entry scene: ${SCENE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SCENE, "utf8");
console.log(`Wrote ${SCENE.length} characters to ${join(outDir, "entry.txt")}`);
