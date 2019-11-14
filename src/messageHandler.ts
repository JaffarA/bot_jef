import { serverExists, lastLine, Guild } from "./servers";
import { Server } from "./types";
import { Message } from "discord.js";

export function handleMessage(message: Message) {
  const serverOfOrigin = message.guild.id;
  const userOfOrigin = message.author.id;
  const content = message.content;

  serverUnique(serverOfOrigin);
  userUnique(userOfOrigin);
}

function serverUnique(origin: string) {
  if (serverExists(origin) === false) {

    const server: Server = {
      id: origin,
      bot_channel: "",
      anywhere_mode: true,
      use_default_prefix: true,
      prefix: "",
      line: lastLine(),
    };

    const guild = new Guild(server);
    guild.update();

    console.log(`
  A new server was discovered! 😍
  I've added it to servers.csv ✍
    `);

    return true;
  } else {
    return false;
  }
}
