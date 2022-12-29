import React from "react";
import Stack from "@mui/material/Stack";
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BreadcrumbLink from "./breadcrumbLink";

import style from "../styles/index.module.scss";

const CustomBreadcrumbs: React.FC = () => {
  const breadcrumb = BreadcrumbLink();
  return (
    <Stack
      className={style["link-structure"]}
      spacing={1}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <NavigateNextIcon
            fontSize="medium"
            sx={{ color: "#373B49" }}
          />
        }>
        {breadcrumb}
      </Breadcrumbs>
    </Stack>
  );
};
export default CustomBreadcrumbs;
