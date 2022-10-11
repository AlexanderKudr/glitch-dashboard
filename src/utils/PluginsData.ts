export interface PluginsCardProps {
  name: string;
  description: string;
  settings?: string;
  isEnabled: boolean;
  uuid: string;
  commands: Command[]; //fix types when commands aren't necessary
}
export interface Command {
  command: string;
  description: string;
  help: string;
}
