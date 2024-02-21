import { ProductAttribute } from "../types/Product.type";

export interface ProductListProps {
  data: {
    products: {
      items: Array<ProductAttribute>;
    };
  };
  loading: boolean;
}
