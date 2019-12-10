import { readFileSync } from "jsonfile";
import { Config } from "./types";

const filepath = "./config.json";

function loadConfig() {
  const config: Config = readFileSync(filepath);
  return config;
}

export function getDefaultPrefix() {
  return loadConfig().default_prefix;
}

export function getDiscordToken() {
  return loadConfig().discord_token;
}
