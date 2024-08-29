import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface Props {
  icon: JSX.Element;
  label: string;
}
export const SideBarItem: React.FC<Props> = ({ icon, label }) => {
  return (
    <ListItemButton>
      <ListItemIcon sx={{ color: 'primary.main' }}>{icon}</ListItemIcon>
      <ListItemText sx={{ color: 'primary.main' }} primary={label} />
    </ListItemButton>
  );
};
