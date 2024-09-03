import { Button, Avatar, styled, Badge, Typography, Box } from '@mui/material';

type Status = 'Active' | 'Offline';
interface Props {
  avatar: string;
  user: string;
  status: Status;
}

export const UserProfileItem: React.FC<Props> = ({ avatar, user, status }) => {
  const isActiveStatus = status === 'Active' ? '#44b700' : '#222';
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: isActiveStatus,
      color: isActiveStatus,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Button
        sx={{
          display: 'flex',
          gap: 2,
          width: '100%',
          justifyContent: 'flex-start',
          textAlign: 'left',
          textTransform: 'none',
        }}
        color="inherit"
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar src={avatar} alt="Avatar image" />
        </StyledBadge>
        <Typography variant="body1" color="inherit">
          {user}
        </Typography>
      </Button>
    </Box>
  );
};
