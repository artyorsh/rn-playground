import React from 'react';

export type IRoute =
  | '/'

export type IRouteParams = Record<string, any>;

export interface INavigationService {
  navigator: React.FC<any>;
  goTo(route: IRoute, params?: IRouteParams): void;
  replace(route: IRoute, params?: IRouteParams): void;
  goBack(): void;
  reset(): void;
}

