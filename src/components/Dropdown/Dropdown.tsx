import { Select, SelectProps } from "@mantine/core";

type Props = Pick<SelectProps, "data">;

export const Dropdown = (props: SelectProps) => {
  return (
    <Select
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
      {...props}
    />
  );
};
