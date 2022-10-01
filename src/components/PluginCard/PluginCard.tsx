import { Button, Card, Switch, Text, Group } from "@mantine/core";
import { PluginsCardProps } from "../../pages/Plugins_/utils/PluginsData";
import "../../sass/components/button.scss";
import "../../sass/components/card.scss";
import "../../sass/utils/themes.scss";
export const PluginCard = ({
  title,
  description,
  settings,
  commands,
}: PluginsCardProps) => {
  return (
    <Card
      style={{
        backgroundColor: "var(--main-bg)",
        border: "1px solid var(--darkish-blue)",
      }}
      mb="sm"
    >
      <Card.Section p="sm">
        <Group position="apart">
          <Text color="var(--logo-text)">{title}</Text>
          <Switch color="indigo"></Switch>
        </Group>
      </Card.Section>
      <Card.Section p="sm">
        <Text mb="sm" color="var(--secondary-text)">
          {description}
        </Text>
        <Group>
          {settings && <Button className="btn-secondary">settings</Button>}
          {commands && <Button className="btn-secondary">commands</Button>}
        </Group>
      </Card.Section>
    </Card>
  );
};
