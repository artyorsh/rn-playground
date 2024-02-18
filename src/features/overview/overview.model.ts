export interface IProduct {
  id: string;
  label: string;
  heroColour: string; // "#eb0000"
  heroImage: string;
  type: string; // car
  dropDate: string; // "2024-02-13"
  actualPrice: number; // 70000000,
  averageMarketPrice: number; // 2000,
  make: string;
  model: string;
  exitPrice: number;
  exitDate: string | null;
  collectorsClubType: string; // "basic",
  status: string; // "open",
  countLikes: number;
  price: number; // 60000000,
  pricePerShare: number; // 1000
}

export interface IOverview {
  products: IProduct[];
}
