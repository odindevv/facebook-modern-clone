import { Box } from '@mui/material';
import { StorySection } from './story/StorySection';
import { CreatePost } from '../CreatePost';
import { Post } from '../Post';

export const MainContent: React.FC = () => {
  return (
    <Box flex={1}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            mb: 4,
            justifyContent: {
              xs: 'start',
              sm: 'start',
              md: 'start',
              lg: 'start',
              xl: 'center',
            },
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none',
              height: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Color del 'thumb' con opacidad
              borderRadius: '4px', // Bordes redondeados
            },
          }}
        >
          <StorySection />
        </Box>
        <CreatePost />
        <Post
          avatar="https://i.pinimg.com/originals/db/b1/07/dbb107c31711fb06ada1b5f754f7bbb6.jpg"
          user="Odin Martinez"
          date="August 28 2019, 8:50 pm"
          description="El héroe que entra en el Valhalla no lamenta su muerte. Y yo no entraré en casa de Odín con miedo."
          picturePost="https://miro.medium.com/v2/resize:fit:728/1*7Z2WX8Bmpd7j2SSF_f_8sQ.jpeg"
        />
        <Post
          avatar="https://i.pinimg.com/1200x/46/09/56/460956186a570904c36296840e1e45e5.jpg"
          user="Jonas Kahnwald"
          date="May 21 1986 2:15 am"
          description="Nuestras vidas están conectadas, un destino está ligado al siguiente. Cada uno de nuestros actos es meramente una respuesta a un acto anterior: Causa y efecto."
          picturePost="https://i.ytimg.com/vi/3nJsi_YxgVc/maxresdefault.jpg"
        />
        <Post
          avatar="https://static.tvtropes.org/pmwiki/pub/images/oldulrich.png"
          user="Ulrich Nielsen"
          date="March 1953 6:15 am"
          description="Una persona vive tres vidas: la primera termina con la pérdida de la ingenuidad, la segunda con la pérdida de la inocencia y la tercera con la pérdida de la vida misma."
          picturePost="https://cinefiloserial.com.ar/wp-content/uploads/2020/06/2x0243NielsenFamily-800x445.jpg"
        />
      </Box>
    </Box>
  );
};
