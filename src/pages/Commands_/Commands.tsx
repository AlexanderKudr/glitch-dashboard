import { Title, Button, Grid } from "@mantine/core";
import { CommandCard } from "../../components/CommandCard/CommandCard";
import { plugins, PluginsCardProps } from "../../utils/PluginsData";
import "../../sass/components/button.scss";
import { useState } from "react";

export const Commands = () => {
  const result = plugins
    .flatMap(({ commands }) => commands)
    .map(({ description, command, help }) => (
      <Grid.Col key={command} md={6} lg={6}>
        <CommandCard description={description} command={command} help={help} />
      </Grid.Col>
    ));
  const [data, setData] = useState([]);
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
      setData(result);
      setLoading(false);
    } catch (err: any) {
      console.log("ERROR: ", err);
    }
  };
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
