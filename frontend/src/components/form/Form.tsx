import FormControl from "@mui/material/FormControl";

interface FormProps {
  children: Array<JSX.Element> | JSX.Element;
}

export const Form = (props: FormProps): JSX.Element => {
  return <FormControl {...props} />;
};
