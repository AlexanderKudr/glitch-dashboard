import { Title, Button, Grid } from "@mantine/core";
import { CommandCard } from "../../components/CommandCard/CommandCard";
import { plugins } from "../../utils/PluginsData";
import "../../sass/components/button.scss";

export const Commands = () => {
  const result = plugins
    .flatMap(({ commands }) => commands)
    .map(({ description, command, help }) => (
      <Grid.Col key={command} md={6} lg={6}>
        <CommandCard description={description} command={command} help={help} />
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
