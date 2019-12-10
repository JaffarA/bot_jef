import { getDefaultPrefix, getDiscordToken } from "./config";
import { getServers } from "./servers";
import { getUsers } from "./users";
import { handleMessage } from "./messageHandler";
import {
  Client,
  Message,
  User,
  VoiceChannel,
  VoiceConnection,
} from "discord.js";
const client = new Client();
let servers = getServers();

client.on("ready", () => {
  console.log(`
  I've connected! 💻😁
  `);
});

client.on("message", (msg: Message) => {
  handleMessage(msg, client);
});

console.log(`
  Hello, I'm Bot Jef! 😊

  Default Prefix  : "${getDefaultPrefix()}"
  Discord Token   : "${getDiscordToken()}"

  I'm starting the discord client, hang on... 💻😎
`);

client.login(getDiscordToken());
