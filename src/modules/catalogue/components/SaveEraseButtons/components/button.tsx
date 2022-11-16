import Button from "@mui/material/Button";

import { IFilterButtonProps } from "../interfaces";

import style from "../styles/index.module.scss";

const FilterButton: React.FC<IFilterButtonProps> = ({
  variant,
  type,
  children,
}) => {
  return (
    <Button
      className={
        style[
          `save-erase-buttons__${type === "submit" ? "save" : "erase"}-button`
        ]
      }
      type={type}
      variant={variant}
    >
      {children}
    </Button>
  );
};
export default FilterButton;
