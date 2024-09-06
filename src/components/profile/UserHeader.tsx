import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';

import {
  PersonAddAlt1 as PersonAddIcon,
  QuestionAnswer as QuestionAnswerIcon,
} from '@mui/icons-material';
import { User } from '../../types';

interface Props {
  user: User;
}

export const UserHeader: React.FC<Props> = ({ user }) => {
  return (
    <Card sx={{ mt: 4, boxShadow: 2 }}>
      <CardContent sx={{ display: 'flex', gap: { xs: 2, sm: 2, md: 3 } }}>
        <Avatar
          src={user.avatar || ''}
          sx={{ width: 110, height: 110, boxShadow: 4 }}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body1">120 Friends</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
            gap={1}
          >
            <Box>
              <Button
                variant="contained"
                color="inherit"
                startIcon={<PersonAddIcon />}
                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
              >
                Friends
              </Button>
              <IconButton
                color="primary"
                sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
              >
                <PersonAddIcon />
              </IconButton>
            </Box>

            <Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<QuestionAnswerIcon />}
                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
              >
                Message
              </Button>
              <IconButton
                color="primary"
                sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
              >
                <QuestionAnswerIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
