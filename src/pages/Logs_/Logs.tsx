import { Grid, Text, Title, Box, Table } from "@mantine/core";
import { TableComp } from "../../components/Table/TableComp";
import { activities } from "../../utils/RecentActivities";
import { useState } from "react";
export const Logs = () => {
  
  return (
    <>
      <Title p="sm" color="var(--logo-text)" order={3} weight={600}>
        Logs
      </Title>
      <Text p="sm" style={{ color: "var(--secondary-text" }}>
        History of changes goes here:
      </Text>
      <Grid justify="center" m="sm">
        <Grid.Col
          style={{
            border: "1px var(--divider-bl) solid",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <TableComp tableContent={activities} />
        </Grid.Col>
      </Grid>
    </>
  );
};
