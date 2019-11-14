import { GuildServer, Servers, Server } from "./types";
import { loadCsv, writeCsv } from "./csv";
const filepath = "./data/servers.csv";

class Guild implements GuildServer {
  id: number;
  bot_channel: number;
  anywhere_mode: boolean;
  use_default_prefix: boolean;
  prefix: string;
  line: number;

  constructor(server: Server) {
    this.id = server.id;
    this.bot_channel = server.bot_channel;
    this.anywhere_mode = server.anywhere_mode;
    this.use_default_prefix = server.use_default_prefix;
    this.prefix = server.prefix;
    this.line = server.line;
  }

  usesDefaultPrefix() {
    return this.use_default_prefix;
  }

  usesBotChannel() {
    return this.anywhere_mode;
  }
}

function updateServer(server: Server) {
  const line: number = server.line;
  const string: string = [
    server.id,
    server.bot_channel,
    server.anywhere_mode,
    server.use_default_prefix,
    server.prefix,
  ].join(",");
  writeCsv(filepath, line, string);
}

export function getServers() {
  const rawData = loadCsv(filepath)
    .split("\n")
    .map(line => line.split(","));

  const servers: Servers = [];
  rawData.forEach((e, i) => {
    const server: Server = {
      id: parseInt(e[0]),
      bot_channel: parseInt(e[1]),
      anywhere_mode: e[2] === "true" ? true : false,
      use_default_prefix: e[3] === "true" ? true : false,
      prefix: e[4],
      line: i,
    };
    servers.push(new Guild(server));
  });

  return servers;
}

function findServerById(id: number) {
  const servers: Servers = getServers();
  return servers.find(server => server.id === id);
}

export function serverExists(id: number) {
  return findServerById(id) ? true : false;
}
