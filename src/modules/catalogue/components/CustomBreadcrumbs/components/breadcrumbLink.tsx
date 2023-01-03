import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";

import { ROUTES_MAP } from "@constants/routes";

import style from "../styles/index.module.scss";

const BreadcrumbLink = () => {
  const { pathname } = useRouter();

  const breadcrumb: React.ReactElement[] = [];

  ROUTES_MAP[pathname].map((route, index) => {
    const isFirst = 0;
    const isLast = ROUTES_MAP[pathname].length;

    switch (index) {
      case isFirst:
        breadcrumb.push(
          <Link
            className={style["link-structure__home"]}
            underline="none"
            key={`breadcrumbs-${index}`}
            color="#373b49"
            href={route.link}>
            {route.title}
          </Link>
        );
        break;
      case isLast:
        breadcrumb.push(
          <Typography
            key={`breadcrumbs-${index}`}
            color="#6a7082">
            {route.title}
          </Typography>
        );
        break;
      default:
        breadcrumb.push(
          <Link
            underline="none"
            key={`breadcrumbs-${index}`}
            color="#373b49"
            href={route.link}>
            {route.title}
          </Link>
        );
        break;
    }
  });

  return breadcrumb;
};
export default BreadcrumbLink;
