import { ProductDto } from "@/types/product";

type Props = {
  products: ProductDto[];
};

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div className="flex">
            <p>Title: </p>
            <p>{product.title}</p>
          </div>
          <div className="flex">
            <p>Price: </p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
