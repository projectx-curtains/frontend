import { ProductCardType } from "@common/productCard/types";

export interface IProductGalleryProps {
  items: Array<ProductCardType>; //Todo: change the type when we'll get json data
  titleText: string;
}

export interface ICategoryCardProps {
  type: string;
  text: string;
  className: string;
  path: string;
}

export interface ICarouselProps {
  children: React.ReactNode;
  className: string;
}

export interface IReviews {
  name: string;
  location: string;
  comment: string;
  image: string;
}

export interface IWhyWeAre {
  image: string;
  text: string;
}
