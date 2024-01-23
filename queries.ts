import {useQuery} from 'urql';
import {graphql} from './graphql/index';

export function useAssetsList() {
  return useQuery({
    query: graphql(/* GraphQL */ `
      query fetchAssetList {
        assets(pagination: {first: 10}) {
          edges {
            node {
              id
              label
              heroColour
              heroImage
              type
              dropDate
              actualPrice
              averageMarketPrice
              make
              model
              exitPrice
              exitDate
              collectorsClubType
              status
              countLikes
              exitPrice
              exitDate
              price
              pricePerShare
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `),
    variables: {},
  });
}

export function useAsset(id: string) {
  return useQuery({
    query: graphql(/* GraphQL */ `
      query Asset($id: String!) {
        asset(assetId: $id) {
          id
          label
          heroColour
          heroImage
          type
          dropDate
          images {
            medium
          }
          actualPrice
          price
          averageMarketPrice
          pricePerShare
          make
          model
          exitPrice
          exitDate
          collectorsClubType
          totalShares
          percentageTokenized
          make
          model
          creator
          maxSharesPerTransaction
          minSharesPerTransaction
          feePercentage
          exclusivity
          condition
          annualReturn
          originalSellingPrice
          timePeriod
          timePeriodMonths
          isHidden
          gallery {
            id
            url
            mediumUrl
            thumbnailUrl
            placeholderUrl
            type
          }
          tradingStats {
            tradesCount
            minPrice
            maxPrice
            investSum
          }
          priceDevelopmentData {
            id
            source
            value
            date
          }
          exitDate
          basePriceDate
          expectedHoldingPeriodRange
          investmentHighlights {
            highlight
          }
        }
      }
    `),
    variables: {id},
  });
}
