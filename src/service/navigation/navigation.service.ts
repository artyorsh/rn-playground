import React from 'react';
import { NavigationContainerRef, Route, StackActions } from '@react-navigation/native';

import { ILogService } from '@service/log/model';

import { INavigationLifecycleListener, INavigationService, IRoute, IRouteParams } from './model';
import { INavigationMap, RootNavigator, RootNavigatorProps } from './root-navigator';

export type INavigationMapFactory = (navigationService: INavigationService) => INavigationMap;

export class NavigationService implements INavigationService {

  private rootNavigator = React.createRef<NavigationContainerRef<{}>>();

  private currentRoute: IRoute = '/';

  private navigationListeners: Map<IRoute, INavigationLifecycleListener> = new Map();

  constructor(private navigationMapFactory: INavigationMapFactory, private log: ILogService) {

  }

  public get navigator(): React.FC<RootNavigatorProps> {
    return () => React.createElement(RootNavigator, <RootNavigatorProps>{
      ref: this.rootNavigator,
      navigationMap: this.navigationMapFactory(this),
      onStateChange: this.onNavigationStateChange,
    });
  }

  public goTo = (route: IRoute, params?: IRouteParams): void => {
    // @ts-ignore: surpress IRoute not assignable to type never
    this.rootNavigator.current?.navigate(route, params);
  };

  public replace = (route: IRoute, params?: IRouteParams): void => {
    this.rootNavigator.current?.dispatch(StackActions.pop());
    this.goTo(route, params);
  };

  public goBack = (): void => {
    this.rootNavigator.current?.goBack();
  };

  private onNavigationStateChange = (): void => {
    const nextRoute = this.rootNavigator.current?.getCurrentRoute() as Route<IRoute> | undefined;

    if (nextRoute && nextRoute.name !== this.currentRoute) {
      this.log.info('NavigationService', `Moving from ${this.currentRoute} to ${nextRoute.name}`);

      this.navigationListeners.get(this.currentRoute)?.onBlur();
      this.navigationListeners.get(nextRoute.name)?.onFocus();

      this.currentRoute = nextRoute.name as IRoute;
    }
  };

  /*
   * TODO: I am not sure if this is the right way to do this.
   * I didn't want to use {navigation} prop from react-navigation, so came up with this.
   * It might be so, that onFocus is called earlier than componendDidMount, which is not correct.
   * The onNavigationStateChange should be tested to see it.
   *
   * @see {onNavigationStateChange}
   */
  public subscribe = (route: IRoute, listener: INavigationLifecycleListener): Function => {
    if (this.currentRoute === route) {
      listener.onFocus();
    }

    this.navigationListeners.set(route, listener);

    return () => {
      this.navigationListeners.delete(route);
    };
  };
}
