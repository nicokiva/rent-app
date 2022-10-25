import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ButtonProps } from "../Button";

export const Add = (props: ButtonProps): JSX.Element => {
  return (
    <Button style={{ width: "100px" }} variant='contained' {...props}>
      <AddIcon />
    </Button>
  );
};
