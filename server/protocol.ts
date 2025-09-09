export type ClientEvent =
  | { type: 'hello'; name: string }
  | { type: 'chat'; msg: string };

export type ServerEvent =
  | { type: 'welcome'; msg: string }
  | { type: 'chat'; msg: string };
