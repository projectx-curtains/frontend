import React from "react";
import LinkButton from "../../../components/LinkButton";
import { ROUTES } from "../../../utils/routes";
import { MdSouth } from "react-icons/md";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__wrapper">
        <h1 className="banner__headline">
          Стиль и уют <br /> в каждой детали
        </h1>
        <h2 className="banner__subtitle">
          Создай свой дизайн-проект штор от идеи до реализации
        </h2>
        <LinkButton className="banner__button" link={ROUTES.curtainBuilder}>
          <span className="banner__button-text">Создать свой проект штор</span>
        </LinkButton>
        <MdSouth className="banner__arrow" />
      </div>
    </section>
  );
}

export default Banner;
