import Button from "@mui/material/Button";
import { ISaveEraseButtonsProps } from "../interfaces";

const SaveEraseButtons: React.FC<ISaveEraseButtonsProps> = ({
  clickSaveButton,
  clickEraseButton,
}) => {
  return (
    <div className="save-erase-buttons">
      <Button
        className="save-erase-buttons__save-button"
        onClick={clickSaveButton}
        variant="contained"
      >
        Показать варианты
      </Button>
      <Button
        className="save-erase-buttons__erase-button"
        onClick={clickEraseButton}
        variant="outlined"
      >
        Очистить фильтр
      </Button>
    </div>
  );
};
export default SaveEraseButtons;
