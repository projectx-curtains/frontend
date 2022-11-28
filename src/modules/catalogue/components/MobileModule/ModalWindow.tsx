import { Dialog } from "@mui/material";
import { IModalProps } from "./interfacer";

import style from "./styles/index.module.scss";

const ModalWindow: React.FC<IModalProps> = ({
  open,
  handleClose,
  children,
}) => {
  return (
    <Dialog
      className={style["modal-product-filters"]}
      onClose={handleClose}
      open={open}
      // sx={{
      //   "& ,MuiDialog-root": {
      //     // justifyContent: "flex-start",
      //     top: 100,
      //     left: 100,
      //   },
      //   "& ,MuiDialog-container": { with: "304px", top: 0, left: 0 },
      // }}
    >
      {children}
    </Dialog>
  );
};
export default ModalWindow;
