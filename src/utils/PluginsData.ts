export interface PluginsCardProps {
  title: string;
  description: string;
  settings?: string;
  commands?: Command[];
}

export interface Command {
  title: string;
  command: string;
}

export const plugins: PluginsCardProps[] = [
  {
    title: "Sandbox",
    description: "Multiple functionality",
    settings: "Settings",
    commands: [
      { title: "Sandbox", command: "helloworld" },
      { title: "Sandbox", command: "modal_test" },
      { title: "Sandbox", command: "ping" },
      { title: "Sandbox", command: "stats" },
      { title: "Sandbox ", command: "yehaw" },
    ],
  },
  {
    title: "Brainfuck",
    description: "Convert normal language into gybrish stuff:)",
    settings: "Settings",
    commands: [{ title: "Brainfuck", command: "bf" }],
  },
];
