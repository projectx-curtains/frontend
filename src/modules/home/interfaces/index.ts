import { ProductCardType } from "@common/productCard/types";

export interface ICategoryCardProps {
  type: string;
  text: string;
  className: string;
  path: string;
}

export interface IProductGalleryProps {
  items: Array<ProductCardType>; //Todo: change the type when we'll get json data
  titleText: string;
}

export type WhyWeAreItem = {
  image: string;
  text: string;
};

export type ReviewsItem = {
  name: string;
  location: string;
  comment: string;
  image: string;
};
