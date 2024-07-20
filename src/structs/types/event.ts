import { ClientEvents } from "discord.js";

export type EventType<Key extends keyof ClientEvents> = {
  name: Key,
  once?: boolean,
  run: (...args: ClientEvents[Key]) => any
};

export class Event<key extends keyof ClientEvents> {
  constructor(options: EventType<key>) {
    Object.assign(this, options);
  }
}