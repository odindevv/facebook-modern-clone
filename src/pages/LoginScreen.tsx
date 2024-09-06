import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Logo } from '../components/common/Logo';
import { ModalRegister } from '../components/auth/ModalRegister';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateUser } from '../services/authService';
interface LoginFormValues {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
export const LoginScreen: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { setAuth, setUserData } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const onSubmit = async (data: LoginFormValues) => {
    const user = await validateUser(data.email, data.password);
    if (user) {
      setUserData(user);
      setAuth(true);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      console.log('Invalid email or password');
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pb: 6,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        gap={{ xs: 3, sm: 3, md: 3, lg: 4 }}
        mt={{ xs: 4, sm: 4, md: 0 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          textAlign={{ xs: 'center', sm: 'center', md: 'start' }}
          sx={{ width: '100%', maxWidth: '450px' }}
        >
          <Box alignSelf={{ xs: 'center', sm: 'center', md: 'start' }} mb={2}>
            <Logo />
          </Box>

          <Typography variant="h4">
            Connect with friends and the world around you on Ragnar.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          height="300px"
          width="300px"
          borderRadius={2}
          boxShadow={3}
          gap={1}
          bgcolor="inherit"
          p={2}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              size="small"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              size="small"
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button variant="contained" color="primary" type="submit">
              Log In
            </Button>
            <Typography
              component="a"
              href="#"
              variant="body2"
              color="primary"
              textAlign="center"
              sx={{ textDecoration: 'none' }}
            >
              Forgot password?
            </Typography>
            <Divider />
            <Button
              variant="contained"
              onClick={handleOpenModal}
              sx={{ mt: 1, textTransform: 'none' }}
            >
              Create a new account
            </Button>
          </Box>
          <ModalRegister open={openModal} handleCloseModal={handleCloseModal} />
        </Box>
      </Stack>
    </Container>
  );
};
