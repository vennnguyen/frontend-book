export interface Product {
  id: string;

  name: string;
  image?: string;

  price: number;

  author?: string;
  publisher?: string;
  categories?: string[];

  description?: string;

  quantity?: number;
  sold?: number;

  active?: boolean;
}
