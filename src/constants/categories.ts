import { Category } from "src/types/category.type";
import { ROUTES } from "./routes";

export const CATEGORIES: Array<Category> = [
  {
    name: "Шторы",
    position: "center",
    type: "curtains",
    path: ROUTES.catalogueCurtains,
  },
  {
    name: "Покрывала",
    position: "top-left",
    type: "bedspreads",
    path: ROUTES.catalogueBedspreads,
  },
  {
    name: "Подушки",
    position: "center-left",
    type: "pillows",
    path: ROUTES.cataloguePillows,
  },
  {
    name: "Ткани",
    position: "top-right",
    type: "fabrics",
    path: ROUTES.catalogueFabrics,
  },
  {
    name: "Фурнитура",
    position: "center-right",
    type: "accessories",
    path: ROUTES.catalogueAccessories,
  },
  {
    name: "Ламбрекены",
    position: "bottom-left",
    type: "lambrequins",
    path: ROUTES.catalogueLambrequins,
  },
  {
    name: "Распродажа %",
    position: "bottom-right",
    type: "sale",
    path: ROUTES.catalogue, //TO DO: How are we gonna get filtered products by sale
  },
];
