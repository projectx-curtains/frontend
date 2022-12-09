import classnames from "classnames";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ItemFilter from "./ItemFilter";
import { IDropdownFilterProps } from "../interfaces";
import style from "../styles/index.module.scss";

const DropdownFilter: React.FC<IDropdownFilterProps> = ({
  title,
  isOpen,
  handleOpen,
  children,
}) => {
  return (
    <div className={style["dropdown-filter"]}>
      <div
        className={style["dropdown-filter__title-list"]}
        onClick={handleOpen}
      >
        <span className={style["dropdown-filter__name-title"]}>{title}</span>
        <ExpandMoreIcon
          className={classnames(style["dropdown-filter__icon"], {
            [style["rotate-icon"]]: isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div className={style["dropdown-filter__scrolling-block"]}>
          {children}
        </div>
      )}
    </div>
  );
};
export default DropdownFilter;
