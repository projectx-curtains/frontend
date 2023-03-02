import style from "../styles/index.module.scss";

const FeedbackForm: React.FC = () => {
  return (
    <div className={style["feedback-form"]}>
      <h1 className={style["feedback-form__title"]}>Форма обратной связи</h1>
    </div>
  );
};

export default FeedbackForm;
