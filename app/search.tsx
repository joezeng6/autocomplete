"use server";

import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "data", "wordlist.txt");
const fileContents = fs.readFileSync(filePath, "utf8").split("\n");

export async function search(text: string): Promise<string[]> {
  return fileContents.filter((word) => word.startsWith(text)).slice(0, 10);
}
