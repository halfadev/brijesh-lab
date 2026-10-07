import { readdir, readFile, writeFile } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";

const projectRoot = process.cwd();
const contentRoot = resolve(projectRoot, "content");
const outputPath = resolve(projectRoot, "lib/generated-content.json");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve(directory, entry.name);
      return entry.isDirectory() ? walk(entryPath) : [entryPath];
    }),
  );

  return files.flat();
}

const sourceFiles = (await walk(contentRoot))
  .filter((filePath) => /\.(md|mdx)$/.test(filePath))
  .sort();

const registry = await Promise.all(
  sourceFiles.map(async (filePath) => ({
    path: relative(contentRoot, filePath).split(sep).join("/"),
    raw: await readFile(filePath, "utf8"),
  })),
);

await writeFile(outputPath, `${JSON.stringify(registry, null, 2)}\n`, "utf8");
