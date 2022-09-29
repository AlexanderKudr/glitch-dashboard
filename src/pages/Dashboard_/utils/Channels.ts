import { nanoid } from "nanoid";
import { SelectItem } from "@mantine/core";

export const channels: Array<SelectItem> = [
  { value: nanoid(), label: "sandbox" },
  { value: nanoid(), label: "dynolog" },
  { value: nanoid(), label: "bots" },
  { value: nanoid(), label: "moderator-only" },
  { value: nanoid(), label: "text" },
  { value: nanoid(), label: "mobile" },
  { value: nanoid(), label: "devops" },
  { value: nanoid(), label: "databases" },
  { value: nanoid(), label: "backend" },
  { value: nanoid(), label: "frontend" },
  { value: nanoid(), label: "coding-quiz" },
  { value: nanoid(), label: "memes" },
  { value: nanoid(), label: "codewars" },
  { value: nanoid(), label: "roast-my-code" },
  { value: nanoid(), label: "general" },
  { value: nanoid(), label: "welcome" },
  { value: nanoid(), label: "rules" },
  { value: nanoid(), label: "roles" },
];
