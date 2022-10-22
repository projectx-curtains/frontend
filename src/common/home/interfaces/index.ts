export interface ICategoryCardProps {
  type: string;
  text: string;
  className: string;
  path: string;
}

export interface IWhyWeAreItem {
  image: string;
  text: string;
}

export interface ICarouselProps {
  children: React.ReactNode;
  className: string;
}

export interface IReviewsItem {
  name: string;
  location: string;
  comment: string;
  image: string;
}
