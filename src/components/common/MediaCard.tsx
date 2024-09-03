import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { News } from '../../types';
import { TruncatedTypography } from './TruncatedTypography';

export const MediaCard: React.FC<News> = ({
  title,
  description,
  imageSrc,
  source,
}) => {
  return (
    <Card sx={{ m: 1, boxShadow: 6 }}>
      <CardActionArea>
        <CardMedia component="img" image={imageSrc} alt={title} />
        <CardContent>
          <TruncatedTypography variant="h6" fontWeight="bold">
            {title}
          </TruncatedTypography>
          <TruncatedTypography variant="body1">
            {description}
          </TruncatedTypography>
          <TruncatedTypography variant="body2">{source}</TruncatedTypography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
