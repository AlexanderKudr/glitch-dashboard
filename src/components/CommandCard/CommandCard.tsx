import { Card, Text, Switch, Group } from "@mantine/core";
import { Command, PluginsCardProps } from "../../utils/PluginsData";
export const CommandCard = ({ command, description, help }: Command) => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "var(--main-bg)",
          border: "1px solid var(--darkish-blue)",
        }}
        mb="sm"
      >
        <Card.Section p="sm">
          <Group position="apart">
            <Text color="var(--logo-text)">{command}</Text>
            <Switch color="indigo"></Switch>
          </Group>
        </Card.Section>
        <Card.Section p="sm">
          <Text mb="sm" color="var(--secondary-text)">
            {description}
            {help}
          </Text>
        </Card.Section>
      </Card>
    </>
  );
};
