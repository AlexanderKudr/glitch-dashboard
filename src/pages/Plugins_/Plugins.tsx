import { Input } from "@mantine/core";
import { Text } from "@mantine/core";
import { PluginCard } from "../../components/PluginCard/PluginCard";
import { useStyles } from "./Plugins.styles";
import { plugins } from "./utils/PluginsData";

export const Plugins = () => {

  const { classes } = useStyles();

  const cards = plugins.map(({description, title,commands, settings}) => {
    return (
      <PluginCard
        key={title}
        title={title}
        description={description}
        commands={commands}
        settings={settings}
      />
    );
  });

  return (
    <>
      <main className={classes.main}>
        <Text size="xl" weight={600}>
          Plugins
        </Text>
        <Input placeholder="Search" />
        <div className="cards">
          {cards}
        </div>
      </main>
    </>
  );
};
