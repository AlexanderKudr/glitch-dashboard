export interface PluginsCardProps {
  title: string;
  description: string;
  settings?: string;
  commands?: string;
}

export const plugins: PluginsCardProps[] = [
  {
    title: "Sandbox",
    description: "Multiple functionality",
    settings: "Settings",
    commands: "Commands",
  },
  {
    title: "Brainfuck",
    description: "Convert normal language into gybrish stuff:)",
    settings: "Settings",
    commands: "Commands",
  },
];
