import React from 'react';
import { ILoginRoute } from 'src/auth/login';
import { IRegisterRoute } from 'src/auth/register';
import { IWelcomeRoute } from 'src/auth/welcome';
import { IHomeRoute } from 'src/home';
import { ISplashRoute } from 'src/splash';

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

export interface IRouter {
  getWindow(): React.ReactElement;
  navigate(route: IRoute, params?: IRouteParams): void;
  replace(route: IRoute, params?: IRouteParams): void;
  goBack(): void;
  /**
   * @returns a function to unsubscribe the listener
   */
  subscribe(route: IRoute, listener: INavigationLifecycleListener): Function;
}

