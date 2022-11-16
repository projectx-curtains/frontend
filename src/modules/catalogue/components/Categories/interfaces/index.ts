export type Categories = {
  id: number;
  name: string;
  url: string;
  style?: {
    color?: string;
    backgroundColor?: string;
  };
};

export interface ICategoriesProps {
  categories: Array<Categories>;
}
