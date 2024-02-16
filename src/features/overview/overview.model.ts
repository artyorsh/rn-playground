export interface IProduct {
  id: number;
  title: string;
  image_url: string;
  market_price: string;
  platform_price: string;
}

export interface IOverview {
  products: IProduct[];
}
