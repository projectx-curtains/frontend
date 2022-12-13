import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ILinkStructureProps } from "../interfaces";

import style from "../styles/index.module.scss";

const LinkStructure: React.FC<ILinkStructureProps> = ({ currentTitle }) => {
  const breadcrumbs = [
    <Link
      className={style["link-structure__home"]}
      underline="none"
      key="1"
      color="#373b49"
      href="/"
    >
      Главная
    </Link>,
    <Typography key="2" color="#6a7082">
      {currentTitle}
    </Typography>,
  ];
  return (
    <Stack className={style["link-structure"]} spacing={1}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <NavigateNextIcon fontSize="medium" sx={{ color: "#373B49" }} />
        }
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};
export default LinkStructure;
