export interface User {
  id: number;
  blocked: boolean;
  line: number;
}

export type Users = User[];

export interface Server {
  id: number;
  bot_channel: number;
  anywhere_mode: boolean;
  use_default_prefix: boolean;
  prefix: string;
  line: number;
}

export interface GuildServer {
  id: number;
  bot_channel: number;
  anywhere_mode: boolean;
  use_default_prefix: boolean;
  prefix: string;
  line: number;

  usesDefaultPrefix(): boolean;
  usesBotChannel(): boolean;
}

export type Servers = GuildServer[];

export interface Config {
  default_prefix: string;
  discord_token: string;
  youtube_token: string;
}
