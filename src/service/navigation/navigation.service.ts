import React from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

import { INavigationService, IRoute, IRouteParams } from './model';
import { RootNavigator, RootNavigatorProps } from './navigators/root-navigator';

const NAVIGATION_MAP: Record<string, () => Record<IRoute, any>> = {
  '/home': () => require('./navigators/stack-navigator').StackScreens,
};

export class NavigationService implements INavigationService {

  private rootNavigator = React.createRef<NavigationContainerRef<{}>>();

  private currentRoute: IRoute = '/';

  public get navigator(): React.FC<RootNavigatorProps> {
    return () => React.createElement(RootNavigator, <RootNavigatorProps>{
      ref: this.rootNavigator,
      onStateChange: this.onNavigationStateChange,
    });
  }

  public goTo = (route: IRoute, params?: IRouteParams | undefined): void => {
    const parent = this.findRouteParent(route);
    try {
      // @ts-ignore
      this.rootNavigator.current?.navigate(parent, { screen: route, params });
    } catch {
      console.error('NavigationService', `Unable to navigate to ${route} with ${parent}. Current route ${this.currentRoute}`);
    }
  }

  public replace = (route: IRoute, params?: IRouteParams | undefined): void => {
    this.rootNavigator.current?.dispatch(StackActions.pop());
    this.goTo(route, params);
  }

  public goBack = (): void => {
    this.rootNavigator.current?.goBack();
  }

  private onNavigationStateChange = (): void => {
    const nextRoute = this.rootNavigator.current?.getCurrentRoute();

    if (nextRoute && nextRoute.name !== this.currentRoute) {
      console.log('NavigationService', 'Moving from', this.currentRoute, 'to', nextRoute.name);
      this.currentRoute = nextRoute.name;
    }
  };  

  private findRouteParent = (route: IRoute): string | undefined => {
    return Object.keys(NAVIGATION_MAP).find((navigator) => {
      const navigatorRoutes: string[] = Object.keys(NAVIGATION_MAP[navigator]());

      return [navigator, ...navigatorRoutes].includes(route) && navigator;
    });
  };
}
