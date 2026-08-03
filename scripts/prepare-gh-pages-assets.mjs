import { readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDirectory = "out";
const nextDirectory = join(outputDirectory, "_next");
const pagesSafeDirectory = join(outputDirectory, "next-assets");

rmSync(pagesSafeDirectory, { recursive: true, force: true });
renameSync(nextDirectory, pagesSafeDirectory);

const textFilePattern = /\.(css|html|js|json|map|txt|webmanifest|xml)$/;

function rewriteReferences(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      rewriteReferences(path);
      continue;
    }

    if (!textFilePattern.test(path)) {
      continue;
    }

    const current = readFileSync(path, "utf8");
    const next = current.replaceAll("/_next", "/next-assets");

    if (next !== current) {
      writeFileSync(path, next);
    }
  }
}

rewriteReferences(outputDirectory);
