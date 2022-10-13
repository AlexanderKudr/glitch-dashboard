import { TextInput } from "@mantine/core";
import { PluginCard } from "../../components/PluginCard/PluginCard";
import { Grid, Title, Loader, Center } from "@mantine/core";
import "../../sass/utils/themes.scss";
import "../../sass/components/input-text.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export const Plugins = () => {
  const [pluginData, setPlugindata] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const login = import.meta.env.VITE_LOGIN;
    const pass = import.meta.env.VITE_PASSWORD;
    const credentials = `${login}:${pass}`;

    try {
      setLoading(true);
      const response = await axios.get(import.meta.env.VITE_URL_PlUGINS, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      setPlugindata(response.data);
      setLoading(false);
    } catch (err: any) {
      console.log("ERROR: ", err);
    }
  }; 

  const pluginCards = pluginData.map(
    ({ description, name, isEnabled, uuid }) => {
      return (
        <Grid.Col key={name} md={3} lg={3}>
          <PluginCard
            name={name}
            description={description}
            // commands={commands}
            // settings={settings}
            isEnabled={isEnabled}
            uuid={uuid}
          />
        </Grid.Col>
      );
    }
  );
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
          pluginCards
        )}
      </Grid>
    </>
  );
};
