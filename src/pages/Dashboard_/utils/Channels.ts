import { nanoid } from "nanoid";
export interface Channels {
  id: string;
  title: string;
}

export const channels: Channels[] = [
  { id: nanoid(), title: "sandbox" },
  { id: nanoid(), title: "dynolog" },
  { id: nanoid(), title: "bots" },
  { id: nanoid(), title: "moderator-only" },
  { id: nanoid(), title: "text" },
  { id: nanoid(), title: "mobile" },
  { id: nanoid(), title: "devops" },
  { id: nanoid(), title: "databases" },
  { id: nanoid(), title: "backend" },
  { id: nanoid(), title: "frontend" },
  { id: nanoid(), title: "coding-quiz" },
  { id: nanoid(), title: "memes" },
  { id: nanoid(), title: "codewars" },
  { id: nanoid(), title: "roast-my-code" },
  { id: nanoid(), title: "general" },
  { id: nanoid(), title: "welcome" },
  { id: nanoid(), title: "rules" },
  { id: nanoid(), title: "roles" },
];
