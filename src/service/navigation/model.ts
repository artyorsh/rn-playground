import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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

export type ScreenProps<Params extends object> = NativeStackScreenProps<{ Self: Params }, 'Self'>;

export interface INavigationLifecycleListener {
  onFocus(): void;
  onBlur(): void;
}

export interface INavigationService {
  navigator: React.FC<any>;
  goTo(route: IRoute, params?: IRouteParams): void;
  replace(route: IRoute, params?: IRouteParams): void;
  goBack(): void;
  /**
   * @returns a function to unsubscribe the listener
   */
  subscribe(route: IRoute, listener: INavigationLifecycleListener): Function;
}

