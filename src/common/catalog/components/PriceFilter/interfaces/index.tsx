type CardsData = {
  id: number;
  price: number;
  title: string;
};

export interface ISortByPriceProps {
  data: Array<CardsData>;
  rule: string;
}
