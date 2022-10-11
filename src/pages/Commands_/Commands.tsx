import { Title, Button, Grid } from "@mantine/core";
import "../../sass/components/button.scss";
import { useState } from "react";

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
      <Grid p="sm" align="stretch" grow justify="flex-start">
      </Grid>
    </>
  );
};
