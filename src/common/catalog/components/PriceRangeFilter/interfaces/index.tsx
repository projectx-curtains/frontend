export interface IPriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  priceValues: Array<number>;
  handleChange: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
}

export interface IPriceRangeFilterContainerProps {
  minPrice: number;
  maxPrice: number;
  minPriceDifference: number;
  minPriceOnTheScreen: number;
  maxPriceOnTheScreen: number;
}
