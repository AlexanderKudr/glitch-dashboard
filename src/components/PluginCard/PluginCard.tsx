import { Button, Card, Switch, Text } from "@mantine/core";
import { Plugins } from "../../pages/Plugins_/Plugins";
import { PluginsCardProps } from "../../pages/Plugins_/utils/PluginsData";

export const PluginCard = ({
  title,
  description,
  settings,
  commands,
}: PluginsCardProps) => {
  return (
    <Card>
      <Card.Section className="">
        <Text>{title}</Text>
        <Switch></Switch>
      </Card.Section>
      <Card.Section>
        <Text>{description}</Text>
        {settings && <Button>settings</Button>}
        {commands && <Button>commands</Button>}
      </Card.Section>
    </Card>
  );
};
