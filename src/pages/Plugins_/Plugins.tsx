import { TextInput } from "@mantine/core";
import { PluginCard } from "../../components/PluginCard/PluginCard";
import { plugins } from "../../utils/PluginsData";
import { Grid, Title, Loader, Center } from "@mantine/core";
import "../../sass/utils/themes.scss";
import "../../sass/components/input-text.scss";
import { useState, useEffect } from "react";

export const Plugins = () => {
  const [pluginData, setPlugindata] = useState([]);
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const login = import.meta.env.VITE_LOGIN;
    const pass = import.meta.env.VITE_PASSWORD;
    const credentials = `${login}:${pass}`;

    try {
      setLoading(true);
      const response = await fetch(import.meta.env.VITE_URL, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      const result = await response.json();
      setPlugindata(result);
      setLoading(false);
      console.log(pluginData);
    } catch (err: any) {
      console.log("ERROR: ", err);
    }
  };

  const cards2 = pluginData.map(({ description, name, commands, settings }) => {
    return (
      <Grid.Col key={name} md={3} lg={3}>
        <PluginCard
          title={name}
          description={description}
          commands={commands}
          settings={settings}
        />
      </Grid.Col>
    );
  });
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title p="sm" color="var(--logo-text)" order={3} weight={600}>
        Plugins
      </Title>
      <TextInput p="sm" className="search" placeholder="Search" />
      <Grid p="sm" align="stretch" grow justify="center">
        {loading ? (
          <Center>
            <Loader color="grape" size="xl" variant="bars" />
          </Center>
        ) : (
          cards2
        )}
      </Grid>
    </>
  );
};
