import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { TruncatedTypography } from './TruncatedTypography';
import type { INews } from '../../types';

export const MediaCard: React.FC<INews> = ({
  author,
  description,
  publishedAt,
  title,
  urlToImage,
}) => {
  return (
    <Card sx={{ m: 1, boxShadow: 6 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={urlToImage}
          alt={title}
          height="200px"
        />
        <CardContent sx={{ minHeight: '160px' }}>
          <TruncatedTypography variant="h6" fontWeight="bold">
            {title}
          </TruncatedTypography>
          <TruncatedTypography variant="body1" gutterBottom>
            {description}
          </TruncatedTypography>
          <TruncatedTypography
            variant="body2"
            gutterBottom
            color="primary.main"
          >
            {author}
          </TruncatedTypography>
          <TruncatedTypography variant="body2">
            {publishedAt}
          </TruncatedTypography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
