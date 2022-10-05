import { Text, Title, Box, Button } from "@mantine/core";
import "./Commands.scss";


export const Commands = () => {
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
    </>
  );
};
