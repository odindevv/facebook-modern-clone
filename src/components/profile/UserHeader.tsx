import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

import {
  PersonAddAlt1 as PersonAddIcon,
  QuestionAnswer as QuestionAnswerIcon,
} from '@mui/icons-material';

export const UserHeader: React.FC = () => {
  return (
    <Card sx={{ mt: 4, boxShadow: 2 }}>
      <CardContent sx={{ display: 'flex', gap: 3 }}>
        <Avatar
          src="https://i.pinimg.com/originals/db/b1/07/dbb107c31711fb06ada1b5f754f7bbb6.jpg"
          sx={{ width: 110, height: 110, boxShadow: 4 }}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6">Odin Martinez</Typography>
            <Typography variant="body1">120 Friends</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
            gap={1}
          >
            <Button
              variant="contained"
              color="inherit"
              startIcon={<PersonAddIcon />}
            >
              Friends
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<QuestionAnswerIcon />}
            >
              Message
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
