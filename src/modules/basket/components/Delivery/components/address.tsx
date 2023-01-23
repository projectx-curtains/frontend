import Input from "@mui/material/Input";
import { useField } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import LocationIcon from "@assets/svg/location-icon.svg";

import style from "../styles/index.module.scss";

const Address: React.FC = () => {
  const [field] = useField("initialValues");
  return (
    <div className={style["address"]}>
      <h3 className={style["address__title"]}>Адрес доставки*</h3>
      <FormControl variant="outlined">
        <Input
          id="address"
          placeholder="Адрес"
          {...field}
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
      </FormControl>
      <p className={style["address__subtitle"]}>
        *Доставка только по Республике Беларусь. <br />
        По г.Могилёв доставка бесплатная. <br />В остальные города доставка
        осуществляется в отделения Европочты.
      </p>
    </div>
  );
};

export default Address;
