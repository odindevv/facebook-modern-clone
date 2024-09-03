import { Card, CardActionArea, CardContent, styled } from '@mui/material';
import { TruncatedTypography } from '../common/TruncatedTypography';

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  source: string;
}
export const SuperposedCard: React.FC<Props> = ({
  imageSrc,
  title,
  description,
  source,
}) => {
  const CardContainer = styled(Card)(() => ({
    backgroundColor: '#000',
    position: 'relative',
    color: '#fff',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  }));

  const StyledCardMedia = styled('img')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0.7,
    objectFit: 'cover',
  });

  const StyledCardContent = styled(CardContent)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    boxSizing: 'border-box',
    padding: theme.spacing(3),
    overflow: 'hidden',
  }));

  return (
    <CardContainer>
      <CardActionArea sx={{ height: '100%' }}>
        <StyledCardMedia src={imageSrc} alt={title} />
        <StyledCardContent>
          <TruncatedTypography
            variant="h6"
            gutterBottom
            // sx={{
            //   fontSize: {
            //     xs: '1.5rem',
            //     sm: '2rem',
            //     md: '2.5rem',
            //     lg: '1.5rem',
            //     xl: '3rem',
            //   },
            // }}
          >
            {title}
          </TruncatedTypography>
          <TruncatedTypography
            variant="h5"
            gutterBottom
            // sx={{
            //   fontSize: {
            //     xs: '1rem',
            //     sm: '1.25rem',
            //     md: '1.5rem',
            //     lg: '1.75rem',
            //   },
            // }}
          >
            {description}
          </TruncatedTypography>
          <TruncatedTypography
            variant="body1"
            // sx={{
            //   fontSize: {
            //     xs: '0.75rem',
            //     sm: '0.875rem',
            //     md: '1rem',
            //     lg: '1.125rem',
            //   },
            // }}
          >
            {source}
          </TruncatedTypography>
        </StyledCardContent>
      </CardActionArea>
    </CardContainer>
  );
};
