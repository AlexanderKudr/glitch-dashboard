import { useEffect, useState } from "react";
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
import axios from "axios";

export const PluginCard = ({
  name,
  description,
  settings,
  commands,
  isEnabled,
  uuid,
}: PluginsCardProps) => {
  const [settingsOpened, setSettingsOpened] = useState<boolean>(false);
  const [commandsOpened, setCommandsOpened] = useState<boolean>(false);
  const [allowedChannels, setAllowedChannels] = useState<string[]>([]);
  const [allowedRoles, setAllowedRoles] = useState<string[]>([]);

  // const updatePluginCard = async () => {
  //   const login = import.meta.env.VITE_LOGIN;
  //   const pass = import.meta.env.VITE_PASSWORD;
  //   const credentials = `${login}:${pass}`;
  //   try {
  //     const response = await fetch(`${import.meta.env.VITE_URL}/710e292e-856b-4151-a9c5-6414f542baf6`, {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `Basic ${credentials}`,
  //       },
  //       body:JSON.stringify({isEnabled: false,  name: "brainfuck", uuid: "710e292e-856b-4151-a9c5-6414f542baf6", description: "Convert normal language into gybrish stuff:)", })
  //     });
  //     const result = await response.json();
  //     console.log(result)
  //    console.log(JSON.stringify({uuid, isEnabled: !isEnabled, name, description, }))
  //   } catch (err: any) {
  //     console.log("ERROR: ", err);
  //   }
  // };

  const updatePluginCard = async () => {
    const login = import.meta.env.VITE_LOGIN;
    const pass = import.meta.env.VITE_PASSWORD;
    const credentials = `${login}:${pass}`;
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_URL}/${uuid}`,
        {
          body: {
            isEnabled: !isEnabled,
            name,
            uuid,
            description,
          },
        }
      );
    } catch (err: any) {
      console.log("ERROR: ", err.response);
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
              onChange={() => updatePluginCard()}
              checked={isEnabled}
              className="switch"
            />

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
