import "./Sidebar.scss";
import { Navbar } from "@mantine/core";
export const Sidebar = () => {
  return (
    <>
      <Navbar
        height={700}
        p="xs"
        width={{
          // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
          sm: 300,

          // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
          lg: 400,

          // When other breakpoints do not match base width is used, defaults to 100%
          base: 100,
        }}
      >
        <Navbar.Section>Test</Navbar.Section>
        <Navbar.Section grow mt="md">
          {/* Links sections */}
        </Navbar.Section>
        <Navbar.Section>{/* Footer with user */}</Navbar.Section>
      </Navbar>
    </>
  );
};
