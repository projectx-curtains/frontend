import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Breadcrumbs } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import style from "../styles/index.module.scss";

const CustomBreadcrumbsInBasketMobile: React.FC = () => {
  return (
    <div className={style["custom-breadcrumbs-in-basket-mobile"]}>
      <Breadcrumbs
        className={style["CustomBreadcrumbsInBasket"]}
        aria-label="breadcrumb"
        separator={
          <KeyboardBackspaceIcon
            fontSize="medium"
            sx={{
              color: "#323232",
            }}
          />
        }>
        <Typography></Typography>
        <Link
          className={style["custom-breadcrumbs-in-basket__linkMobile"]}
          href="/catalogue"
          sx={{
            color: "#373b49",
          }}>
          Вернуться в Каталог
        </Link>
      </Breadcrumbs>
    </div>
  );
};
export default CustomBreadcrumbsInBasketMobile;
