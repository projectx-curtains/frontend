import { Dialog } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { IModalProps } from "./interfacer";

import style from "./styles/index.module.scss";

const ModalWindow: React.FC<IModalProps> = ({
  anchor,
  open,
  handleClose,
  children,
}) => {
  return (
    <Drawer anchor={anchor} onClose={handleClose} open={open}>
      {children}
    </Drawer>
  );
};
export default ModalWindow;
