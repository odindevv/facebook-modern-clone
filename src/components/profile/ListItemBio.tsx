import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ReactElement } from 'react';

interface Props {
  icon: ReactElement;
  label: string;
}
export const ListItemBio: React.FC<Props> = ({ icon, label }) => {
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};
