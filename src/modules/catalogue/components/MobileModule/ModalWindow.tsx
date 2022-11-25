import { Dialog } from "@mui/material";
import { IModalProps } from "./interfacer";

const ModalWindow: React.FC<IModalProps> = ({
  open,
  handleClose,
  children,
}) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      {children}
    </Dialog>
  );
};
export default ModalWindow;
