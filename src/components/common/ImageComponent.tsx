import { styled } from '@mui/material';

interface Props {
  width: string;
  height: string;
  borderRadius: string;
  src: string;
  alt: string;
}

export const ImageComponent: React.FC<Props> = ({
  width,
  height,
  borderRadius,
  src,
  alt,
  ...rest
}) => {
  const StyledImage = styled('img')`
    width: ${width};
    height: ${height};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: ${borderRadius};
    object-fit: cover;
  `;
  return <StyledImage {...rest} src={src} alt={alt} />;
};
