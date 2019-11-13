import { readFileSync, createWriteStream } from "fs";

export function loadCsv(filepath: string) {
  return readFileSync(filepath, { encoding: "UTF-8" });
}

export function writeCsv(filepath: string, line: number, string: string) {
  const file = createWriteStream(filepath, { encoding: "UTF-8", start: line });
  file.write(string);
  file.end();
}
