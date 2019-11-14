export interface User {
  id: string;
  blocked: boolean;
  line: number;
}

export type Users = User[];

export interface Server {
  id: string;
  bot_channel: string;
  anywhere_mode: boolean;
  use_default_prefix: boolean;
  prefix: string;
  line: number;
}

export interface GuildServer {
  id: string;
  bot_channel: string;
  anywhere_mode: boolean;
  use_default_prefix: boolean;
  prefix: string;
  line: number;

  update(): boolean;
  usesDefaultPrefix(): boolean;
  usesBotChannel(): boolean;
}

export type Servers = GuildServer[];

export interface Config {
  default_prefix: string;
  discord_token: string;
  youtube_token: string;
}
