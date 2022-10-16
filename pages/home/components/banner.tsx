import React from "react";
import classNames from "classnames";
import LinkButton from "../../../src/common/linkButton/linkButton";
import Button from "@mui/material/Button";
import { ROUTES } from "../../../src/constants/routes";
import { MdSouth } from "react-icons/md";
import style from "../styles/banner.module.scss";

function Banner() {
  return (
    <section className={style.banner}>
      <div className={style.banner__wrapper}>
        <h1 className={style.banner__headline}>
          Стиль и уют <br /> в каждой детали
        </h1>
        <h2 className={style.banner__subtitle}>
          Создай свой дизайн-проект штор от идеи до реализации
        </h2>
        <Button className={style.banner__button} href={ROUTES.curtainBuilder}>
          Создать свой проект штор
        </Button>
        <MdSouth className={style.banner__arrow} />
      </div>
    </section>
  );
}

export default Banner;
