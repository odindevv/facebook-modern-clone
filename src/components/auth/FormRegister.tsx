import {
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';
import { BirthdaySelect } from './BirthdaySelect';
import { Terms } from './Terms';
export const FormRegister: React.FC = () => {
  return (
    <Box component="form" display="flex" flexDirection="column" gap={2}>
      <Box display="flex" gap={2}>
        <TextField type="text" label="First name" size="small" />
        <TextField type="text" label="Last name" size="small" />
      </Box>
      <TextField type="email" label="Email" size="small" />
      <TextField type="password" label="New password" size="small" />
      <Box
        display="flex"
        flexDirection="column"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      >
        <BirthdaySelect />

        <Typography variant="body2">Gender</Typography>
        <RadioGroup arial-label="gender" name="gender" row sx={{ ml: 2 }}>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </Box>
      <Terms />
      <Button variant="contained">Sign Up</Button>
    </Box>
  );
};
