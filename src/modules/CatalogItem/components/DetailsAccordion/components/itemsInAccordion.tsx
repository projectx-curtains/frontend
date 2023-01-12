import { logoBoxData } from "../mocks/logoBoxData";
import { parametersData } from "../mocks/parametersData";

import style from "../styles/index.module.scss";

export const parameters = (
  <div className={style["parameters"]}>
    {parametersData.map(({ id, parameter, description }) => {
      return (
        <div
          key={id}
          className={style["parameters__item"]}>
          <p className={style["parameter"]}>{parameter}</p>
          <p className={style["description"]}>{description}</p>
        </div>
      );
    })}
  </div>
);

export const delivery = (
  <p className={style["item"]}>
    Доставка товаров курьером до клиента может быть осуществлена:
    <p>— По г. Могилеву бесплатная.</p>
    <p>
      — В отделения Европочты (доставка осуществляется в любые города на
      территории РБ).
    </p>
    <br />
    Самовывоз вы можете осуществить из пункта выдачи заказов по адресу
    <b className={style["bold"]}>г. Могилёв, ул. Быховская 6, пав.256.</b>
  </p>
);

export const careTips = (
  <>
    <div className={style["wrapper-logo-box"]}>
      {logoBoxData.map(({ id, logo, text }) => {
        return (
          <div
            className={style["logo-box"]}
            key={id}>
            <div>{logo}</div>
            <p className={style["logo-box__text"]}>{text}</p>
          </div>
        );
      })}
    </div>
    <ul className={style["item"]}>
      Долнительные советы:
      <li className={style["li"]}>
        Шторы рекомендуют стирать (сдавать в химчистку) 1-2 раза в год. Между
        стирками желательно применять раз в месяц сухую чистку - текстиль можно
        пропылесосить. Запомните,{" "}
        <b className={style["bold"]}>
          пыльные шторы нельзя закладывать в барабан стиральной машины.
        </b>
      </li>
      <li className={style["li"]}>
        Возьмите за правило весь оконный текстиль{" "}
        <b className={style["bold"]}>стирать в мешочке.</b> Это поможет
        минимизировать риски повреждения ткани.{" "}
        <b className={style["bold"]}>
          Заполнять барабан стиральной машины необходимо не более, чем на 50%.
        </b>
      </li>
      <li className={style["li"]}>
        Для стирки портьерных и гардинных тканей необходимо использовать{" "}
        <b className={style["bold"]}>только жидкие моющие средства.</b> Сухие
        порошки хуже выполаскиваются, а затем, вступая в реакцию с солнечными
        лучами, разрушают волокна.
      </li>
    </ul>
  </>
);

export const returnToStore = (
  <p className={style["item"]}>
    <p className={style["text-indent"]}>
      При наличии претензии по качеству или комплектности приобретенной
      продукции, а также недостатков в товаре, просим вас заполнить форму
      обратной связи, после чего наши специалисты вам позвонят.
    </p>
    <p className={style["text-indent"]}>
      В случае, если вы не имеете возможности заполнить форму онлайн, вы можете
      обратиться по телефонам:
    </p>
    <b className={style["bold"]}>+375 (29) 644 87 47, +375 (29) 745 87 47.</b>
    <p className={style["text-indent"]}>
      Если товар подлежит замене, мы примем его даже при отсутствии чека, только
      убедимся, что товар куплен у нас.
    </p>
  </p>
);
