import { useField } from "formik";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ISelectField } from "../interfaces";
import style from "../styles/select.module.scss";

const SelectField: React.FC<ISelectField> = ({
  content,
  handleSelectOptions,
  defaultValue,
  ...props
}) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <Select
        {...field}
        {...props}
        displayEmpty
        autoWidth
        defaultValue={defaultValue}
        inputProps={{ "aria-label": "Without label" }}
        className={style.select}
        error={meta.touched && Boolean(meta.error)}
      >
        <MenuItem
          value=""
          className={style.select__item}
          onClick={handleSelectOptions}
        >
          Выбрать
        </MenuItem>
        {content.map(({ name, value }) => (
          <MenuItem
            key={name}
            value={value}
            className={style.select__item}
            onClick={handleSelectOptions}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && Boolean(meta.error) && (
        <div className={style.select__error}>{meta.error}</div>
      )}
    </>
  );
};

export default SelectField;
