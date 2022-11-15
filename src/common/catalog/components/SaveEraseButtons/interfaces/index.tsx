type buttonVariant = "text" | "outlined" | "contained";
type buttonType = "submit" | "reset";

export interface IFilterButtonProps {
  variant: buttonVariant;
  type: buttonType;
  children: React.ReactNode;
}
