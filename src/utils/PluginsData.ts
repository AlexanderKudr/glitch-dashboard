import { useEffect } from "react";
export interface PluginsCardProps {
  title: string;
  description: string;
  settings?: string;
  commands: Command[];
}
export interface Command {
  command: string;
  description: string;
  help?: string;
}



export const plugins: PluginsCardProps[] = [
  {
    title: "Sandbox",
    description: "Multiple functionality",
    settings: "Settings",
    commands: [
      {
        command: "helloworld",
        help: "in progress",
        description: "Replies Hello World in 3 different languages.",
      },
      {
        command: "modal_test",
        help: "in progress",
        description: "Test for creating a modal.",
      },
      {
        command: "ping",
        help: "in progress",
        description: "Replies with pong.",
      },
      {
        command: "stats",
        help: "in progress",
        description: "Shows some server stats.",
      },
      {
        command: "yehaw",
        help: "in progress",
        description: "Printing Yehaw!",
      },
    ],
  },
  {
    title: "Brainfuck",
    description: "Convert normal language into gybrish stuff:)",
    settings: "Settings",
    commands: [
      {
        command: "bf",
        help: "help",
        description: "Executes Brainfuck code",
      },
    ],
  },
];
