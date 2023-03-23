import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import style from "../styles/index.module.scss";

const CustomBreadcrumbsCatalogItemMob: React.FC = () => {
  return (
    <Stack
      className={style["link-structure-mobile"]}
      spacing={1}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <NavigateNextIcon
            fontSize="medium"
            sx={{ color: "#373B49" }}
          />
        }>
        <Link
          className={style["link-structure-mobile__home"]}
          underline="none"
          color="#373b49"
          href="/">
          Главная
        </Link>
        <Typography
          className={style["link-structure-mobile__dots"]}
          color="#373B49">
          ...
        </Typography>
        <Typography
          className={style["link-structure-mobile__current"]}
          color="#6A7082">
          Комплект Кармен
        </Typography>
      </Breadcrumbs>
    </Stack>
  );
};
export default CustomBreadcrumbsCatalogItemMob;
