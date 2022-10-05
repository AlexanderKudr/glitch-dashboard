export interface PluginsCardProps {
  title: string;
  description: string;
  settings?: string;
  commands?: Command[];
}

export interface Command {
  title: string;
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
        title: "Sandbox",
        command: "helloworld",
        help: "help",
        description: "Replies Hello World in 3 different languages.",
      },
      {
        title: "Sandbox",
        command: "modal_test",
        help: "help",
        description: "Test for creating a modal.",
      },
      {
        title: "Sandbox",
        command: "ping",
        help: "help",
        description: "Replies with pong.",
      },
      {
        title: "Sandbox",
        command: "stats",
        help: "help",
        description: "Shows some server stats.",
      },
      {
        title: "Sandbox ",
        command: "yehaw",
        help: "help",
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
        title: "Brainfuck",
        command: "bf",
        help: "help",
        description: "Executes Brainfuck code",
      },
    ],
  },
];
