export interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
