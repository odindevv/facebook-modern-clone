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
          <TruncatedTypography variant="h6" gutterBottom>
            {title}
          </TruncatedTypography>
          <TruncatedTypography variant="h5" gutterBottom>
            {description}
          </TruncatedTypography>
          <TruncatedTypography variant="body1">{source}</TruncatedTypography>
        </StyledCardContent>
      </CardActionArea>
    </CardContainer>
  );
};
