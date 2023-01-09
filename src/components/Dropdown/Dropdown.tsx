import { Select, SelectProps as DropDownProps } from "@mantine/core";

export const Dropdown = (props: DropDownProps) => {
  return (
    <Select
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
      {...props}
    />
  );
};
