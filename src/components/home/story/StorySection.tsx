import { Box } from '@mui/material';
import { StoryCard } from './StoryCard';
export const StorySection: React.FC = () => {
  // sx={{ flex: '0 0 auto' }}
  return (
    <Box display="flex" gap={2}>
      <StoryCard
        backgroundStory="https://picsum.photos/200/300"
        user="Yordy Martinez"
        isPostStory={true}
      />
      <StoryCard
        backgroundStory="https://picsum.photos/200/300"
        user="Yordy Martinez"
      />
      <StoryCard
        backgroundStory="https://picsum.photos/200/300"
        user="Yordy Martinez"
      />
      <StoryCard
        backgroundStory="https://picsum.photos/200/300"
        user="Yordy Martinez"
      />
      <StoryCard
        backgroundStory="https://picsum.photos/200/300"
        user="Yordy Martinez"
      />
    </Box>
  );
};
