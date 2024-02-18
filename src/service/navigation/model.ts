import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackRoute } from './navigators/stack-navigator';

export type IRoute =
  | StackRoute;

export type IRouteParams = Record<string, any>;

export type ScreenProps<Params extends object> = NativeStackScreenProps<{ Self: Params }, 'Self'>;

export interface INavigationService {
  navigator: React.FC<any>;
  goTo(route: IRoute, params?: IRouteParams): void;
  replace(route: IRoute, params?: IRouteParams): void;
  goBack(): void;
}

