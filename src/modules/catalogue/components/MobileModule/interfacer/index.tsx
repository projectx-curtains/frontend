export interface IModalProps {
  anchor: string;
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
