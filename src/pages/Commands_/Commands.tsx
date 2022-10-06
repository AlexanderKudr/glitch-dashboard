import { Text, Title, Box, Button, Grid } from "@mantine/core";
import { CommandCard } from "../../components/CommandCard/CommandCard";
import { Command, plugins } from "../../utils/PluginsData";
import "./Commands.scss";

export const Commands = () => {

  const result = plugins
  .map(({ commands }) => commands)
  .flatMap((command) => command)
  .map(({  description, command, help }) => (
    <Grid.Col key={command} md={6} lg={3}>
      <CommandCard
     
        description={description}
        command={command}
        help={help}
      />
    </Grid.Col>
  ));

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
      <Grid p="sm" align="stretch" grow justify="flex-start">
        {result}
      </Grid>
    </>
  );
};
