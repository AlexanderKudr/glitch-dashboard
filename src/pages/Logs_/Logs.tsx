import "./Logs.scss";
import { Grid, Text, Title } from "@mantine/core";
export const Logs = () => {
  return (
    <>
      <Title p="sm" color="var(--logo-text)" order={3} weight={600}>
        Logs
      </Title>
      <Grid justify="center">
        <Grid.Col span={3} style={{ backgroundColor: "red" }}>
          <Text color="white">
            Test
          </Text>
        </Grid.Col>
        <Grid.Col
          style={{ backgroundColor: "white", minHeight: "200px" }}
          span={3}
        >
          <Text color="black">Test</Text>
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: "gray" }} span={3}>
          <Text color="white">Test</Text>
        </Grid.Col>
      </Grid>
    </>
  );
};
