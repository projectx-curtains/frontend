import Button from "@mui/material/Button";
import { ISaveEraseButtonsProps } from "../interfaces";
import style from "../styles/index.module.scss";

const SaveEraseButtons: React.FC<ISaveEraseButtonsProps> = ({
  clickSaveButton,
  clickEraseButton,
}) => {
  return (
    <div className={style["save-erase-buttons"]}>
      <Button
        className={style["save-erase-buttons__save-button"]}
        onClick={clickSaveButton}
        variant="contained">
        Показать варианты
      </Button>
      <Button
        className={style["save-erase-buttons__erase-button"]}
        onClick={clickEraseButton}
        variant="outlined">
        Очистить фильтр
      </Button>
    </div>
  );
};
export default SaveEraseButtons;
