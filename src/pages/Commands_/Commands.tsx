import { Title, Button, Grid } from "@mantine/core";
import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import "../../sass/components/button.scss";
import axios from "axios";
import { CommandCard } from "../../components/CommandCard/CommandCard";

export interface Command {
  type: string;
  command: string;
  description: string;
  options: Option[];
  isEnabled: boolean;
}

export interface Option {
  name: string;
  description: string;
  isRequired: boolean;
}

export const Commands = () => {
  const { themes, currentTheme } = useTheme();

  const [commandsData, setCommandsData] = useState<Command[] | null>(null);

  // const [loading, setLoading] = useState(false);

  const getData = async () => {
    const login = import.meta.env.VITE_LOGIN;
    const pass = import.meta.env.VITE_PASSWORD;
    const credentials = `${login}:${pass}`;
    const credInfo = {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    };
    let endpoints = [
      "https://glitchfiles.com/api/plugins/710e292e-856b-4151-a9c5-6414f542baf6/commands",
      "https://glitchfiles.com/api/plugins/2f73db78-da6d-4b07-af29-e48f3e04e8f8/commands",
      "https://glitchfiles.com/api/plugins/b11b366c-d647-420d-b8cb-56975da23568/commands",
    ];

    const commands = await Promise.all(
      endpoints.map((endpoint) => axios.get(endpoint).then(({ data }) => data))
    ).then((commands) => commands.flatMap((command) => command));
    setCommandsData(commands);
  };

  useEffect(() => {
    getData();
  }, []);

  const commandCards = (commands: Command[]) =>
    commands.map(({ command, description }) => {
      return (
        <Grid.Col md={6} lg={6}>
          <CommandCard
            key={command}
            command={command}
            description={description}
          />
        </Grid.Col>
      );
    });

  return (
    <>
      <Title p="sm" color="var(--logo-text)" order={3} weight={600}>
        Commands
      </Title>
      <Button m="sm" className="btn-commands">
        Enable all
      </Button>
      <Button m="sm" className="btn-commands">
        Disable all
      </Button>
      <Grid p="sm" align="stretch" grow justify="center">
        <>{commandsData && commandsData.length && commandCards(commandsData)}</>
      </Grid>
    </>
  );
};
