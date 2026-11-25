import { writeFileSync } from "node:fs";

const word = "tabyrinth";

const entryPath = "/output/entry.txt";

console.log(word);
writeFileSync(entryPath, word, "utf8");
