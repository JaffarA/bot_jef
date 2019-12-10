import { serverExists, lastLine, Guild } from "./servers";
import { Server } from "./types";
import {
  Client,
  Message,
  User,
  VoiceChannel,
  VoiceConnection,
} from "discord.js";
import { getDefaultPrefix } from "./config";
import { stringify } from "querystring";

function stripPrefix(text: String) {
  return text.startsWith(getDefaultPrefix())
    ? text.slice(getDefaultPrefix().length)
    : text;
}

function splitMessageIntoArgs(text: String) {
  return text.split(/ +/);
}

function getCommand(text: String) {
  if (text.startsWith(getDefaultPrefix())) {
    return splitMessageIntoArgs(stripPrefix(text)).shift();
  } else {
    return splitMessageIntoArgs(text).shift();
  }
}

function getArgs(text: String) {
  if (text.startsWith(getDefaultPrefix())) {
    return splitMessageIntoArgs(stripPrefix(text)).slice(1);
  } else {
    return splitMessageIntoArgs(text).slice(1);
  }
}

export function handleMessage(message: Message, client: Client) {
  const serverOfOrigin = message.guild.id;
  const userOfOrigin = message.author.id;
  const channelOfOrigin = message.channel.id;
  const content = message.content;
  const command = getCommand(content);
  const args = getArgs(content);

  // serverUnique(serverOfOrigin);
  // userUnique(userOfOrigin);

  if (!content.startsWith(getDefaultPrefix())) {
    return;
  }

  if (args[args.length - 1] === "--debug") {
    // @ts-ignore
    client.channels
      .get(channelOfOrigin)
      // @ts-ignore
      .send(
        `||**DEBUG**\n**Command:** '${command}'\n**Arguments:** '${args.join(
          "', '"
        )}'||`
      );
  }

  console.log(`
Command Received! 📬

Author    : ${userOfOrigin}
Server    : ${serverOfOrigin}
Command   : ${command}
Arguments : ${args}

  `);

  if (command === "hello") {
    message.reply("Hi! 😃")
  } else {
    message.reply(`\n**Unrecognized command.**`);
  }

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
