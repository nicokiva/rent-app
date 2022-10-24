import TextField, { TextFieldProps } from "@mui/material/TextField";

export const Input = (props: TextFieldProps): JSX.Element => {
  return <TextField variant='outlined' style={{ width: "100%" }} {...props} />;
};
