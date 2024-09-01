import { Modal, Box, Typography, Divider } from '@mui/material';
import { FormRegister } from './FormRegister';

interface Props {
  open: boolean;
  handleCloseModal: () => void;
}

export const ModalRegister: React.FC<Props> = ({ open, handleCloseModal }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxWidth: '88vw',
    maxHeight: '90vh',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '12px', //
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: '10px',
    },
  };
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6">Sign Up</Typography>
        <Typography variant="body1">It`s quick and easy.</Typography>
        <Divider sx={{ my: 3 }} />

        <FormRegister />
      </Box>
    </Modal>
  );
};
