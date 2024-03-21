import { GetProductsParams, GetProductsReponse } from "@/types/product";
import { httpClient } from "@/utils/httpClient";

export const getProducts = async ({
  limit,
  skip,
  select,
}: GetProductsParams): Promise<GetProductsReponse> => {
  const res = (await httpClient.get(
    `/products?limit=${limit}&skip=${skip}&select=${select}`
  )) as GetProductsReponse;

  return res;
};
