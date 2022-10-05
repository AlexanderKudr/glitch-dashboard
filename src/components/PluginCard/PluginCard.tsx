import { useState } from "react";
import {
  MultiSelect,
  Button,
  Card,
  Switch,
  Text,
  Group,
  Modal,
} from "@mantine/core";
import { PluginsCardProps } from "../../utils/PluginsData";
import { BiMenuAltRight } from "react-icons/bi";
import { AiTwotoneSetting } from "react-icons/ai";
import { channels } from "../../utils/Channels";
import { roles } from "../../utils/ManagerRoles";
import "../../sass/components/dropdown.scss";
import "../../sass/components/button.scss";
import "../../sass/utils/themes.scss";
import "../../sass/components/ModalPlugin.scss";
import "../../sass/components/Switch.scss";

export const PluginCard = ({
  title,
  description,
  settings,
  commands,
}: PluginsCardProps) => {
  const [settingsOpened, setSettingsOpened] = useState<boolean>(false);
  const [commandsOpened, setCommandsOpened] = useState<boolean>(false);
  const [allowedChannels, setAllowedChannels] = useState<string[]>([]);
  const [allowedRoles, setAllowedRoles] = useState<string[]>([]);

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
            <Text color="var(--logo-text)">{title}</Text>
            <Switch color="indigo"></Switch>
          </Group>
        </Card.Section>
        <Card.Section p="sm">
          <Text mb="sm" color="var(--secondary-text)">
            {description}
          </Text>
          <Group>
            {settings && (
              <Button
                onClick={() => setSettingsOpened(true)}
                className="btn-secondary"
              >
                <AiTwotoneSetting style={{ paddingRight: "2px" }} />
                settings
              </Button>
            )}
            {commands && (
              <Button
                onClick={() => setCommandsOpened(true)}
                className="btn-secondary"
              >
                <BiMenuAltRight style={{ paddingRight: "2px" }} />
                commands
              </Button>
            )}
          </Group>
        </Card.Section>
      </Card>
      <Modal
        centered
        onClose={() => setSettingsOpened(false)}
        opened={settingsOpened}
        title={`Additional Permissions (${title})`}
      >
        <MultiSelect
          searchable
          label="allowed channels"
          className="dropdown"
          data={channels}
          value={allowedChannels}
          onChange={setAllowedChannels}
        />
        <MultiSelect
          searchable
          label="allowed roles"
          className="dropdown"
          data={roles}
          value={allowedRoles}
          onChange={setAllowedRoles}
        />
      </Modal>
      <Modal
        withCloseButton={false}
        className="plugin-modal"
        centered
        onClose={() => setCommandsOpened(false)}
        opened={commandsOpened}
        title={`Commands (${title})`}
      >
        {commands?.map(({ command }) => {
          return (
            <Switch
              key={command}
              label={command}
              className="switch"
              color="indigo"
              mb="sm"
            />
          );
        })}
      </Modal>
    </>
  );
};
