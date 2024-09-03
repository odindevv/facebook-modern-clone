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

export const FriendCard: React.FC<Friend> = ({
  user,
  username,
  biography,
  avatar,
  header,
}) => {
  return (
    <Card sx={{ m: 1, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={header}
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
            @{user}
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
  );
};
