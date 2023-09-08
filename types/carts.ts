// Carts
export interface CartsPageProps {
  searchParams: {
    limit: string;
    skip: string;
  };
}

export type CartProducts = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
};

export type CartsColumns = {
  id: number;
  products: CartProducts[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export interface CartsListResponse {
  carts: CartsColumns[];
  total: number;
  skip: number;
  limit: number;
}
