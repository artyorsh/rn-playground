export interface IProduct {
  id: string;
  title: string;
  image_url: string;
  market_price: string;
  platform_price: string;
  background_color: string;
}

export interface IOverview {
  products: IProduct[];
}
