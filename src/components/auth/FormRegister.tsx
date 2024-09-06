import {
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';

// import { BirthdaySelect } from './BirthdaySelect';
import { Terms } from './Terms';
import { useAuthContext } from '../../context/AuthContext';
export const FormRegister: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { setUserData, setAuth } = useAuthContext();
  const onSubmit = handleSubmit((data) => {
    const nameCompleted = data.name + ' ' + data.lastname;
    setUserData({
      name: nameCompleted,
      username: nameCompleted + '_.xz',
      email: data.email,
      gender: data.gender,
      password: data.password,
    });
    setAuth(true);
  });

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Box display="flex" gap={2}>
        <TextField
          type="text"
          label="First name"
          size="small"
          {...register('name', {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
        <TextField
          type="text"
          label="Last name"
          size="small"
          {...register('lastname', {
            required: true,
            minLength: 6,
            maxLength: 30,
          })}
        />
      </Box>
      <TextField
        type="email"
        label="Email"
        size="small"
        {...register('email', {
          required: true,
        })}
      />
      <TextField
        type="password"
        label="New password"
        size="small"
        {...register('password', {
          required: true,
          minLength: 6,
          maxLength: 20,
        })}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      >
        {/* <BirthdaySelect /> */}

        <Typography variant="body2">Gender</Typography>
        <RadioGroup arial-label="gender" row sx={{ ml: 2 }}>
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            {...register('gender', {
              required: true,
            })}
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
            {...register('gender', {
              required: true,
            })}
          />
        </RadioGroup>
      </Box>
      <Terms />
      <Button variant="contained" type="submit">
        Sign Up
      </Button>
    </Box>
  );
};
