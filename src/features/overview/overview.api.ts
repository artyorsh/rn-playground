import { IOverview } from './overview.model';
import { IOverviewAPI } from './overview.vm';

interface IAssetListResponse {
  assets: {
    edges: Array<{
      node: {
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
      };
    }>;
  };
}

export const ASSET_LIST_QUERY: string = `
  query {
    assets(pagination: {first: 10}) {
      edges {
        node {
          id
          label
          heroColour
          heroImage
          type
          averageMarketPrice
          pricePerShare
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export class OverviewAPI implements IOverviewAPI {

  public getOverview = (): Promise<IOverview> => {
    return this.runQuery().then(response => ({
      products: response.data.assets.edges.map(edge => ({
        id: edge.node.id,
        title: edge.node.label,
        image_url: edge.node.heroImage,
        market_price: `€${edge.node.averageMarketPrice}`,
        platform_price: `€${edge.node.pricePerShare}`,
        background_color: edge.node.heroColour,
      })),
    }));
  };

  private runQuery = (): Promise<{ data: IAssetListResponse }> => {
    return fetch('https://graph.staging.timeless-internal.net/graphql', {
      method: 'POST',
      body: JSON.stringify({ query: ASSET_LIST_QUERY }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json());
  };
}
