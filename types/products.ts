export interface ProductsPageProps {
  searchParams: {
    limit: string;
    skip: string;
    q?: string;
    category?: string;
  };
}

export type ProductColumns = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface ProductListResponse {
  products: ProductColumns[];
  total: number;
  skip: number;
  limit: number;
}
