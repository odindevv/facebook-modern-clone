import { Box, Typography } from '@mui/material';
import { SelectField } from './SelectField';

export const BirthdaySelect: React.FC = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const generateDays = (count: number) =>
    Array.from({ length: count }, (_, i) => i + 1);
  const generateYears = (count: number) =>
    Array.from({ length: count }, (_, i) => new Date().getFullYear() - i);

  const days = generateDays(31);
  const years = generateYears(100);
  return (
    <>
      <Typography variant="body2">Birthday</Typography>
      <Box display="flex" my={1}>
        <SelectField label="Month" defaultValue="May" options={months} />
        <SelectField label="Day" defaultValue="2" options={days} />
        <SelectField label="Year" defaultValue="2006" options={years} />
      </Box>
    </>
  );
};
