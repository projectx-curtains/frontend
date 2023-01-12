import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Breadcrumbs } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ICustomBreadcrumbsInBasketProps } from "../interfaces";

import style from "../styles/index.module.scss";

const CustomBreadcrumbsInBasket: React.FC<ICustomBreadcrumbsInBasketProps> = ({
  number,
}) => {
  return (
    <div className={style["custom-breadcrumbs-in-basket"]}>
      <Breadcrumbs
        className={style["CustomBreadcrumbsInBasket"]}
        aria-label="breadcrumb"
        separator={
          <KeyboardBackspaceIcon
            fontSize="medium"
            sx={{ color: "#323232" }}
          />
        }>
        <Typography
          className={
            style["custom-breadcrumbs-in-basket__typography"]
          }>{`В Вашей корзине ${number} товара`}</Typography>
        <Link
          className={style["custom-breadcrumbs-in-basket__link"]}
          href="/catalogue">
          Вернуться в Каталог
        </Link>
      </Breadcrumbs>
    </div>
  );
};
export default CustomBreadcrumbsInBasket;
