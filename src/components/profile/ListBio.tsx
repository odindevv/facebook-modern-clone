import {
  Work as WorkIcon,
  School as SchoolIcon,
  Home as HomeIcon,
  Place as PlaceIcon,
} from '@mui/icons-material';

import { List } from '@mui/material';
import { ListItemBio } from './ListItemBio';
export const ListBio: React.FC = () => {
  return (
    <List>
      <ListItemBio icon={<WorkIcon />} label="Director at 99media Ltd" />
      <ListItemBio
        icon={<SchoolIcon />}
        label="Studied MBA at Amity University"
      />
      <ListItemBio icon={<HomeIcon />} label="Lives in Banglore, India" />
      <ListItemBio icon={<PlaceIcon />} label="From Banglore, India" />
    </List>
  );
};
