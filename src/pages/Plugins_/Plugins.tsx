import { TextInput } from "@mantine/core";
import { useState } from "react";
import { Text } from "@mantine/core";
import { PluginCard } from "../../components/PluginCard/PluginCard";
import { plugins } from "../../utils/PluginsData";
import { Grid, Box, Title } from "@mantine/core";
import "../../sass/utils/themes.scss";
import "../../sass/components/input-text.scss";

export const Plugins = () => {
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
    try {
      const response = await fetch("https://glitchfiles.com/api/plugins", {
        method: "POST",
        body: JSON.stringify({
          username: "",
          password: "",
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (err: any) {
      console.log("ERROR: ", err);
    }
  };
  return (
    <>
      <Title p="sm" color="var(--logo-text)" order={3} weight={600}>
        Plugins
      </Title>
      <TextInput p="sm" className="search" placeholder="Search" />
      <Grid p="sm" align="stretch" grow justify="flex-start">
        {cards}
      </Grid>
      <button onClick={getData}>get data</button>
    </>
  );
};
