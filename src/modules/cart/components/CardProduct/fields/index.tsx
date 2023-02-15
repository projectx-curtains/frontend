import { useField } from "formik";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import LocationIcon from "@assets/svg/location-icon.svg";

import style from "../styles/index.module.scss";

export const WindowInput = (props: any) => {
  const [field] = useField(props);
  return (
    <input
      className={style["input"]}
      type="text"
      {...field}
      {...props}></input>
  );
};

export const CustomerInfoInput = (props: any) => {
  const [field] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      fullWidth={true}
      sx={{
        "& .MuiInputBase-input": {
          padding: "10px 16px",
          // maxWidth: "310px",
          // width: "100%",
          // "@media (max-width: 768px)": { maxWidth: "343px" },
        },
      }}
    />
  );
};

export const CommentInput = (props: any) => {
  const [field] = useField(props);
  return (
    <TextField
      placeholder="Комментарий"
      {...field}
      {...props}
      multiline
      rows={4}
    />
  );
};

export const AddressInput = (props: any) => {
  const [field] = useField(props);
  return (
    <Input
      placeholder="Адрес"
      {...field}
      {...props}
      startAdornment={
        <InputAdornment
          position="start"
          sx={{ marginLeft: "20px", marginRight: "12px" }}>
          <LocationIcon />
        </InputAdornment>
      }
      sx={{
        border: "1px solid #E2E3E6",
        backgroundColor: "#FFFFFF",
        borderRadius: "4px",
        "& .MuiInput-input": {
          padding: "11px 16px 11px 0",
        },
        // не убирается нижняя черта                     -------!!
        // "& .MuiInputBase-root-MuiInput-root::before": {
        //   content: "none",
        //   border: "none",
        // },
        // "& .MuiInputBase-root-MuiInput-root::after": {
        //   border: "none",
        // },
      }}
    />
  );
};

export const DataProcessingCheckbox = (props: any) => {
  const [field] = useField(props);
  return (
    <Checkbox
      {...field}
      {...props}
      sx={{ color: "#505669", "&.Mui-checked": { color: "#505669" } }}
    />
  );
};
