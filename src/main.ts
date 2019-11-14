import { getDefaultPrefix, getYoutubeToken, getDiscordToken } from "./config";
import { getServers } from "./servers";
import { getUsers } from "./users";
import { handleMessage } from "./messageHandler"
import { Client, Message } from "discord.js"
const client = new Client();
let servers = getServers();

client.on("ready", () => {
  console.log(`
  I've connected! 💻😁
  `);
});

client.on("message", (msg: Message) => {
  handleMessage(msg);
});

console.log(`
  Hello, I'm Bot Jef! 😊

  Default Prefix  : "${getDefaultPrefix()}"
  Discord Token   : "${getDiscordToken()}"
  Youtube Token   : "${getYoutubeToken()}"

  I'm starting the discord client, hang on... 💻😎
`);

client.login(getDiscordToken());
