type CardsData = {
  id: number;
  price: number;
  title: string;
};

export interface SortByPrice {
  data: Array<CardsData>;
  rule: string;
}
