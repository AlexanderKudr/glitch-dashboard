import { TextInput } from "@mantine/core";
import { PluginCard } from "../../components/PluginCard/PluginCard";
import { plugins } from "../../utils/PluginsData";
import { Grid, Title } from "@mantine/core";
import "../../sass/utils/themes.scss";
import "../../sass/components/input-text.scss";
import { useState, useEffect } from "react";

export const Plugins = () => {
  const [data, setData] = useState([]);
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

  const getData = async () => {
    const login = import.meta.env.VITE_LOGIN;
    const pass = import.meta.env.VITE_PASSWORD;

    const credentials = `${login}:${pass}`;

    try {
      const response = await fetch(import.meta.env.VITE_URL, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      const result = await response.json();
      setData(result)
      
    } catch (err: any) {
      console.log("ERROR: ", err);
    }
  }; 
useEffect(() => {
  getData()
  console.log(data)
}, []);
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
