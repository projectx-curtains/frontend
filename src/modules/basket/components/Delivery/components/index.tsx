import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Address from "./address";

import style from "../styles/index.module.scss";
import { useState } from "react";

const Delivery = () => {
  const [checked, setChecked] = useState("");

  return (
    <div className={style["delivery"]}>
      <h1 className={style["delivery__title"]}>Доставка</h1>
      <FormControl>
        <RadioGroup row>
          <FormControlLabel
            value="deliv"
            onChange={() => setChecked("deliv")}
            sx={
              checked === "deliv"
                ? { padding: "8px 42px 10px 10px", backgroundColor: "#F5F5F5" }
                : { padding: "8px 42px 10px 10px" }
            }
            control={
              <Radio
                sx={{
                  color: "#373B49",
                  "&.Mui-checked": { color: "#373B49" },
                }}
              />
            }
            label="Доставка"
          />
          <FormControlLabel
            value="self-deliv"
            onChange={() => setChecked("self-deliv")}
            sx={
              checked === "self-deliv"
                ? { padding: "8px 42px 10px 10px", backgroundColor: "#F5F5F5" }
                : { padding: "8px 42px 10px 10px" }
            }
            control={
              <Radio
                sx={{ color: "#373B49", "&.Mui-checked": { color: "#373B49" } }}
              />
            }
            label="Самовывоз"
          />
        </RadioGroup>
      </FormControl>
      {checked === "deliv" ? <Address /> : null}
    </div>
  );
};
export default Delivery;
