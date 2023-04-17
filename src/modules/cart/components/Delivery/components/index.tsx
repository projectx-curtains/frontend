import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import classNames from "classnames";
import Address from "./address";

import style from "../styles/index.module.scss";

const Delivery: React.FC = () => {
  const [isDeliveryRequred, setIsDeliveryRequred] = useState(true);

  return (
    <div className={style["delivery"]}>
      <h1 className={style["delivery__title"]}>Доставка</h1>
      <FormControl>
        <RadioGroup row>
          <FormControlLabel
            className={classNames([style["delivery-form"]], {
              [style["selected-delivery"]]: isDeliveryRequred,
            })}
            value="delivery"
            onChange={() => setIsDeliveryRequred(true)}
            control={
              <Radio
                className={style["control"]}
                checked={isDeliveryRequred}
              />
            }
            label="Доставка"
          />
          <FormControlLabel
            className={classNames([style["self-delivery-form"]], {
              [style["selected-self-delivery"]]: isDeliveryRequred,
            })}
            value="self-delivery"
            onChange={() => setIsDeliveryRequred(false)}
            control={<Radio className={style["control"]} />}
            label="Самовывоз"
          />
        </RadioGroup>
      </FormControl>
      {isDeliveryRequred ? <Address /> : null}
    </div>
  );
};
export default Delivery;
