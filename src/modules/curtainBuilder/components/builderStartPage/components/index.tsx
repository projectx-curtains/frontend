import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IBuilderStartPage } from "../interfaces";
import { StepsOptionType } from "../../../types";
import { BUILDER_OPTIONS } from "../../../constants";
import style from "../styles/builderStarter.module.scss";

const BuilderStartPage: React.FC<IBuilderStartPage> = ({
  handleStartBuilder,
  handleRadioChange,
}) => {
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

export default BuilderStartPage;
