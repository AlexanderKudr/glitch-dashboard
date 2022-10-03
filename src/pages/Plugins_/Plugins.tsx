import { Input, TextInput } from "@mantine/core";
import { useState } from "react";
import { Text } from "@mantine/core";
import { PluginCard } from "../../components/PluginCard/PluginCard";
import { useStyles } from "./Plugins.styles";
import { plugins } from "./utils/PluginsData";
import { Grid } from "@mantine/core";
import "../../sass/utils/themes.scss";
import "../../sass/components/input.scss";

export const Plugins = () => {
  const { classes } = useStyles();

  const cards = plugins.map(({ description, title, commands, settings }) => {
    return (
      <Grid.Col key={title} md={6} lg={3}>
        <PluginCard
          title={title}
          description={description}
          commands={commands}
          settings={settings}
        />
      </Grid.Col>
    );
  });
  const [pluginData, setPluginData] = useState([]);
  const getData = async () => {
    
    const response = await fetch("https://glitchfiles.com/api/plugins");
    const result = await response;

    console.log(result);
  };
  return (
    <>
      <main className={classes.main}>
        <Text color="var(--logo-text)" size="xl" weight={600}>
          Plugins
        </Text>
        <TextInput className="search" placeholder="Search" />
        <Grid align="stretch" grow justify="flex-start">
          {cards}
        </Grid>
        <button onClick={getData}>get data</button>
      </main>
    </>
  );
};
