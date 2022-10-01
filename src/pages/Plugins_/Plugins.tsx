import { Input } from "@mantine/core";
import { Text } from "@mantine/core";
import { PluginCard } from "../../components/PluginCard/PluginCard";
import { useStyles } from "./Plugins.styles";
import { plugins } from "./utils/PluginsData";
import { Grid } from "@mantine/core";
import "../../sass/utils/themes.scss";
export const Plugins = () => {
  const { classes } = useStyles();

  const cards = plugins.map(({ description, title, commands, settings }) => {
    return (
      <Grid.Col md={6} lg={3} key={title}>
        <PluginCard
          title={title}
          description={description}
          commands={commands}
          settings={settings}
        />
      </Grid.Col>
    );
  });

  return (
    <>
      <main className={classes.main}>
        <Text color="var(--logo-text)" size="xl" weight={600}>
          Plugins
        </Text>
        <Input placeholder="Search" />
        <div className="cards">
          <Grid justify="flex-start">{cards}</Grid>
        </div>
      </main>
    </>
  );
};
