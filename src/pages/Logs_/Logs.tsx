import "./Logs.scss";
import { Grid, Text } from "@mantine/core";
export const Logs = () => {
  return (
    <div>
      <Grid justify="center">
        <Grid.Col span={3} style={{ backgroundColor: "red" }}>
          <Text color="white">
            TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
          </Text>
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: "white", minHeight: "200px" }} span={3}>
          <Text color="black">Test</Text>
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: "gray" }} span={3}>
          <Text color="white">Test</Text>
        </Grid.Col>
      </Grid>
    </div>
  );
};
