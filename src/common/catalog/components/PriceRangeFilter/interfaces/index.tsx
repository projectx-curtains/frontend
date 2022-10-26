export interface IPriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  values: Array<number>;
  handleChange: (
    event: React.ChangeEvent,
    newValue: number,
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
