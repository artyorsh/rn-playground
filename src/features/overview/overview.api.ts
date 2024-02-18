import { IOverview, IProduct } from './overview.model';
import { IOverviewAPI } from './overview.vm';

interface IAssetListResponse {
  assets: {
    edges: Array<{ node: IProduct }>;
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
      products: response.data.assets.edges.map(edge => edge.node),
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
