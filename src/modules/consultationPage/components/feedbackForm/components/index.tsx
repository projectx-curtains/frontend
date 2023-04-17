import { FormikProvider } from "formik";
import Button from "@mui/material/Button";
import { CommentInput, CustomerInput } from "../fields";
import DataProcessing from "@common/dataProcessing/components";
import { IFeedbackFormProps } from "../interfaces";
import { maxSymbols } from "../constatns";
import style from "../styles/index.module.scss";

const FeedbackForm: React.FC<IFeedbackFormProps> = ({
  formik,
  commentValue,
  handleChange,
}) => {
  return (
    <FormikProvider value={formik}>
      <form onSubmit={() => formik.handleSubmit()}>
        <div
          id="feedbackForm"
          className={style["feedback-form"]}>
          <h1 className={style["feedback-form__title"]}>
            Форма обратной связи
          </h1>
          <div className={style["feedback-form__wrapper-name-phone"]}>
            <div className={style["feedback-form__wrapper-name"]}>
              <p className={style["title"]}>Имя</p>
              <CustomerInput
                name="name"
                placeholder="Имя"
              />
            </div>
            <div className={style["feedback-form__wrapper-phone"]}>
              <p className={style["title"]}>Телефон для контакта</p>
              <CustomerInput
                name="phone"
                placeholder="+375"
              />
            </div>
          </div>

          <div className={style["feedback-form__wrapper-comment"]}>
            <p className={style["title"]}>Комментарий</p>
            <CommentInput
              name="comment"
              value={commentValue}
              onChange={handleChange}
            />
            <p
              className={
                style["character-count"]
              }>{`${commentValue.length}/${maxSymbols}`}</p>
          </div>
          <DataProcessing />
          <Button
            className={style["feedback-form__submit-button"]}
            variant="contained"
            type="submit">
            Отправить форму
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default FeedbackForm;
