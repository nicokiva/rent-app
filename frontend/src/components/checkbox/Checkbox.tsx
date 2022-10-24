import CheckboxBase from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps): JSX.Element => {
  return (
    <FormControlLabel control={<CheckboxBase checked={checked} size='small' onChange={onChange} />} label={label} />
  );
};
