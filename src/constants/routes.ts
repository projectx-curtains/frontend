import { IROUTES_MAP } from "src/types/routeMap.type";

export const ROUTES = {
  home: "/",

  catalogue: "/catalogue",
  catalogueCurtains: "/catalogue/curtains",
  catalogueBedspreads: "/catalogue/bedspreads",
  cataloguePillows: "/catalogue/pillows",
  catalogueFabrics: "/catalogue/fabrics",
  catalogueAccessories: "/catalogue/accessories",
  catalogueLambrequins: "/catalogue/lambrequins",

  curtainBuilder: "/curtainBuilder",
  consultation: "/consultation",
  shoppingCart: "/shoppingCart",

  cardPage: "/catalogue/cardPage",
};

export const ROUTES_MAP: IROUTES_MAP = {
  [ROUTES.home]: [
    {
      title: "Главная",
      link: ROUTES.home,
    },
  ],
  [ROUTES.catalogueFabrics]: [
    {
      title: "Главная",
      link: ROUTES.home,
    },
    {
      title: "Каталог тканей",
      link: ROUTES.catalogueFabrics,
    },
  ],
  [ROUTES.shoppingCart]: [
    {
      title: "Главная",
      link: ROUTES.home,
    },
    {
      title: "Корзина",
      link: ROUTES.shoppingCart,
    },
  ],
  [ROUTES.cardPage]: [
    {
      title: "Главная",
      link: ROUTES.home,
    },
    {
      title: "Каталог",
      link: ROUTES.catalogueFabrics,
    },
    {
      title: "Шторы",
      link: ROUTES.catalogueFabrics,
    },
    {
      title: "Комплект Кармен",
      link: ROUTES.catalogueFabrics,
    },
  ],
};
