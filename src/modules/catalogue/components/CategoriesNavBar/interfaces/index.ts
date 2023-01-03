export type Categories = {
  id: number;
  name: string;
  url: string;
  style?: {
    color?: string;
    backgroundColor?: string;
  };
};

export interface ICategoriesNavBarProps {
  categories: Array<Categories>;
}
