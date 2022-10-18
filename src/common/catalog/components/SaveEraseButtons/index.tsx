import Button from '@mui/material/Button';

const SaveEraseButtons = () => {
  const clickSaveButton = () => {};
  const clickEraseButton = () => {};
  return (
    <div className="save-erase-buttons">
      <div
        className="save-erase-buttons__save-button"
        onClick={clickSaveButton}
      >
        Показать варианты
      </div>
      <div
        className="save-erase-buttons__erase-button"
        onClick={clickEraseButton}
      >
        Очистить фильтр
      </div>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};
export default SaveEraseButtons;