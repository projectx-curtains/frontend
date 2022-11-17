import {
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { IBuilderStarter } from "../interfaces";
import { StepsOptionType } from "@common/curtainBuilder/types";
import { BUILDER_OPTIONS } from "@common/curtainBuilder/constants";
import style from "../styles/builderStarter.module.scss";

const BuilderStarter: React.FC<IBuilderStarter> = ({
  handleStartBuilder,
  setChosenOption,
}) => {
  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setChosenOption(event.target.value);
  };

  return (
    <section className={style["builder-start"]}>
      <div className="container">
        <div className={style["builder-start__wrapper"]}>
          <h1 className={style["builder-start__heading"]}>
            Приветствуем <br /> в конструкторе штор!
          </h1>
          <p className={style["builder-start__text"]}>
            В начале работы предлагаем Вам выбрать необходимые опции:
          </p>

          <form onSubmit={handleStartBuilder}>
            <FormControl>
              <RadioGroup
                aria-labelledby="builder-start-options"
                name="radio-buttons-group"
                className={style["builder-start__options"]}
                onChange={handleRadioChange}
              >
                {BUILDER_OPTIONS.map(({ value, label }: StepsOptionType) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={
                      <Radio className={style["builder-start__option-radio"]} />
                    }
                    label={label}
                    className={style["builder-start__option"]}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Button type="submit" className={style["builder-start__button"]}>
              Создать свой проект штор
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BuilderStarter;
