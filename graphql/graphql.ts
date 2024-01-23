/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AboutUsDataDto = {
  aboutSections: AboutUsSectionsDto;
  content?: Maybe<Scalars['String']['output']>;
  cursor?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  featuredImageBig?: Maybe<Scalars['String']['output']>;
  featuredImageSmall?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  link: Scalars['String']['output'];
  pageViewData?: Maybe<PageViewDataDto>;
  parentUri?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoDataDto>;
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  translations?: Maybe<Array<TranslationListDto>>;
  uri: Scalars['String']['output'];
};

export type AboutUsSectionDto = {
  content?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AboutUsSectionsDto = {
  imagesFile?: Maybe<Scalars['String']['output']>;
  logosFile?: Maybe<Scalars['String']['output']>;
  materialsFile?: Maybe<Scalars['String']['output']>;
  pressKit?: Maybe<Scalars['String']['output']>;
  pressSection?: Maybe<AboutUsSectionDto>;
  section1?: Maybe<AboutUsSectionDto>;
  section2?: Maybe<AboutUsSectionDto>;
};

export type AppleLoginFullNameDto = {
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
};

export type AppleLoginPayloadDto = {
  fullName?: InputMaybe<AppleLoginFullNameDto>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  identity_token?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  referringCode?: InputMaybe<Scalars['String']['input']>;
  userData?: InputMaybe<SocialLoginUserDataPayload>;
};

export type ArticleCategoryDataDto = {
  categoryId: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type ArticleDataDto = {
  content?: Maybe<Scalars['String']['output']>;
  featuredImageBig?: Maybe<Scalars['String']['output']>;
  featuredImageSmall?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastModified?: Maybe<Scalars['String']['output']>;
  link: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ArticleDataDtoEdge = {
  cursor: Scalars['String']['output'];
  node: ArticleDataDto;
};

export type ArticleFilterDto = {
  categoryId?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** A collectible that is divided into shares, that is being sold during drops, and then can be traded */
export type Asset = {
  actualPrice: Scalars['Int']['output'];
  annualReturn?: Maybe<Scalars['Float']['output']>;
  assetDetails: Array<AssetDetail>;
  assetExpertTalks: Array<AssetExpertTalk>;
  assetKillerInfo: Array<AssetKillerInfo>;
  availableOffers: Scalars['Int']['output'];
  averageMarketPrice?: Maybe<Scalars['Float']['output']>;
  basePriceDate?: Maybe<Scalars['DateTime']['output']>;
  collectorsClubType: CollectorsClubType;
  condition?: Maybe<Scalars['String']['output']>;
  costCenter?: Maybe<Scalars['String']['output']>;
  countLikes: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** e.g. Rolex, Nike */
  creator?: Maybe<Scalars['String']['output']>;
  customDetails?: Maybe<Array<AssetCustomDetails>>;
  documents: Array<AssetDocument>;
  dropDate?: Maybe<Scalars['DateTime']['output']>;
  exclusivity?: Maybe<Scalars['String']['output']>;
  exitDate?: Maybe<Scalars['DateTime']['output']>;
  exitPrice?: Maybe<Scalars['Int']['output']>;
  expectedHoldingPeriod?: Maybe<Scalars['Int']['output']>;
  expectedHoldingPeriodRange?: Maybe<Scalars['String']['output']>;
  feePercentage: Scalars['Float']['output'];
  freeShareAssetId?: Maybe<Scalars['String']['output']>;
  freeShareLogicEnabled?: Maybe<Scalars['Boolean']['output']>;
  gallery: Array<AssetImageDocument>;
  /** A hexadecimal value of color which is used as background */
  heroColour?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Scalars['String']['output']>;
  /** @deprecated Replaced with images list */
  heroImageThumbnail?: Maybe<Scalars['String']['output']>;
  highlights: Array<AssetHighlight>;
  id: Scalars['ID']['output'];
  images?: Maybe<AssetImageSet>;
  inflationRate?: Maybe<Scalars['Float']['output']>;
  investmentHighlights: Array<AssetInvestmentHighlight>;
  isBaseProspectus: Scalars['Boolean']['output'];
  isDemo: Scalars['Boolean']['output'];
  isDirectLinkOnly: Scalars['Boolean']['output'];
  isEuRegulated: Scalars['Boolean']['output'];
  isHidden: Scalars['Boolean']['output'];
  isKycOnly: Scalars['Boolean']['output'];
  isRemoved: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['String']['output']>;
  likesCount: Scalars['Float']['output'];
  lowestOfferPrice: Scalars['Int']['output'];
  /** e.g. Porsche, Rolex */
  make?: Maybe<Scalars['String']['output']>;
  maxSharesPerTransaction?: Maybe<Scalars['Int']['output']>;
  minSharesPerTransaction?: Maybe<Scalars['Int']['output']>;
  /** e.g. 911, Air Jordan */
  model?: Maybe<Scalars['String']['output']>;
  news: Array<AssetNews>;
  offers: Array<Offer>;
  order: Scalars['Float']['output'];
  originalFeePercentage: Scalars['Float']['output'];
  originalSellingPrice?: Maybe<Scalars['Float']['output']>;
  percentageTokenized?: Maybe<Scalars['Float']['output']>;
  price: Scalars['Int']['output'];
  priceAlerts: Array<PriceAlert>;
  priceDevelopmentData: Array<AssetPriceDevelopment>;
  pricePerShare?: Maybe<Scalars['Int']['output']>;
  pricePerformancePercentage?: Maybe<Scalars['Float']['output']>;
  releaseDate: Scalars['DateTime']['output'];
  sectionImages: Array<AssetImageDocument>;
  sharesSold: Scalars['Int']['output'];
  sharesToBuy?: Maybe<Scalars['Int']['output']>;
  sharesToGet?: Maybe<Scalars['Int']['output']>;
  status: AssetStatus;
  taxType: TaxType;
  timePeriod?: Maybe<Scalars['Int']['output']>;
  timePeriodMonths?: Maybe<Scalars['Int']['output']>;
  tokenSymbol: Scalars['String']['output'];
  totalShares: Scalars['Int']['output'];
  /** @deprecated Trading fee is no longer needed, a standard fee can be used */
  tradingFee: Scalars['Float']['output'];
  tradingHeaderImage?: Maybe<AssetImageDocument>;
  tradingStats: TradingStatsData;
  /**
   * Trading window end, individual for asset
   * @deprecated Global configuration used
   */
  tradingWindowEndTime?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Global configuration used */
  tradingWindowStartDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Trading window start, individual for asset
   * @deprecated Global configuration used
   */
  tradingWindowStartTime?: Maybe<Scalars['DateTime']['output']>;
  type: AssetType;
  upsell?: Maybe<Array<Scalars['String']['output']>>;
  webLink: Scalars['String']['output'];
};

export type AssetCustomDetails = {
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AssetDetail = {
  data: Scalars['String']['output'];
  dataParsed?: Maybe<Array<AssetDetailParsedData>>;
  id: Scalars['String']['output'];
  order: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type AssetDetailParsedData = {
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AssetDocument = {
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  fileType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** iso code for content language (e.g. "en") or null if content is language agnostic */
  language?: Maybe<Scalars['String']['output']>;
  order: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  type: DocumentType;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  useWithKillerInfo?: Maybe<Scalars['Boolean']['output']>;
};

export type AssetEdge = {
  cursor: Scalars['String']['output'];
  node: Asset;
};

export type AssetExpertTalk = {
  assetId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  /** iso code for content language (e.g. "en") or null if content is language agnostic */
  language?: Maybe<Scalars['String']['output']>;
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AssetFilterDto = {
  collectorClubType?: InputMaybe<Array<CollectorsClubType>>;
  hotCategory?: InputMaybe<Scalars['Boolean']['input']>;
  includeWelcomeAssets?: InputMaybe<Scalars['Boolean']['input']>;
  publicAssetsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Array<AssetStatus>>;
  taxType?: InputMaybe<Array<TaxType>>;
  type?: InputMaybe<Array<AssetType>>;
  typeExcept?: InputMaybe<Array<AssetType>>;
  welcomeAssetsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  withAvailableOffers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetHighlight = {
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** iso code for content language (e.g. "en") or null if content is language agnostic */
  language?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type AssetImageDocument = {
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  fileType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** iso code for content language (e.g. "en") or null if content is language agnostic */
  language?: Maybe<Scalars['String']['output']>;
  mediumUrl?: Maybe<Scalars['String']['output']>;
  order: Scalars['Float']['output'];
  placeholderUrl?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: DocumentType;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  useWithKillerInfo?: Maybe<Scalars['Boolean']['output']>;
};

/** Collection of images for an asset in multiples sizes and formats */
export type AssetImageSet = {
  medium?: Maybe<Scalars['String']['output']>;
  mediumAlt?: Maybe<Scalars['String']['output']>;
  mediumFlatten?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailAlt?: Maybe<Scalars['String']['output']>;
  thumbnailFlatten?: Maybe<Scalars['String']['output']>;
};

export type AssetInvestmentHighlight = {
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  highlight: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** iso code for content language (e.g. "en") or null if content is language agnostic */
  language?: Maybe<Scalars['String']['output']>;
  position: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AssetKillerInfo = {
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  /** iso code for content language (e.g. "en") or null if content is language agnostic */
  language?: Maybe<Scalars['String']['output']>;
  text1?: Maybe<Scalars['String']['output']>;
  text2?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AssetLikeDislikeRequestDto = {
  assetId: Scalars['String']['input'];
};

export type AssetNews = {
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** iso code for content language (e.g. "en") or null if content is language agnostic */
  language?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type AssetPriceDevelopment = {
  asset: Asset;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  source: PriceDataSource;
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
  valueFormatted?: Maybe<Scalars['String']['output']>;
};

export enum AssetSortingOption {
  AnnualReturnAsc = 'ANNUAL_RETURN_ASC',
  AnnualReturnDesc = 'ANNUAL_RETURN_DESC',
  DropDateAsc = 'DROP_DATE_ASC',
  DropDateDesc = 'DROP_DATE_DESC',
  DropMarketValueAsc = 'DROP_MARKET_VALUE_ASC',
  DropMarketValueDesc = 'DROP_MARKET_VALUE_DESC',
  ExitDateAsc = 'EXIT_DATE_ASC',
  ExitDateDesc = 'EXIT_DATE_DESC',
  GainerAsc = 'GAINER_ASC',
  GainerDesc = 'GAINER_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  LikesAsc = 'LIKES_ASC',
  LikesDesc = 'LIKES_DESC',
  MostTradedAsc = 'MOST_TRADED_ASC',
  MostTradedDesc = 'MOST_TRADED_DESC',
  QuarterPerformanceAsc = 'QUARTER_PERFORMANCE_ASC',
  QuarterPerformanceDesc = 'QUARTER_PERFORMANCE_DESC',
  Status = 'STATUS'
}

export enum AssetStatus {
  ComingSoon = 'coming_soon',
  ExitPending = 'exit_pending',
  Exited = 'exited',
  Financed = 'financed',
  Open = 'open',
  Trading = 'trading'
}

export type AssetTransaction = Transaction & {
  amount: Scalars['Float']['output'];
  amountFormatted: Scalars['String']['output'];
  asset: Asset;
  assetId: Scalars['ID']['output'];
  bonus?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  fees?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  limitOrderId?: Maybe<Scalars['String']['output']>;
  offerId?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Float']['output'];
  sharePrice?: Maybe<Scalars['Int']['output']>;
  status: TransactionStatus;
  totalSpent?: Maybe<Scalars['Int']['output']>;
  type: TransactionType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  voucher?: Maybe<Scalars['Int']['output']>;
};

export enum AssetType {
  Art = 'art',
  BagsJewellery = 'bags_jewellery',
  Car = 'car',
  CardAndGame = 'card_and_game',
  Collection = 'collection',
  Memorabilia = 'memorabilia',
  Nft = 'nft',
  Other = 'other',
  Sneaker = 'sneaker',
  Tech = 'tech',
  Watch = 'watch',
  WineAndWhisky = 'wine_and_whisky'
}

export type AssetUser = {
  asset: Asset;
  assetId: Scalars['ID']['output'];
  assetLabel: Scalars['String']['output'];
  buyInPrice?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lastOrderId: Scalars['String']['output'];
  priceFormatted: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type AssetUserDislike = {
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type AssetUserEarlyAccess = {
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AssetUserEdge = {
  cursor: Scalars['String']['output'];
  node: AssetUser;
};

export type AssetUserExitVote = {
  asset: Asset;
  assetId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  exitAccepted?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type AssetUserExitVotePayloadDto = {
  assetId: Scalars['String']['input'];
  exitAccepted: Scalars['Boolean']['input'];
};

export type AssetUserLike = {
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type AssetUserNotification = {
  asset: Asset;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type AssetsByIdsPayload = {
  assetIds: Array<Scalars['String']['input']>;
};

export type BankPaymentDetails = {
  agreedPayoutTnc?: Maybe<Scalars['Boolean']['output']>;
  agreedSecupayTnc?: Maybe<Scalars['Boolean']['output']>;
  agreedStripeTnc?: Maybe<Scalars['Boolean']['output']>;
  bic?: Maybe<Scalars['String']['output']>;
  iban?: Maybe<Scalars['String']['output']>;
  payoutsEnabled?: Maybe<Scalars['Boolean']['output']>;
  payoutsEnabledAt?: Maybe<Scalars['DateTime']['output']>;
  secupayApproved?: Maybe<Scalars['Boolean']['output']>;
  secupayApprovedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BankPaymentDetailsInput = {
  agreedPayoutTnc?: InputMaybe<Scalars['Boolean']['input']>;
  agreedSecupayTnc?: InputMaybe<Scalars['Boolean']['input']>;
  agreedStripeTnc?: InputMaybe<Scalars['Boolean']['input']>;
  bic?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  payoutsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  payoutsEnabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  secupayApproved?: InputMaybe<Scalars['Boolean']['input']>;
  secupayApprovedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BonusTransaction = Transaction & {
  amount: Scalars['Float']['output'];
  amountFormatted: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
  status: TransactionStatus;
  type: TransactionType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type CcMemberData = {
  appliedAt: Scalars['DateTime']['output'];
  isAppliedCC: Scalars['Boolean']['output'];
  level: Scalars['Float']['output'];
  markedCCAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClaimFreeShareDto = {
  confirmationToken: Scalars['String']['input'];
};

export enum CollectorsClubType {
  Basic = 'basic',
  Premium = 'premium',
  Subscriber = 'subscriber'
}

export type ComplianceStatusData = {
  /** Is additional document required for kyc process */
  documentVerification?: Maybe<Scalars['Boolean']['output']>;
  hasDataMismatch?: Maybe<Scalars['Boolean']['output']>;
  kyc?: Maybe<IdentityVerificationStatus>;
  kycLevel?: Maybe<Scalars['Float']['output']>;
  liability?: Maybe<IdentityVerificationStatus>;
  rejectionInfo?: Maybe<Array<IdentityRejection>>;
  /** Indicates whether user investment knowledge is sufficient to safely go through the process */
  sufficientKnowledge?: Maybe<Scalars['Boolean']['output']>;
};

export type ComplianceStatusDataInput = {
  /** Is additional document required for kyc process */
  documentVerification?: InputMaybe<Scalars['Boolean']['input']>;
  hasDataMismatch?: InputMaybe<Scalars['Boolean']['input']>;
  kyc?: InputMaybe<IdentityVerificationStatus>;
  kycLevel?: InputMaybe<Scalars['Float']['input']>;
  liability?: InputMaybe<IdentityVerificationStatus>;
  rejectionInfo?: InputMaybe<Array<IdentityRejectionInput>>;
  /** Indicates whether user investment knowledge is sufficient to safely go through the process */
  sufficientKnowledge?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Configuration = {
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  /** iso code for content language (e.g. "en") or null if content is language agnostic */
  language?: Maybe<Scalars['String']['output']>;
  metadata: ConfigurationMetadata;
  value: Scalars['String']['output'];
};

export type ConfigurationMetadata = {
  options?: Maybe<Array<Scalars['String']['output']>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CreateKycSessionPayloadDto = {
  enforceProvider?: InputMaybe<IdentityVerificationType>;
};

export type CreateLimitOrderDto = {
  assetId: Scalars['String']['input'];
  expirationDate: Scalars['DateTime']['input'];
  marketingData?: InputMaybe<MarketingDataInput>;
  maxNumberOfShares: Scalars['Int']['input'];
  maxPricePerShare: Scalars['Int']['input'];
};

export type CreateOfferForAssetPayloadDto = {
  assetId: Scalars['String']['input'];
  marketingData?: InputMaybe<MarketingDataInput>;
  pricePerShare: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
};

export type CreateOrderInput = {
  assetId: Scalars['String']['input'];
  bonusAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  marketingData?: InputMaybe<MarketingDataInput>;
  quantity: Scalars['Float']['input'];
};

export type CreatePaymentInputDto = {
  orderId: Scalars['String']['input'];
  paymentType: PaymentType;
  tradeId?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePaymentResultDto = {
  payment: Payment;
  paymentIntentData: PaymentIntentDataDto;
  webViewUrl?: Maybe<Scalars['String']['output']>;
};

export type CreateTradeInput = {
  marketingData?: InputMaybe<MarketingDataInput>;
  offerId: Scalars['String']['input'];
};

export type CreateUserInputDto = {
  bankDetails?: InputMaybe<UserBankDetailsInput>;
  betaFlags?: InputMaybe<UserBetaFlagsInput>;
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<UserDataInput>;
  dislikedAssetCategories?: InputMaybe<Array<AssetType>>;
  email: Scalars['String']['input'];
  ethWalletAddress?: InputMaybe<Scalars['String']['input']>;
  feedbackData?: InputMaybe<UserFeedbackDataInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  houseNumber?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  placeOfBirth?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  referringCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  termsAndConditionsVersion?: InputMaybe<Scalars['Float']['input']>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateUserResponseDto = {
  is2FAEnabled?: Maybe<Scalars['Boolean']['output']>;
  method?: Maybe<TwoFactorAuthType>;
  refreshToken?: Maybe<RefreshToken>;
  token?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type CreateVoucherCheckoutSessionPayloadDto = {
  amount: Scalars['Int']['input'];
  cancelUrl?: InputMaybe<Scalars['String']['input']>;
  coverImageUrl: Scalars['String']['input'];
};

export type CreditCardDetails = {
  expirationDate?: Maybe<Scalars['String']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  pan?: Maybe<Scalars['String']['output']>;
  useCreditCard?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteUserMetaDataDto = {
  comment?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type DeviceDataDto = {
  browserName?: Maybe<Scalars['String']['output']>;
  browserVersion?: Maybe<Scalars['String']['output']>;
  connectionType?: Maybe<Scalars['String']['output']>;
  cpuCores?: Maybe<Scalars['Float']['output']>;
  deviceModel?: Maybe<Scalars['String']['output']>;
  deviceType?: Maybe<Scalars['String']['output']>;
  deviceVendor?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  osName?: Maybe<Scalars['String']['output']>;
  osVersion?: Maybe<Scalars['String']['output']>;
  pixelDepth?: Maybe<Scalars['Float']['output']>;
  screenResolution?: Maybe<Scalars['String']['output']>;
};

export type DeviceDataInputDto = {
  browserName?: InputMaybe<Scalars['String']['input']>;
  browserVersion?: InputMaybe<Scalars['String']['input']>;
  connectionType?: InputMaybe<Scalars['String']['input']>;
  cpuCores?: InputMaybe<Scalars['Float']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceType?: InputMaybe<Scalars['String']['input']>;
  deviceVendor?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  osName?: InputMaybe<Scalars['String']['input']>;
  osVersion?: InputMaybe<Scalars['String']['input']>;
  pixelDepth?: InputMaybe<Scalars['Float']['input']>;
  screenResolution?: InputMaybe<Scalars['String']['input']>;
};

export type DeviceTrack = {
  createdAt: Scalars['DateTime']['output'];
  data: DeviceDataDto;
  id: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export enum DocumentType {
  Document = 'document',
  DropReport = 'drop_report',
  Image = 'image',
  OverviewImage = 'overview_image',
  TradingImage = 'trading_image',
  Video = 'video'
}

export type EmailLoginPayloadDto = {
  email: Scalars['String']['input'];
  otp?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type ExitedAssetInvestment = {
  assetId: Scalars['String']['output'];
  buyInPrice: Scalars['Float']['output'];
  exitedAmount: Scalars['Float']['output'];
  investedAmount: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
};

export type FacebookLoginPayloadDto = {
  access_token: Scalars['String']['input'];
  otp?: InputMaybe<Scalars['String']['input']>;
  referringCode?: InputMaybe<Scalars['String']['input']>;
  userData?: InputMaybe<SocialLoginUserDataPayload>;
};

export enum FeedbackType {
  Csat = 'CSAT',
  Native = 'NATIVE',
  None = 'NONE'
}

export type GetNftsResponse = {
  cursor: Scalars['String']['output'];
  result: Array<Nft>;
  total: Scalars['Int']['output'];
};

export type GoogleLoginPayloadDto = {
  access_token: Scalars['String']['input'];
  otp?: InputMaybe<Scalars['String']['input']>;
  referringCode?: InputMaybe<Scalars['String']['input']>;
  userData?: InputMaybe<SocialLoginUserDataPayload>;
};

export type IdentityData = {
  identifiedOn?: Maybe<Scalars['DateTime']['output']>;
  mismatch?: Maybe<Scalars['Boolean']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type IdentityDataInput = {
  identifiedOn?: InputMaybe<Scalars['DateTime']['input']>;
  mismatch?: InputMaybe<Scalars['Boolean']['input']>;
  rejectionReason?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityDocument = {
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  dateOfExpiry?: Maybe<Scalars['String']['output']>;
  dateOfIssue?: Maybe<Scalars['String']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  issuingCountry?: Maybe<Scalars['String']['output']>;
  mrz?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  personalNumber?: Maybe<Scalars['String']['output']>;
};

export type IdentityDocumentInput = {
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  dateOfExpiry?: InputMaybe<Scalars['String']['input']>;
  dateOfIssue?: InputMaybe<Scalars['String']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  issuingCountry?: InputMaybe<Scalars['String']['input']>;
  mrz?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  personalNumber?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityRejection = {
  description?: Maybe<Scalars['String']['output']>;
  flaggedProperties?: Maybe<Array<Scalars['String']['output']>>;
  report?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IdentityRejectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  flaggedProperties?: InputMaybe<Array<Scalars['String']['input']>>;
  report?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type IdentityUser = {
  cell: Scalars['String']['output'];
  dateOfBirth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  sex: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type IdentityUserInput = {
  cell: Scalars['String']['input'];
  dateOfBirth: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  sex: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type IdentityVerification = {
  actionId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  data: IdentityData;
  documentData?: Maybe<IdentityDocument>;
  id: Scalars['String']['output'];
  isFinished: Scalars['Boolean']['output'];
  /** identifier returned by provider to be used during communication, might be url, token, etc. */
  providerId?: Maybe<Scalars['String']['output']>;
  rejectionInfo?: Maybe<Array<IdentityRejection>>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  status: IdentityVerificationStatus;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  userInfo: IdentityUser;
  verificationType: Scalars['String']['output'];
};

export type IdentityVerificationInput = {
  actionId?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['DateTime']['input'];
  data: IdentityDataInput;
  documentData?: InputMaybe<IdentityDocumentInput>;
  id: Scalars['String']['input'];
  isFinished: Scalars['Boolean']['input'];
  /** identifier returned by provider to be used during communication, might be url, token, etc. */
  providerId?: InputMaybe<Scalars['String']['input']>;
  rejectionInfo?: InputMaybe<Array<IdentityRejectionInput>>;
  rejectionReason?: InputMaybe<Scalars['String']['input']>;
  status: IdentityVerificationStatus;
  updatedAt: Scalars['DateTime']['input'];
  userId: Scalars['String']['input'];
  userInfo: IdentityUserInput;
  verificationType: Scalars['String']['input'];
};

export enum IdentityVerificationStatus {
  Canceled = 'canceled',
  Caution = 'caution',
  Expired = 'expired',
  Fraud = 'fraud',
  Invalid = 'invalid',
  Open = 'open',
  Pending = 'pending',
  Rejected = 'rejected',
  Successful = 'successful',
  Suspected = 'suspected',
  Unsupported = 'unsupported'
}

export enum IdentityVerificationType {
  LiabilityContract = 'liability_contract',
  LiabilityUser = 'liability_user',
  OnfidoAuto = 'onfido_auto',
  WebidAuto = 'webid_auto',
  WebidVideo = 'webid_video'
}

export type InvestorExperienceQuestionnaire = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type LanguageInfoDto = {
  code?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type LimitOrder = {
  asset: Asset;
  assetId: Scalars['String']['output'];
  cancelReason?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<LimitOrderData>;
  expirationDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  maxNumberOfShares: Scalars['Int']['output'];
  maxPricePerShare: Scalars['Int']['output'];
  status: LimitOrderStatus;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type LimitOrderData = {
  marketingData: MarketingData;
};

export type LimitOrderEdge = {
  cursor: Scalars['String']['output'];
  node: LimitOrder;
};

export type LimitOrderFilterDto = {
  assetId?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Array<LimitOrderStatus>>;
};

export enum LimitOrderStatus {
  Canceled = 'canceled',
  Expired = 'expired',
  Fulfilled = 'fulfilled',
  Live = 'live',
  Pending = 'pending'
}

export enum LoginType {
  Apple = 'apple',
  Email = 'email',
  Facebook = 'facebook',
  Google = 'google',
  Other = 'other'
}

export type MarketingData = {
  fbclid: Scalars['String']['output'];
  gclid: Scalars['String']['output'];
  utmCampaign: Scalars['String']['output'];
  utmContent: Scalars['String']['output'];
  utmMedium: Scalars['String']['output'];
  utmSource: Scalars['String']['output'];
};

export type MarketingDataInput = {
  fbclid?: InputMaybe<Scalars['String']['input']>;
  gclid?: InputMaybe<Scalars['String']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  addArticleBookmark: Scalars['Boolean']['output'];
  addDislikeForAsset: AssetUserDislike;
  addLikeForAsset: AssetUserLike;
  applyToCC: Scalars['Boolean']['output'];
  cancelOrder: Scalars['Boolean']['output'];
  cancelTrade: Scalars['Boolean']['output'];
  ccApplicationCall: Scalars['Boolean']['output'];
  ccExpertCall: Scalars['Boolean']['output'];
  claimFreeShare: Transaction;
  createLimitOrder: LimitOrder;
  createOffer: Offer;
  createOrder: Order;
  createPayment: CreatePaymentResultDto;
  createStripeAccount: Scalars['Boolean']['output'];
  createTrade: Trade;
  createVoucherCheckoutSession: Scalars['String']['output'];
  deleteArticleBookmark: Scalars['Boolean']['output'];
  deleteLimitOrder: Scalars['Boolean']['output'];
  deleteOffer: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  exitVoteForAsset: AssetUserExitVote;
  loginUserByEmail: TokenResponseDto;
  redeemVoucher: Voucher;
  refreshAccessToken: TokenResponseDto;
  rejectAccessToken: Scalars['Boolean']['output'];
  removeDislikeFromAsset: Scalars['Boolean']['output'];
  removeLikeFromAsset: Scalars['Boolean']['output'];
  requestOTP: Scalars['Boolean']['output'];
  requestOnFidoSdkToken: RequestOnFidoSdkTokenResponseDto;
  resetLanguage: User;
  resetPasswordRequest: PasswordResetRequestResponseDto;
  sendDocumentToStripe: Scalars['Boolean']['output'];
  sendFeedback: Scalars['Boolean']['output'];
  sendFeedbackWithMetadata: Scalars['Boolean']['output'];
  setupPayment: PaymentIntentDataDto;
  signUpUser: CreateUserResponseDto;
  startKycSession: IdentityVerification;
  subscribeToNotifications: AssetUserNotification;
  tryMatchUserSession?: Maybe<DeviceTrack>;
  unsubscribeFromNotifications: Scalars['Boolean']['output'];
  updateBetaFlags: User;
  updateCSATLastSeen: Scalars['Boolean']['output'];
  updateEmail: User;
  updateIban: User;
  updateLanguage: User;
  updateNativeLastSeen: Scalars['Boolean']['output'];
  updatePassword: User;
  updateProfile: User;
  updateTaxData: User;
  updateTwoFactorAuthStatus: User;
  updateUserAddress: User;
  updateUserData: User;
  uploadKycDocument: Scalars['Boolean']['output'];
  useSavedCreditCard: User;
  userAppleLogin: SocialLoginResponseDto;
  userFacebookLogin: SocialLoginResponseDto;
  userGoogleLogin: SocialLoginResponseDto;
};


export type MutationAddArticleBookmarkArgs = {
  articleId: Scalars['Int']['input'];
};


export type MutationAddDislikeForAssetArgs = {
  input: AssetLikeDislikeRequestDto;
};


export type MutationAddLikeForAssetArgs = {
  input: AssetLikeDislikeRequestDto;
};


export type MutationCancelOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationCancelTradeArgs = {
  tradeId: Scalars['String']['input'];
};


export type MutationClaimFreeShareArgs = {
  input: ClaimFreeShareDto;
};


export type MutationCreateLimitOrderArgs = {
  input: CreateLimitOrderDto;
};


export type MutationCreateOfferArgs = {
  input: CreateOfferForAssetPayloadDto;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInputDto;
};


export type MutationCreateTradeArgs = {
  input: CreateTradeInput;
};


export type MutationCreateVoucherCheckoutSessionArgs = {
  input: CreateVoucherCheckoutSessionPayloadDto;
};


export type MutationDeleteArticleBookmarkArgs = {
  articleId: Scalars['Int']['input'];
};


export type MutationDeleteLimitOrderArgs = {
  limitOrderId: Scalars['String']['input'];
};


export type MutationDeleteOfferArgs = {
  offerId: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  metadata?: InputMaybe<DeleteUserMetaDataDto>;
};


export type MutationExitVoteForAssetArgs = {
  input: AssetUserExitVotePayloadDto;
};


export type MutationLoginUserByEmailArgs = {
  input: EmailLoginPayloadDto;
};


export type MutationRedeemVoucherArgs = {
  voucherCode: Scalars['String']['input'];
};


export type MutationRefreshAccessTokenArgs = {
  input: RefreshTokenDto;
};


export type MutationRejectAccessTokenArgs = {
  input: RefreshTokenDto;
};


export type MutationRemoveDislikeFromAssetArgs = {
  input: AssetLikeDislikeRequestDto;
};


export type MutationRemoveLikeFromAssetArgs = {
  input: AssetLikeDislikeRequestDto;
};


export type MutationRequestOnFidoSdkTokenArgs = {
  input: RequestOnFidoSdkTokenPayloadDto;
};


export type MutationResetPasswordRequestArgs = {
  payload: PasswordResetRequestPayloadDto;
};


export type MutationSendDocumentToStripeArgs = {
  location: Scalars['String']['input'];
};


export type MutationSendFeedbackArgs = {
  input: SendFeedbackPayloadDto;
};


export type MutationSendFeedbackWithMetadataArgs = {
  input: SendFeedbackWithMetadataPayloadDto;
};


export type MutationSignUpUserArgs = {
  input: CreateUserInputDto;
};


export type MutationStartKycSessionArgs = {
  input?: InputMaybe<CreateKycSessionPayloadDto>;
};


export type MutationSubscribeToNotificationsArgs = {
  assetId: Scalars['String']['input'];
};


export type MutationTryMatchUserSessionArgs = {
  input: DeviceDataInputDto;
  onboardingTime: Scalars['Float']['input'];
};


export type MutationUnsubscribeFromNotificationsArgs = {
  assetId: Scalars['String']['input'];
};


export type MutationUpdateBetaFlagsArgs = {
  payload: UpdateUserBetaFlagsPayloadDto;
};


export type MutationUpdateEmailArgs = {
  input: UpdateEmailDto;
};


export type MutationUpdateIbanArgs = {
  input: UpdateIbanDto;
};


export type MutationUpdateLanguageArgs = {
  input: UpdateUserLanguageRequestDto;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordDto;
};


export type MutationUpdateProfileArgs = {
  payload: UpdateUserProfilePayloadDto;
};


export type MutationUpdateTaxDataArgs = {
  input: UpdateTaxDataPayloadDto;
};


export type MutationUpdateTwoFactorAuthStatusArgs = {
  otp: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
};


export type MutationUpdateUserAddressArgs = {
  input: UpdateUserAddressDto;
};


export type MutationUpdateUserDataArgs = {
  input: UpdateUserDataPayloadDto;
};


export type MutationUploadKycDocumentArgs = {
  documentId: Scalars['String']['input'];
};


export type MutationUseSavedCreditCardArgs = {
  payload: UseSavedCreditCardDto;
};


export type MutationUserAppleLoginArgs = {
  input: AppleLoginPayloadDto;
};


export type MutationUserFacebookLoginArgs = {
  input: FacebookLoginPayloadDto;
};


export type MutationUserGoogleLoginArgs = {
  input: GoogleLoginPayloadDto;
};

export type NavigationDto = {
  items: Array<NavigationItemDto>;
  locations: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};

export type NavigationItemDto = {
  label: Scalars['String']['output'];
  target?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Nft = {
  contractAddress: Scalars['String']['output'];
  contractType?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tokenId: Scalars['String']['output'];
};

export type NotificationData = {
  general?: Maybe<Scalars['Boolean']['output']>;
  trading?: Maybe<Scalars['Boolean']['output']>;
};

export type NotificationDataInput = {
  general?: InputMaybe<Scalars['Boolean']['input']>;
  trading?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Offer = {
  asset?: Maybe<Asset>;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<OfferData>;
  id: Scalars['ID']['output'];
  isDisabled: Scalars['Boolean']['output'];
  pricePerShare: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
  status: OfferStatus;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type OfferData = {
  marketingData: MarketingData;
};

export type OfferEdge = {
  cursor: Scalars['String']['output'];
  node: Offer;
};

export type OfferFilterDto = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  status?: Array<OfferStatus>;
};

export enum OfferStatus {
  Blocked = 'blocked',
  Canceled = 'canceled',
  Expired = 'expired',
  Fulfilled = 'fulfilled',
  Open = 'open'
}

export type Order = {
  assetId: Scalars['String']['output'];
  assetLabel: Scalars['String']['output'];
  bonus: Scalars['Float']['output'];
  costCenter?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  fee: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  orderNumber: Scalars['Float']['output'];
  orderType: OrderType;
  prettyOrderNumber: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
  status: OrderStatus;
  updatedAt: Scalars['DateTime']['output'];
  userData: OrderUserData;
  userId: Scalars['String']['output'];
};

export type OrderEdge = {
  cursor: Scalars['String']['output'];
  node: Order;
};

export enum OrderStatus {
  Canceled = 'canceled',
  Error = 'error',
  Fulfilled = 'fulfilled',
  Open = 'open',
  Paid = 'paid',
  Pending = 'pending',
  Refunded = 'refunded',
  TokenPending = 'token_pending'
}

export enum OrderType {
  Drop = 'drop',
  Trade = 'trade'
}

export type OrderUserData = {
  birthDate?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  houseNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isInternal?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  marketingData?: Maybe<MarketingData>;
  nationality?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  placeOfBirth?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<TrackingSource>;
  postalCode?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageDataDto = {
  content?: Maybe<Scalars['String']['output']>;
  cursor?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  featuredImageBig?: Maybe<Scalars['String']['output']>;
  featuredImageSmall?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  link: Scalars['String']['output'];
  pageViewData?: Maybe<PageViewDataDto>;
  parentUri?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoDataDto>;
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  translations?: Maybe<Array<TranslationListDto>>;
  uri: Scalars['String']['output'];
};

export type PageInfoD = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageViewDataDto = {
  fullWidthPage?: Maybe<Scalars['Boolean']['output']>;
  showHeroImage?: Maybe<Scalars['Boolean']['output']>;
  showNavigation?: Maybe<Scalars['Boolean']['output']>;
  showTitle?: Maybe<Scalars['Boolean']['output']>;
};

export type PaginatedArticles = {
  edges?: Maybe<Array<ArticleDataDtoEdge>>;
  pageInfo?: Maybe<PageInfoD>;
};

export type PaginatedAssets = {
  edges?: Maybe<Array<AssetEdge>>;
  pageInfo?: Maybe<PageInfoD>;
};

export type PaginatedLimitOrders = {
  edges?: Maybe<Array<LimitOrderEdge>>;
  pageInfo?: Maybe<PageInfoD>;
};

export type PaginatedOffer = {
  edges?: Maybe<Array<OfferEdge>>;
  pageInfo?: Maybe<PageInfoD>;
};

export type PaginatedOrders = {
  edges?: Maybe<Array<OrderEdge>>;
  pageInfo?: Maybe<PageInfoD>;
};

export type PaginatedPriceAlerts = {
  edges?: Maybe<Array<PriceAlertEdge>>;
  pageInfo?: Maybe<PageInfoD>;
};

export type PaginatedTransactions = {
  edges?: Maybe<Array<TransactionEdge>>;
  pageInfo?: Maybe<PageInfoD>;
};

export type PaginatedUserAssets = {
  edges?: Maybe<Array<AssetUserEdge>>;
  pageInfo?: Maybe<PageInfoD>;
};

export type PaginationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PasswordResetRequestPayloadDto = {
  email: Scalars['String']['input'];
};

export type PasswordResetRequestResponseDto = {
  success: Scalars['Boolean']['output'];
};

export type Payment = {
  assetId: Scalars['String']['output'];
  assetLabel: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  orderId: Scalars['String']['output'];
  paymentProvider: PaymentType;
  paymentRef?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
  status: PaymentStatus;
  statusCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type PaymentIntentDataDto = {
  clientSecret: Scalars['String']['output'];
  customer: Scalars['String']['output'];
  ephemeralKey?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};

export enum PaymentStatus {
  Canceled = 'canceled',
  Error = 'error',
  Expired = 'expired',
  Open = 'open',
  Paid = 'paid',
  Pending = 'pending',
  Refunded = 'refunded'
}

export enum PaymentType {
  Aciapplepay = 'aciapplepay',
  Acigooglepay = 'acigooglepay',
  Secupaycreditcards = 'secupaycreditcards',
  Secupaysofort = 'secupaysofort',
  Stripeapplepay = 'stripeapplepay',
  Stripecreditcard = 'stripecreditcard',
  Stripeeps = 'stripeeps',
  Stripegiropay = 'stripegiropay',
  Stripegooglepay = 'stripegooglepay',
  Stripeklarna = 'stripeklarna',
  Stripesofort = 'stripesofort'
}

export type PostDataDto = {
  categories?: Maybe<Array<Scalars['String']['output']>>;
  content?: Maybe<Scalars['String']['output']>;
  cursor?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  featuredImageBig?: Maybe<Scalars['String']['output']>;
  featuredImageSmall?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  link: Scalars['String']['output'];
  pageViewData?: Maybe<PageViewDataDto>;
  parentUri?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoDataDto>;
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  translations?: Maybe<Array<TranslationListDto>>;
  uri: Scalars['String']['output'];
};

export type PriceAlert = {
  active: Scalars['Boolean']['output'];
  asset: Asset;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  priceFormatted: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type PriceAlertEdge = {
  cursor: Scalars['String']['output'];
  node: PriceAlert;
};

export enum PriceDataSource {
  Market = 'market',
  Trading = 'trading'
}

export enum PurchaseType {
  Drop = 'drop',
  Trade = 'trade'
}

export type Query = {
  aboutUs: AboutUsDataDto;
  articleCategories: Array<ArticleCategoryDataDto>;
  articles: PaginatedArticles;
  asset: Asset;
  assetLimitOrders: PaginatedLimitOrders;
  assets: PaginatedAssets;
  assetsByIds: Array<Asset>;
  bookmarkedArticles: Array<Scalars['Int']['output']>;
  configuration: Array<Configuration>;
  exitedAssetInvestments: Array<ExitedAssetInvestment>;
  faqArticle: SolutionArticleDto;
  faqArticles: Array<SolutionArticleDto>;
  faqCategories: Array<SolutionCategoryDto>;
  faqFolder: SolutionFolderDto;
  faqFolders: Array<SolutionFolderDto>;
  fetchEthWalletNfts: GetNftsResponse;
  getExitVoteForAsset: AssetUserExitVote;
  getFeedbackType: FeedbackType;
  getIntercomUserHash: Scalars['String']['output'];
  getPayment: Payment;
  getTradingRecommendations: Array<Scalars['String']['output']>;
  hasOpenDeal: Scalars['Boolean']['output'];
  isTradingDay: Scalars['Boolean']['output'];
  limitOrder: LimitOrder;
  limitOrders: PaginatedLimitOrders;
  me: User;
  myAssetRecommendations: Array<Scalars['String']['output']>;
  offerById: Offer;
  offers: PaginatedOffer;
  orders: PaginatedOrders;
  page?: Maybe<PageDataDto>;
  pages: Array<PageDataDto>;
  post: PostDataDto;
  posts: Array<PostDataDto>;
  pressPosts: Array<PostDataDto>;
  priceAlerts: PaginatedPriceAlerts;
  siteData: SiteDataDto;
  testimonials: Array<TestimonyItemDto>;
  transactionHistoryYearQuarters: Array<TransactionHistory>;
  transactions: PaginatedTransactions;
  transactionsHistory: Array<TransactionHistory>;
  uploadKycDocumentSignedUrl: UserUpload;
  upsellAssets: Array<Asset>;
  user: User;
  userAssetFavorites: PaginatedAssets;
  userAssetsPaginated: PaginatedUserAssets;
  userOffers: PaginatedOffer;
  voucherByCode: Voucher;
  voucherCoverImages: Array<Scalars['String']['output']>;
  walletDevelopment: Array<WalletDevelopmentDto>;
  walletDevelopmentByCategory: Array<WalletDevelopmentDto>;
};


export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticleFilterDto>;
  pagination?: InputMaybe<PaginationArgs>;
};


export type QueryAssetArgs = {
  assetId: Scalars['String']['input'];
};


export type QueryAssetLimitOrdersArgs = {
  filter?: InputMaybe<LimitOrderFilterDto>;
  pagination?: InputMaybe<PaginationArgs>;
};


export type QueryAssetsArgs = {
  filter?: InputMaybe<AssetFilterDto>;
  pagination?: InputMaybe<PaginationArgs>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<AssetSortingOption>>;
};


export type QueryAssetsByIdsArgs = {
  payload: AssetsByIdsPayload;
};


export type QueryFaqArticleArgs = {
  articleId: Scalars['Float']['input'];
};


export type QueryFaqArticlesArgs = {
  folderId: Scalars['Float']['input'];
};


export type QueryFaqFolderArgs = {
  folderId: Scalars['Float']['input'];
};


export type QueryFaqFoldersArgs = {
  categoryId: Scalars['Float']['input'];
};


export type QueryFetchEthWalletNftsArgs = {
  address: Scalars['String']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetExitVoteForAssetArgs = {
  assetId: Scalars['String']['input'];
};


export type QueryGetPaymentArgs = {
  paymentId: Scalars['String']['input'];
};


export type QueryLimitOrderArgs = {
  limitOrderId: Scalars['String']['input'];
};


export type QueryLimitOrdersArgs = {
  filter?: InputMaybe<LimitOrderFilterDto>;
  pagination?: InputMaybe<PaginationArgs>;
};


export type QueryOfferByIdArgs = {
  offerId: Scalars['String']['input'];
};


export type QueryOffersArgs = {
  filter?: InputMaybe<OfferFilterDto>;
  pagination?: InputMaybe<PaginationArgs>;
};


export type QueryPageArgs = {
  asPreview?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryPostArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryPriceAlertsArgs = {
  pagination?: InputMaybe<PaginationArgs>;
};


export type QueryTransactionsArgs = {
  filter?: InputMaybe<TransactionFilterDto>;
  pagination?: InputMaybe<PaginationArgs>;
};


export type QueryUploadKycDocumentSignedUrlArgs = {
  name: Scalars['String']['input'];
};


export type QueryUpsellAssetsArgs = {
  input: UpsellAssetsInput;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserAssetFavoritesArgs = {
  filter?: InputMaybe<UserAssetFavoritesFilterDto>;
  pagination?: InputMaybe<PaginationArgs>;
  sort?: InputMaybe<Array<AssetSortingOption>>;
};


export type QueryUserAssetsPaginatedArgs = {
  pagination?: InputMaybe<PaginationArgs>;
  sort?: InputMaybe<Array<AssetSortingOption>>;
};


export type QueryUserOffersArgs = {
  filter?: InputMaybe<OfferFilterDto>;
  pagination?: InputMaybe<PaginationArgs>;
};


export type QueryVoucherByCodeArgs = {
  voucherCode: Scalars['String']['input'];
};


export type QueryWalletDevelopmentByCategoryArgs = {
  filter: WalletDevelopmentByCategoryFilterInput;
};

export type ReferralTransaction = Transaction & {
  amount: Scalars['Float']['output'];
  amountFormatted: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
  referredUser: Scalars['ID']['output'];
  status: TransactionStatus;
  type: TransactionType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type RefreshToken = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: Scalars['String']['output'];
};

export type RefreshTokenDto = {
  refreshToken: Scalars['String']['input'];
};

export type RequestOnFidoSdkTokenPayloadDto = {
  applicationId: Scalars['String']['input'];
};

export type RequestOnFidoSdkTokenResponseDto = {
  token: Scalars['String']['output'];
};

export enum Scope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type SendFeedbackPayloadDto = {
  message: Scalars['String']['input'];
  type: Scalars['Int']['input'];
};

export type SendFeedbackWithMetadataPayloadDto = {
  appVersion?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['Int']['input'];
};

export type SeoBreadcrumb = {
  text: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type SeoDataDto = {
  breadcrumbs?: Maybe<Array<SeoBreadcrumb>>;
  canonical?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featuredImage?: Maybe<Scalars['String']['output']>;
  metaDesc?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaRobotsNofollow?: Maybe<Scalars['String']['output']>;
  metaRobotsNoindex?: Maybe<Scalars['String']['output']>;
  opengraphAuthor?: Maybe<Scalars['String']['output']>;
  opengraphDescription?: Maybe<Scalars['String']['output']>;
  opengraphModifiedTime?: Maybe<Scalars['String']['output']>;
  opengraphPublishedTime?: Maybe<Scalars['String']['output']>;
  opengraphSiteName?: Maybe<Scalars['String']['output']>;
  opengraphTitle?: Maybe<Scalars['String']['output']>;
  opengraphType?: Maybe<Scalars['String']['output']>;
  opengraphUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SeoSiteDataDto = {
  companyName: Scalars['String']['output'];
  description: Scalars['String']['output'];
  facebookUrl: Scalars['String']['output'];
  instagramUrl: Scalars['String']['output'];
  siteName: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SiteDataDto = {
  menus: Array<NavigationDto>;
  seo: SeoSiteDataDto;
};

export type SocialLoginResponseDto = {
  is2FAEnabled?: Maybe<Scalars['Boolean']['output']>;
  justRegistered: Scalars['Boolean']['output'];
  method?: Maybe<TwoFactorAuthType>;
  refreshToken?: Maybe<RefreshToken>;
  token?: Maybe<Scalars['String']['output']>;
};

export type SocialLoginUserDataPayload = {
  fbclid?: InputMaybe<Scalars['String']['input']>;
  gclid?: InputMaybe<Scalars['String']['input']>;
  preferredCategory?: InputMaybe<Scalars['String']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
};

export type SolutionArticleDto = {
  category: SolutionCategoryDto;
  categoryId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  descriptionText?: Maybe<Scalars['String']['output']>;
  folder: SolutionFolderDto;
  folderId?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Float']['output'];
  status: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type SolutionCategoryDto = {
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  folders: Array<SolutionFolderDto>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type SolutionFolderDto = {
  articles: Array<SolutionArticleDto>;
  categoryId: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  visibility: Scalars['Float']['output'];
};

export type TaxDataDto = {
  churchTaxCurrentYear?: Maybe<Scalars['Float']['output']>;
  churchTaxUpcomingYear?: Maybe<Scalars['Float']['output']>;
  exemptionOrder?: Maybe<TaxExemptionOrderDto>;
  lossBalance?: Maybe<Scalars['Float']['output']>;
  nvLetter?: Maybe<Scalars['Boolean']['output']>;
  taxId?: Maybe<Scalars['String']['output']>;
  taxResidency?: Maybe<Scalars['String']['output']>;
};

export type TaxExemptionOrderDto = {
  currentBalance?: Maybe<Scalars['Float']['output']>;
  initialValue?: Maybe<Scalars['Float']['output']>;
};

export enum TaxType {
  DifferentialTaxation = 'differential_taxation',
  NoVat = 'no_vat',
  Vat = 'vat'
}

export type TestimonyItemDto = {
  company: Scalars['String']['output'];
  content: Scalars['String']['output'];
  image: Scalars['String']['output'];
  position: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TokenResponseDto = {
  is2FAEnabled?: Maybe<Scalars['Boolean']['output']>;
  method?: Maybe<TwoFactorAuthType>;
  refreshToken?: Maybe<RefreshToken>;
  token?: Maybe<Scalars['String']['output']>;
};

export enum TrackingSource {
  Android = 'ANDROID',
  Backend = 'BACKEND',
  Ios = 'IOS',
  Web = 'WEB'
}

export type Trade = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  offerId: Scalars['String']['output'];
  order: Order;
  orderId: Scalars['String']['output'];
  sellerId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

/** Updated on weekly basis information regarding how specific asset is performing during trading */
export type TradingStatsData = {
  investSum?: Maybe<Scalars['Float']['output']>;
  maxPrice?: Maybe<Scalars['Float']['output']>;
  minPrice?: Maybe<Scalars['Float']['output']>;
  tradesCount?: Maybe<Scalars['Float']['output']>;
};

export type Transaction = {
  amount: Scalars['Float']['output'];
  amountFormatted: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
  status: TransactionStatus;
  type: TransactionType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TransactionByQuarter = {
  investment: Scalars['Float']['output'];
  payout: Scalars['Float']['output'];
  profit: Scalars['Float']['output'];
  quarter: Scalars['Float']['output'];
};

export type TransactionEdge = {
  cursor: Scalars['String']['output'];
  node: Transaction;
};

export type TransactionFilterDto = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<TransactionStatus>>;
  type?: InputMaybe<Array<TransactionType>>;
};

export type TransactionHistory = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  investment: Scalars['Float']['output'];
  payout: Scalars['Float']['output'];
  profit?: Maybe<Scalars['Float']['output']>;
  transactionByQuarter: Array<TransactionByQuarter>;
  userId: Scalars['String']['output'];
  year: Scalars['Float']['output'];
};

export type TransactionInput = {
  amount: Scalars['Float']['input'];
  amountFormatted: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  expirationDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
  status: TransactionStatus;
  type: TransactionType;
  updatedAt: Scalars['DateTime']['input'];
  userId: Scalars['String']['input'];
};

export enum TransactionStatus {
  Blocked = 'blocked',
  Closed = 'closed',
  Open = 'open'
}

export enum TransactionType {
  AssetExit = 'ASSET_EXIT',
  BonusUsed = 'BONUS_USED',
  DropBuy = 'DROP_BUY',
  ExitPayout = 'EXIT_PAYOUT',
  GiftCards = 'GIFT_CARDS',
  GiftCardUsed = 'GIFT_CARD_USED',
  PromoBonus_10 = 'PROMO_BONUS_10',
  ReferralPurchase = 'REFERRAL_PURCHASE',
  Refund = 'REFUND',
  SignupBonus = 'SIGNUP_BONUS',
  TradeBuy = 'TRADE_BUY',
  TradeSell = 'TRADE_SELL'
}

export type TranslationListDto = {
  language: LanguageInfoDto;
  slug?: Maybe<Scalars['String']['output']>;
};

export enum TwoFactorAuthType {
  Email = 'email'
}

export type UpdateEmailDto = {
  email: Scalars['String']['input'];
};

export type UpdateIbanDto = {
  agreedPayoutTnc?: InputMaybe<Scalars['Boolean']['input']>;
  agreedSecupayTnc?: InputMaybe<Scalars['Boolean']['input']>;
  agreedStripeTnc?: InputMaybe<Scalars['Boolean']['input']>;
  bic?: InputMaybe<Scalars['String']['input']>;
  iban: Scalars['String']['input'];
};

export type UpdatePasswordDto = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateTaxDataPayloadDto = {
  exemptionOrderInitialValue?: InputMaybe<Scalars['Float']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
  taxResidency?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserAddressDto = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type UpdateUserBetaFlagsPayloadDto = {
  tradingValueWalletGraph?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateUserDataPayloadDto = {
  defaultPaymentMethod?: InputMaybe<PaymentType>;
  defaultTradingPaymentMethod?: InputMaybe<PaymentType>;
  fbclid?: InputMaybe<Scalars['String']['input']>;
  /** Token used for communication with firebase */
  fcmToken?: InputMaybe<Scalars['String']['input']>;
  gclid?: InputMaybe<Scalars['String']['input']>;
  intendedMonthlyInvest?: InputMaybe<Scalars['String']['input']>;
  isUsingBrazeSdk?: InputMaybe<Scalars['Boolean']['input']>;
  /** Configuration for user specific notifications */
  notifications?: InputMaybe<NotificationDataInput>;
  optInWhatsappMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  ttclid?: InputMaybe<Scalars['String']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserLanguageRequestDto = {
  language?: InputMaybe<Scalars['String']['input']>;
  systemLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserProfilePayloadDto = {
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  dislikedAssetCategories?: InputMaybe<Array<AssetType>>;
  ethWalletAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  placeOfBirth?: InputMaybe<Scalars['String']['input']>;
  termsAndConditionsVersion?: InputMaybe<Scalars['Float']['input']>;
};

export enum UploadStatus {
  Cancelled = 'Cancelled',
  Failure = 'Failure',
  Pending = 'Pending',
  Success = 'Success'
}

export enum UploadType {
  AddressProof = 'AddressProof',
  Other = 'Other',
  RegistrationCertificate = 'RegistrationCertificate'
}

export type UpsellAssetsInput = {
  assetId: Scalars['String']['input'];
  purchaseType: PurchaseType;
};

export type UseSavedCreditCardDto = {
  useCreditCard: Scalars['Boolean']['input'];
};

export type User = {
  assetUserNotifications: Array<AssetUserNotification>;
  assets: Array<AssetUser>;
  autoIdentEnabled: Scalars['Boolean']['output'];
  averageShare: Scalars['Float']['output'];
  bankDetails?: Maybe<UserBankDetails>;
  betaFlags?: Maybe<UserBetaFlags>;
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  bonus: UserBonus;
  ccMemberData?: Maybe<CcMemberData>;
  city?: Maybe<Scalars['String']['output']>;
  complianceStatus: ComplianceStatusData;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<UserData>;
  dislikedAssetCategories?: Maybe<Array<AssetType>>;
  dislikes: Array<AssetUserDislike>;
  earlyAccesses: Array<AssetUserEarlyAccess>;
  email: Scalars['String']['output'];
  eosAccount?: Maybe<Scalars['String']['output']>;
  ethWalletAddress?: Maybe<Scalars['String']['output']>;
  feedbackData?: Maybe<UserFeedbackData>;
  firstName?: Maybe<Scalars['String']['output']>;
  group: UserGroup;
  hasFinishedKycProcess?: Maybe<Scalars['Boolean']['output']>;
  hasGeneratedEmail: Scalars['Boolean']['output'];
  houseNumber?: Maybe<Scalars['String']['output']>;
  iban?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  investmentQuestionnaire?: Maybe<Array<InvestorExperienceQuestionnaire>>;
  isInternal: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  /** User in app language */
  language?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  likes: Array<AssetUserLike>;
  loginType: LoginType;
  nationality?: Maybe<Scalars['String']['output']>;
  offers?: Maybe<Array<Offer>>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  placeOfBirth?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  socialId?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  taxData?: Maybe<TaxDataDto>;
  termsAndConditionsVersion: Scalars['Float']['output'];
  totalMoneySpent: Scalars['Float']['output'];
  transactions?: Maybe<Array<Transaction>>;
  twoFactorEnabled: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserAssetFavoritesFilterDto = {
  collectorClubType?: InputMaybe<Array<CollectorsClubType>>;
  hotCategory?: InputMaybe<Scalars['Boolean']['input']>;
  includeWelcomeAssets?: InputMaybe<Scalars['Boolean']['input']>;
  publicAssetsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Array<AssetStatus>>;
  taxType?: InputMaybe<Array<TaxType>>;
  type?: InputMaybe<Array<AssetType>>;
  typeExcept?: InputMaybe<Array<AssetType>>;
  welcomeAssetsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  withAvailableOffers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserBankDetails = {
  creditCard?: Maybe<CreditCardDetails>;
  payout?: Maybe<BankPaymentDetails>;
};

export type UserBankDetailsInput = {
  payout?: InputMaybe<BankPaymentDetailsInput>;
};

export type UserBetaFlags = {
  active?: Maybe<Scalars['Boolean']['output']>;
  tradingValueWalletGraph?: Maybe<Scalars['Boolean']['output']>;
};

export type UserBetaFlagsInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  tradingValueWalletGraph?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserBonus = {
  amount: Scalars['Float']['output'];
  bonusBalance: Scalars['Float']['output'];
  formatted: Scalars['String']['output'];
  voucherBalance: Scalars['Float']['output'];
};

export type UserData = {
  defaultPaymentMethod?: Maybe<PaymentType>;
  defaultTradingPaymentMethod?: Maybe<PaymentType>;
  fbclid?: Maybe<Scalars['String']['output']>;
  /** Token used for communication with firebase */
  fcmToken?: Maybe<Scalars['String']['output']>;
  gclid?: Maybe<Scalars['String']['output']>;
  intendedMonthlyInvest?: Maybe<Scalars['String']['output']>;
  /** @deprecated deprecated (in control by app) */
  isReferralOpen?: Maybe<Scalars['Boolean']['output']>;
  isUsingBrazeSdk?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Deprecated in favour of language property at User object level */
  language?: Maybe<Scalars['String']['output']>;
  /** @deprecated deprecated (in control by app) */
  lastAskedForRating?: Maybe<Scalars['String']['output']>;
  /** Configuration for user specific notifications */
  notifications?: Maybe<NotificationData>;
  optInWhatsappMarketing?: Maybe<Scalars['Boolean']['output']>;
  optInWhatsappMarketingDate?: Maybe<Scalars['DateTime']['output']>;
  preferredCategory?: Maybe<Scalars['String']['output']>;
  systemLanguage?: Maybe<Scalars['String']['output']>;
  ttclid?: Maybe<Scalars['String']['output']>;
  utmCampaign?: Maybe<Scalars['String']['output']>;
  utmContent?: Maybe<Scalars['String']['output']>;
  utmMedium?: Maybe<Scalars['String']['output']>;
  utmSource?: Maybe<Scalars['String']['output']>;
};

export type UserDataInput = {
  defaultPaymentMethod?: InputMaybe<PaymentType>;
  defaultTradingPaymentMethod?: InputMaybe<PaymentType>;
  fbclid?: InputMaybe<Scalars['String']['input']>;
  /** Token used for communication with firebase */
  fcmToken?: InputMaybe<Scalars['String']['input']>;
  gclid?: InputMaybe<Scalars['String']['input']>;
  intendedMonthlyInvest?: InputMaybe<Scalars['String']['input']>;
  isReferralOpen?: InputMaybe<Scalars['Boolean']['input']>;
  isUsingBrazeSdk?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  lastAskedForRating?: InputMaybe<Scalars['String']['input']>;
  /** Configuration for user specific notifications */
  notifications?: InputMaybe<NotificationDataInput>;
  optInWhatsappMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  optInWhatsappMarketingDate?: InputMaybe<Scalars['DateTime']['input']>;
  preferredCategory?: InputMaybe<Scalars['String']['input']>;
  systemLanguage?: InputMaybe<Scalars['String']['input']>;
  ttclid?: InputMaybe<Scalars['String']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
};

export type UserFeedbackData = {
  csatLastSeen?: Maybe<Scalars['DateTime']['output']>;
  lastRating?: Maybe<Scalars['Int']['output']>;
  nativeLastSeen?: Maybe<Scalars['DateTime']['output']>;
};

export type UserFeedbackDataInput = {
  csatLastSeen?: InputMaybe<Scalars['DateTime']['input']>;
  lastRating?: InputMaybe<Scalars['Int']['input']>;
  nativeLastSeen?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum UserGroup {
  Basic = 'basic',
  Premium = 'premium',
  Subscription = 'subscription'
}

export enum UserRole {
  Admin = 'Admin',
  User = 'User'
}

export type UserUpload = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  previewUrl: Scalars['String']['output'];
  signedUrl: Scalars['String']['output'];
  status: UploadStatus;
  uploadType: UploadType;
  userId: Scalars['String']['output'];
};

export type Voucher = {
  amount: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  coverImage: Scalars['String']['output'];
  expirationDate: Scalars['DateTime']['output'];
  expirationDateFormatted: Scalars['String']['output'];
  redeemedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WalletDevelopmentByCategoryFilterInput = {
  publicAssetsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<AssetType>>;
  typeExcept?: InputMaybe<Array<AssetType>>;
};

export type WalletDevelopmentDto = {
  investedValue: Scalars['Float']['output'];
  marketValue: Scalars['Float']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type FetchAssetListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAssetListQuery = { assets: { edges?: Array<{ node: { id: string, label?: string | null, heroColour?: string | null, heroImage?: string | null, type: AssetType, dropDate?: any | null, actualPrice: number, averageMarketPrice?: number | null, make?: string | null, model?: string | null, exitPrice?: number | null, exitDate?: any | null, collectorsClubType: CollectorsClubType, status: AssetStatus, countLikes: number, price: number, pricePerShare?: number | null } }> | null, pageInfo?: { endCursor?: string | null, hasNextPage: boolean } | null } };

export type AssetQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type AssetQuery = { asset: { id: string, label?: string | null, heroColour?: string | null, heroImage?: string | null, type: AssetType, dropDate?: any | null, actualPrice: number, price: number, averageMarketPrice?: number | null, pricePerShare?: number | null, make?: string | null, model?: string | null, exitPrice?: number | null, exitDate?: any | null, collectorsClubType: CollectorsClubType, totalShares: number, percentageTokenized?: number | null, creator?: string | null, maxSharesPerTransaction?: number | null, minSharesPerTransaction?: number | null, feePercentage: number, exclusivity?: string | null, condition?: string | null, annualReturn?: number | null, originalSellingPrice?: number | null, timePeriod?: number | null, timePeriodMonths?: number | null, isHidden: boolean, basePriceDate?: any | null, expectedHoldingPeriodRange?: string | null, images?: { medium?: string | null } | null, gallery: Array<{ id: string, url: string, mediumUrl?: string | null, thumbnailUrl?: string | null, placeholderUrl?: string | null, type: DocumentType }>, tradingStats: { tradesCount?: number | null, minPrice?: number | null, maxPrice?: number | null, investSum?: number | null }, priceDevelopmentData: Array<{ id: string, source: PriceDataSource, value: number, date: any }>, investmentHighlights: Array<{ highlight: string }> } };


export const FetchAssetListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchAssetList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"heroColour"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"dropDate"}},{"kind":"Field","name":{"kind":"Name","value":"actualPrice"}},{"kind":"Field","name":{"kind":"Name","value":"averageMarketPrice"}},{"kind":"Field","name":{"kind":"Name","value":"make"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"exitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"exitDate"}},{"kind":"Field","name":{"kind":"Name","value":"collectorsClubType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"countLikes"}},{"kind":"Field","name":{"kind":"Name","value":"exitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"exitDate"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerShare"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<FetchAssetListQuery, FetchAssetListQueryVariables>;
export const AssetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Asset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"assetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"heroColour"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"dropDate"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medium"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actualPrice"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"averageMarketPrice"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerShare"}},{"kind":"Field","name":{"kind":"Name","value":"make"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"exitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"exitDate"}},{"kind":"Field","name":{"kind":"Name","value":"collectorsClubType"}},{"kind":"Field","name":{"kind":"Name","value":"totalShares"}},{"kind":"Field","name":{"kind":"Name","value":"percentageTokenized"}},{"kind":"Field","name":{"kind":"Name","value":"make"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"maxSharesPerTransaction"}},{"kind":"Field","name":{"kind":"Name","value":"minSharesPerTransaction"}},{"kind":"Field","name":{"kind":"Name","value":"feePercentage"}},{"kind":"Field","name":{"kind":"Name","value":"exclusivity"}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"annualReturn"}},{"kind":"Field","name":{"kind":"Name","value":"originalSellingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"timePeriod"}},{"kind":"Field","name":{"kind":"Name","value":"timePeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mediumUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderUrl"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tradingStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tradesCount"}},{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}},{"kind":"Field","name":{"kind":"Name","value":"investSum"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceDevelopmentData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exitDate"}},{"kind":"Field","name":{"kind":"Name","value":"basePriceDate"}},{"kind":"Field","name":{"kind":"Name","value":"expectedHoldingPeriodRange"}},{"kind":"Field","name":{"kind":"Name","value":"investmentHighlights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highlight"}}]}}]}}]}}]} as unknown as DocumentNode<AssetQuery, AssetQueryVariables>;