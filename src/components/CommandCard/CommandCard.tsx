import { Card, Text, Switch, Group, Button, Modal } from "@mantine/core";
import { useState } from "react";
import "../../sass/components/Toggle.scss";
export const CommandCard = ({ command, description}: any) => {
  const [helpOpened, setHelpOpened] = useState<boolean>(false);
  
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
            <Switch className="toggle-plugin" color="indigo"></Switch>
          </Group>
        </Card.Section>
        <Card.Section p="sm">
          <Text mb="sm" color="var(--secondary-text)">
            {description}
          </Text>
        </Card.Section>
      </Card>
      {/* <Modal
        withCloseButton={false}
        className="plugin-modal"
        centered
        onClose={() => setHelpOpened(false)}
        opened={helpOpened}
      >
      </Modal> */}
    </>
  );
};
