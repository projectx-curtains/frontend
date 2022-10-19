import Button from '@mui/material/Button';

const SaveEraseButtons = () => {
  const clickSaveButton = () => {};
  const clickEraseButton = () => {};
  return (
    <div className="save-erase-buttons">
      <Button className='save-erase-buttons__save-button' onClick={clickSaveButton} variant="contained">Показать варианты</Button>
      <Button className='save-erase-buttons__erase-button' onClick={clickEraseButton} variant="outlined">Очистить фильтр</Button>
    </div>
  );
};
export default SaveEraseButtons;