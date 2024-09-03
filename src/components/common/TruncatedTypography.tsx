import { styled, Typography, TypographyProps } from '@mui/material';
interface TruncatedTypographyProps extends TypographyProps {
  lineClamp?: number;
}

export const TruncatedTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'lineClamp',
})<TruncatedTypographyProps>(({ lineClamp = 2 }) => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: lineClamp,
  whiteSpace: 'normal',
}));
