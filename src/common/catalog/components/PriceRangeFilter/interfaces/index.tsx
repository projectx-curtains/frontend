export interface IPriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  values: Array<number>;
  handleChange: any;
}

export interface IPriceRangeFilterContainerProps {
  minPrice: number;
  maxPrice: number;
  minPriceDifference: number;
  minPriceOnTheScreen: number;
  maxPriceOnTheScreen: number;
}
