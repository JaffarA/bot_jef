import { validateID, validateURL } from "ytdl-core";
import { ytsr } from "ytsr";
import { getYoutubeToken } from "./config";

export function isValidYoutube(input: string) {
  if (input.startsWith("http")) {
    return validateURL(input)
  } else {
    return validateID(input)
  }
}

export function getVideoInfo(url: string) {
  ytsr(url, { limit: 1 }, (err, results) => {
    if (err) return console.log(err);
    console.dir(results);
  })
  const info = { title: "", url: "" };
  return info;
}