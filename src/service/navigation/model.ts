import React from 'react';
import { StackRoute } from './navigators/stack-navigator';

export type IRoute =
  | StackRoute;

export type IRouteParams = Record<string, any>;

export interface INavigationService {
  navigator: React.FC<any>;
  goTo(route: IRoute, params?: IRouteParams): void;
  replace(route: IRoute, params?: IRouteParams): void;
  goBack(): void;
}

