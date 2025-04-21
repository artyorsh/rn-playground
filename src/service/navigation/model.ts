import React from 'react';

import { IHomeRoute } from '@screens/home';
import { ILoginRoute } from '@screens/login';
import { IRegisterRoute } from '@screens/register';
import { ISplashRoute } from '@screens/splash';
import { IWelcomeRoute } from '@screens/welcome';

export type IRoute =
  | ISplashRoute
  | IWelcomeRoute
  | ILoginRoute
  | IRegisterRoute
  | IHomeRoute;

export type IRouteParams = Record<string, any>;

export interface INavigationLifecycleListener {
  onFocus?(): void;
  onBlur?(): void;
}

export interface INavigationService {
  getWindow(): React.ReactElement;
  navigate(route: IRoute, params?: IRouteParams): void;
  replace(route: IRoute, params?: IRouteParams): void;
  goBack(): void;
  /**
   * @returns a function to unsubscribe the listener
   */
  subscribe(route: IRoute, listener: INavigationLifecycleListener): Function;
}

