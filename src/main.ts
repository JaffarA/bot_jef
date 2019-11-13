import { getDefaultPrefix, getYoutubeToken, getDiscordToken } from "./config";
import { getServers } from "./servers";
import { getUsers } from "./users";
const Discord = require("discord.js");
const client = new Discord.Client();
const servers = getServers();

client.on("ready", () => {
  console.log(`
  I've connected! 💻😁
  `);
});

console.log(`
  Hello, I'm Bot Jef! 😊

  Default Prefix  : "${getDefaultPrefix()}"
  Discord Token   : "${getDiscordToken()}"
  Youtube Token   : "${getYoutubeToken()}"

  I'm starting the discord client, hang on... 💻😎
`);

client.login(getDiscordToken());
