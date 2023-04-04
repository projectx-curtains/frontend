import { privacyPolicyData } from "@modules/privacyPolicy/mocks/privacyPolicyData";
import style from "./styles/index.module.scss";

const DetailedDescription: React.FC = () => {
  return (
    <div className={style["detailed-description"]}>
      <h1 className={style["detailed-description__title"]}>
        Политика конфиденциальности
      </h1>
      {privacyPolicyData.map((block) => {
        return (
          <div
            key={block.id}
            className={style["detailed-description__block"]}>
            <p className={style["block-title"]}>{block.blockTitle}</p>
            {block.blockText.map((text, index) => {
              return (
                <p
                  key={index}
                  className={style["block-text"]}>
                  {text}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default DetailedDescription;
