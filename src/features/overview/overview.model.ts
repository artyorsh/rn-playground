export interface IProduct {
  id: string;
  label: string;
  heroImage: string;
  averageMarketPrice: number; // 2000,
  pricePerShare: number; // 1000
}

export interface IOverview {
  products: IProduct[];
}
