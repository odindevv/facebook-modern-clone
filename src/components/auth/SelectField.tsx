import { TextField, MenuItem } from '@mui/material';

interface Props {
  label: string;
  options: Array<string | number>;
  defaultValue: string;
}
export const SelectField: React.FC<Props> = ({
  label,
  options,
  defaultValue,
}) => {
  return (
    <TextField select label={label} defaultValue={defaultValue} size="small">
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};
