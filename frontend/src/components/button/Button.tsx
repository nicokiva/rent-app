import { Button as ButtonBase, ButtonProps as ButtonBaseProps } from "@mui/material";

export type ButtonProps = ButtonBaseProps;

export const Button = (props: ButtonBaseProps): JSX.Element => {
  return <ButtonBase {...props} />;
};
