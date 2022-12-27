type anchorType = "bottom" | "left" | "right" | "top";

export interface IDrawerComponentProps {
  anchor: anchorType;
  open: boolean;
  onClose: () => void;
  styleVariable: Object;
  children: React.ReactNode;
}
