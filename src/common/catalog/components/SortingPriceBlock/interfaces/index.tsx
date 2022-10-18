type dataCards ={
  id: number;
  price: number;
  title: string;
}

export interface ISortByPriceProps {
  data: Array<dataCards>;
  rule: string;
}