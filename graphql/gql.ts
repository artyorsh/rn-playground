/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n      query fetchAssetList {\n        assets(pagination: {first: 10}) {\n          edges {\n            node {\n              id\n              label\n              heroColour\n              heroImage\n              type\n              dropDate\n              actualPrice\n              averageMarketPrice\n              make\n              model\n              exitPrice\n              exitDate\n              collectorsClubType\n              status\n              countLikes\n              exitPrice\n              exitDate\n              price\n              pricePerShare\n            }\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n      }\n    ": types.FetchAssetListDocument,
    "\n      query Asset($id: String!) {\n        asset(assetId: $id) {\n          id\n          label\n          heroColour\n          heroImage\n          type\n          dropDate\n          images {\n            medium\n          }\n          actualPrice\n          price\n          averageMarketPrice\n          pricePerShare\n          make\n          model\n          exitPrice\n          exitDate\n          collectorsClubType\n          totalShares\n          percentageTokenized\n          make\n          model\n          creator\n          maxSharesPerTransaction\n          minSharesPerTransaction\n          feePercentage\n          exclusivity\n          condition\n          annualReturn\n          originalSellingPrice\n          timePeriod\n          timePeriodMonths\n          isHidden\n          gallery {\n            id\n            url\n            mediumUrl\n            thumbnailUrl\n            placeholderUrl\n            type\n          }\n          tradingStats {\n            tradesCount\n            minPrice\n            maxPrice\n            investSum\n          }\n          priceDevelopmentData {\n            id\n            source\n            value\n            date\n          }\n          exitDate\n          basePriceDate\n          expectedHoldingPeriodRange\n          investmentHighlights {\n            highlight\n          }\n        }\n      }\n    ": types.AssetDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query fetchAssetList {\n        assets(pagination: {first: 10}) {\n          edges {\n            node {\n              id\n              label\n              heroColour\n              heroImage\n              type\n              dropDate\n              actualPrice\n              averageMarketPrice\n              make\n              model\n              exitPrice\n              exitDate\n              collectorsClubType\n              status\n              countLikes\n              exitPrice\n              exitDate\n              price\n              pricePerShare\n            }\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n      }\n    "): (typeof documents)["\n      query fetchAssetList {\n        assets(pagination: {first: 10}) {\n          edges {\n            node {\n              id\n              label\n              heroColour\n              heroImage\n              type\n              dropDate\n              actualPrice\n              averageMarketPrice\n              make\n              model\n              exitPrice\n              exitDate\n              collectorsClubType\n              status\n              countLikes\n              exitPrice\n              exitDate\n              price\n              pricePerShare\n            }\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query Asset($id: String!) {\n        asset(assetId: $id) {\n          id\n          label\n          heroColour\n          heroImage\n          type\n          dropDate\n          images {\n            medium\n          }\n          actualPrice\n          price\n          averageMarketPrice\n          pricePerShare\n          make\n          model\n          exitPrice\n          exitDate\n          collectorsClubType\n          totalShares\n          percentageTokenized\n          make\n          model\n          creator\n          maxSharesPerTransaction\n          minSharesPerTransaction\n          feePercentage\n          exclusivity\n          condition\n          annualReturn\n          originalSellingPrice\n          timePeriod\n          timePeriodMonths\n          isHidden\n          gallery {\n            id\n            url\n            mediumUrl\n            thumbnailUrl\n            placeholderUrl\n            type\n          }\n          tradingStats {\n            tradesCount\n            minPrice\n            maxPrice\n            investSum\n          }\n          priceDevelopmentData {\n            id\n            source\n            value\n            date\n          }\n          exitDate\n          basePriceDate\n          expectedHoldingPeriodRange\n          investmentHighlights {\n            highlight\n          }\n        }\n      }\n    "): (typeof documents)["\n      query Asset($id: String!) {\n        asset(assetId: $id) {\n          id\n          label\n          heroColour\n          heroImage\n          type\n          dropDate\n          images {\n            medium\n          }\n          actualPrice\n          price\n          averageMarketPrice\n          pricePerShare\n          make\n          model\n          exitPrice\n          exitDate\n          collectorsClubType\n          totalShares\n          percentageTokenized\n          make\n          model\n          creator\n          maxSharesPerTransaction\n          minSharesPerTransaction\n          feePercentage\n          exclusivity\n          condition\n          annualReturn\n          originalSellingPrice\n          timePeriod\n          timePeriodMonths\n          isHidden\n          gallery {\n            id\n            url\n            mediumUrl\n            thumbnailUrl\n            placeholderUrl\n            type\n          }\n          tradingStats {\n            tradesCount\n            minPrice\n            maxPrice\n            investSum\n          }\n          priceDevelopmentData {\n            id\n            source\n            value\n            date\n          }\n          exitDate\n          basePriceDate\n          expectedHoldingPeriodRange\n          investmentHighlights {\n            highlight\n          }\n        }\n      }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;