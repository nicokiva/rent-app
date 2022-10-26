import CheckboxBase from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export const Checkbox = ({ className, label, checked, onChange }: CheckboxProps): JSX.Element => {
  return (
    <FormControlLabel
      control={<CheckboxBase className={className} checked={checked} size='small' onChange={onChange} />}
      label={label}
    />
  );
};
