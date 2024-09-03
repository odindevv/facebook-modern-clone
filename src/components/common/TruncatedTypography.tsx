import { styled, Typography } from '@mui/material';

export const TruncatedTypography = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
  whiteSpace: 'normal',
}));
