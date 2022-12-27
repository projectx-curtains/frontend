import { Drawer } from "@mui/material";
import { IDrawerComponentProps } from "../interfacer";

const DrawerComponent: React.FC<IDrawerComponentProps> = ({
  anchor,
  open,
  onClose,
  styleVariable,
  children,
}) => {
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={styleVariable}>
      {children}
    </Drawer>
  );
};
export default DrawerComponent;
