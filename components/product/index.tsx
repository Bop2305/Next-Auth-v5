"use client";

import { useState } from "react";
import ProductList from "./ProductList";
import { useGetProducts } from "@/hooks/useProduct";

const LIMIT = 10;

const ProductPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data: productsResponse } = useGetProducts({
    limit: LIMIT,
    skip: page * LIMIT,
  });

  return (
    <>
      <ProductList products={productsResponse?.products || []} />
    </>
  );
};

export default ProductPage;
