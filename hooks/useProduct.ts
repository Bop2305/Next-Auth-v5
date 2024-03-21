import { getProducts } from "@/services/ProductService";
import { GetProductsParams } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = ({ limit, skip, select }: GetProductsParams) => {
  return useQuery({
    queryKey: ["/products", limit, skip, select],
    queryFn: () => getProducts({ limit, skip, select }),
  });
};
