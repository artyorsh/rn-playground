import { IOverview } from "./overview.model";
import { IOverviewAPI } from "./overview.vm";

export class OverviewAPI implements IOverviewAPI {

  public getOverview = (): Promise<IOverview> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        products: [
  {
    id: 1,
    title: 'Product 1',
    image_url: 'https://documents.timeless.investments/assets/f505f33c-5b71-41f0-a6ad-1140fd07eb3a/documents/24c3970a-8b93-4a24-8e7a-12ffffbe9c85-1704.jpeg',
    market_price: '$120',
    platform_price: '$100',
  },
  {
        id: 2,
    title: 'Product 1',
    image_url: 'https://documents.timeless.investments/assets/338340c4-152e-406d-a9bc-20f7f12f8cca/documents/13cc7bab-7b74-4116-89ea-4785d865614e-1704.jpeg',
    market_price: '$120',
    platform_price: '$100',
  },
  {
            id: 3,
    title: 'Product 1',
    image_url: 'https://documents.timeless.investments/assets/51f578ab-ad2f-40b2-8a97-f528eab9e2fd/documents/95f49619-d37f-4fc7-be79-7dbd8366da08-1703.jpeg',
    market_price: '$120',
    platform_price: '$100',
  },
  {
            id: 4,
    title: 'Product 1',
    image_url: 'https://documents.timeless.investments/assets/6a32c890-2ffe-46b3-ae1c-a4954e0ffe3b/documents/e873ff92-ad60-436e-91e0-92754cc133e9-1695.jpeg',
    market_price: '$120',
    platform_price: '$100',
  },
]
      }), 1000)
    })
  }


}