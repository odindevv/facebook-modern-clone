import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Avatar,
  Box,
  Typography,
} from '@mui/material';
import { Friend } from '../../types';
import { TruncatedTypography } from '../common/TruncatedTypography';
import { NavLink } from 'react-router-dom';

export const FriendCard: React.FC<Friend> = ({
  name,
  username,
  biography,
  avatar,
  banner,
}) => {
  return (
    <Box
      component={NavLink}
      to={`/user/${username}`}
      sx={{ textDecoration: 'none' }}
    >
      <Card sx={{ m: 1, boxShadow: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={banner}
            alt="Friend"
            height="120px"
            sx={{ position: 'relative' }}
          />
          <Avatar
            src={avatar}
            sx={{
              position: 'absolute',
              top: '42%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 80,
              height: 80,
              border: '3px solid white',
            }}
          />
          <CardContent
            sx={{
              mt: 1,
            }}
          >
            <Typography variant="body2" color="primary.main">
              @{name}
            </Typography>
            <Box display="flex" justifyContent="space-between" gap={1}>
              <Typography variant="body1" gutterBottom>
                {username}
              </Typography>
            </Box>
            <TruncatedTypography variant="body1" lineClamp={1} gutterBottom>
              {biography}
            </TruncatedTypography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
