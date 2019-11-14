import { serverExists } from "./servers";
import { Message } from "discord.js"

export function handleMessage(message: Message) {
  const serverOfOrigin = message.guild.id;
  const userOfOrigin = message.author.id;
  const content = message.content;
}
