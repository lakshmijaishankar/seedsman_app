export interface ProductAttribute {
  uid: string;
  id: number;
  sku: string;
  name: string;
  type_id: string;
  meta_description: string;
  meta_title: string;
  tile_title: string;
  image: {
    path: string;
    url: string;
  };
  price_range: {
    final_price: {
      currency: string;
      value: number;
    };
  };
}
