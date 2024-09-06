import { Card, CardContent, Divider, Typography } from '@mui/material';
import { ListBio } from './ListBio';
import { User } from '../../types';

interface Props {
  user: User;
}
export const UserBio: React.FC<Props> = ({ user }) => {
  return (
    <Card
      sx={{
        width: { sx: '100%', sm: '100%', md: '350px' },
        maxWidth: { md: '400px' },
        height: 'fit-content',
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6">Intro</Typography>
        <Typography variant="body1" textAlign="center" mt={1}>
          {user.biography}
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <ListBio />
      </CardContent>
    </Card>
  );
};
