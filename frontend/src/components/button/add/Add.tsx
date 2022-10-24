import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ButtonProps } from "../Button";

export const Add = (props: ButtonProps): JSX.Element => {
  return (
    <Button variant='contained' {...props}>
      <AddIcon />
    </Button>
  );
};
