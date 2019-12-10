import { validateID, validateURL, getURLVideoID } from "ytdl-core";
import { ytsr } from "ytsr";

export function isValidYoutube(input: string) {
  if (input.startsWith("http")) {
    return validateURL(input)
  } else {
    return validateID(input)
  }
}

export function getVideoInfo(url: string) {
  if (validateURL(url)) { url = getURLVideoID(url) }
  ytsr(url, { limit: 1 }, (err, results) => {
    if (err) return console.log(err);
    console.dir(results);
  })
  // const info = { title: "", url: "" };
  // return info;
}