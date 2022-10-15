import { Center, Text, Container, Title } from "@mantine/core";
import { useTheme } from "../hooks/useTheme";
import Lottie from "lottie-react";
import errorAnimation from "../assets/animations/errorAnimation.json";

export const ErrorPage = () => {
  const { themes, currentTheme } = useTheme();

  return (
    <Container style={{ display: "flex", width: "100vh" }}>
      <Center style={{ width: "100vh", height: "100vh", display: "flex" }}>
        <Title order={1} color="white">
          Ooops!
          <Text size="md" style={{ color: "var(--secondary-text)" }}>
            You weren't supposed to see this.
            <Lottie animationData={errorAnimation} />
          </Text>
        </Title>
      </Center>
    </Container>
  );
};
