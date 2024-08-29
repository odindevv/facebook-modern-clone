import { TextField, InputAdornment, useTheme } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
export const SearchBar: React.FC = () => {
  const theme = useTheme();
  return (
    <TextField
      placeholder="Search"
      variant="outlined"
      sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        style: {
          borderRadius: '50px',
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.background.paper
              : theme.palette.background.default,
          height: '35px',
          flexGrow: 1,
        },
      }}
    />
  );
};
