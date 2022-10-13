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
import { channels } from "../../utils/Channels";
import { roles } from "../../utils/ManagerRoles";
import "../../sass/components/dropdown.scss";
import "../../sass/utils/themes.scss";
import "../../sass/components/ModalPlugin.scss";
import "../../sass/components/Switch.scss";
import axios from "axios";

export const PluginCard = ({
  name,
  description,
  isEnabled,
  uuid,
}: PluginsCardProps) => {
  const [settingsOpened, setSettingsOpened] = useState<boolean>(false);
  const [commandsOpened, setCommandsOpened] = useState<boolean>(false);
  const [allowedChannels, setAllowedChannels] = useState<string[]>([]);
  const [allowedRoles, setAllowedRoles] = useState<string[]>([]);

  const [isEnabledInner, setIsEnabledInner] = useState<boolean>(isEnabled);
  const [switchDisabled, setSwitchDisabled] = useState<boolean>(false);

  const updatePluginCard = async () => {
    const login = import.meta.env.VITE_LOGIN;
    const pass = import.meta.env.VITE_PASSWORD;
    const credentials = `${login}:${pass}`;
    try {
      setIsEnabledInner((prevState) => !prevState);
      setSwitchDisabled(state => !state)
      const response = await axios.put(
        `${import.meta.env.VITE_URL_PlUGINS}/${uuid}`,
        {
          isEnabled: !isEnabledInner,
          name,
          uuid,
          description,
        },
      );
      setSwitchDisabled(state => !state)
    } catch (err) {
      if (err instanceof Error) {
        console.log("ERROR: ", err.message);
      }
    }
  };

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
            <Text color="var(--logo-text)">{name}</Text>

            <Switch
              onClick={() => updatePluginCard()}
              checked={isEnabledInner}
              className="switch"
              disabled={switchDisabled}
            />
          </Group>
        </Card.Section>
        <Card.Section p="sm">
          <Text mb="sm" color="var(--secondary-text)">
            {description}
          </Text>
          <Group>
            {/* {settings && (
              <Button
                onClick={() => setSettingsOpened(true)}
                className="btn-secondary"
              >
                <AiTwotoneSetting style={{ paddingRight: "2px" }} />
                settings
              </Button>
            )} */}

            <Button
              onClick={() => setCommandsOpened(true)}
              className="btn-secondary"
            >
              <BiMenuAltRight style={{ paddingRight: "2px" }} />
              commands
            </Button>
          </Group>
        </Card.Section>
      </Card>
      {/* modal for settings */}
      <Modal
        centered
        onClose={() => setSettingsOpened(false)}
        opened={settingsOpened}
        title={`Additional Permissions (${name})`}
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

      {/* modal for commands */}
      <Modal
        withCloseButton={false}
        className="plugin-modal"
        centered
        onClose={() => setCommandsOpened(false)}
        opened={commandsOpened}
        title={`Commands (${name})`}
      >
        {/* {commands?.map(({ command }) => {
          return (
            <Switch
              key={command}
              label={command}
              className="switch"
              color="indigo"
              mb="sm"
            />
          );
        })} */}
      </Modal>
    </>
  );
};
