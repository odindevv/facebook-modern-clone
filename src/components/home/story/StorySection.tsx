import { Box } from '@mui/material';
import { StoryCard } from './StoryCard';
export const StorySection: React.FC = () => {
  // sx={{ flex: '0 0 auto' }}
  return (
    <Box display="flex" gap={2}>
      <StoryCard
        backgroundStory="https://wallpapers.com/images/featured/lil-peep-41igu7mm56rs5hsu.jpg"
        user="Yordy Martinez"
        isPostStory={true}
      />
      <StoryCard
        backgroundStory="https://i.pinimg.com/474x/c5/1b/28/c51b28c8c03dc0fa8aa09ca05b096808.jpg"
        user="Helen Cruz"
      />
      <StoryCard
        backgroundStory="https://i.redd.it/5pbb9vbiyppb1.jpg"
        user="Michael Martinez"
      />
      <StoryCard
        backgroundStory="https://ecybershop.com.br/cdn/shop/articles/download_1.jpg?v=1722340400"
        user="Ragnar Lothbrok"
      />
      <StoryCard
        backgroundStory="https://random.imagecdn.app/1000/1000"
        user="Jesus A."
      />
    </Box>
  );
};
