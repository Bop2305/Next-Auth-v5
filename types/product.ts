import { Pagination } from "./pagination";

export type GetProductsParams = {
  skip?: number;
  limit?: number;
  select?: string;
};

export type ProductDto = {
  id: number;
  title: string;
  price: string;
};

export type GetProductsReponse = Pagination & { products: ProductDto[] };
