import type {ButtonProps as MantineButtonProps} from '@mantine/core'
import {Button as MantineButton} from '@mantine/core';

interface ButtonProps extends MantineButtonProps{
  customVariant: "primary" | "secondary";
} 

export const Button = (props: ButtonProps) => {
     
    return (
        <MantineButton {...props} >
            {props.children}
        </MantineButton>
    )
}