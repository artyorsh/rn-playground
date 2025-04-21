import React from 'react';
import { NavigationContainer, NavigationContainerRef, Route, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ILogService } from '@service/log/model';

import { INavigationLifecycleListener, INavigationService, IRoute, IRouteParams } from './model';

export type INavigationMap = Record<IRoute, React.ComponentType>;

export class NavigationService implements INavigationService {

  private rootNavigator = React.createRef<NavigationContainerRef<{}>>();

  private currentRoute: IRoute = '/';

  private navigationListeners: Map<IRoute, INavigationLifecycleListener> = new Map();

  constructor(private navigationMap: INavigationMap, private log: ILogService) {
  }

  /*
   * TODO: Here it's not possible to create screens for navigators other than Stack.
   * It's also not possible to have this function abstract, since we depend on onReady and onStateChange callbacks.
   *
   * In case other navigators (e.g bottom tabs) are needed,
   * it can be created via updating the INavigationMap contract, to separate stack screens from other screens.
   */
  public getWindow(): React.ReactElement {
    const Stack = createNativeStackNavigator();

    const createScreen = ([route, component]: [string, React.ComponentType], index: number): React.ReactElement => (
      <Stack.Screen
        key={index}
        name={route}
        component={component}
      />
    );

    return (
      <NavigationContainer
        ref={this.rootNavigator}
        onReady={this.onNavigationReady}
        onStateChange={this.onNavigationStateChange}>
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
          {Object.entries(this.navigationMap).map(createScreen)}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  public navigate = (route: IRoute, params?: IRouteParams): void => {
    // @ts-ignore: surpress IRoute not assignable to type never
    this.rootNavigator.current?.navigate(route, params);
  };

  public replace = (route: IRoute, params?: IRouteParams): void => {
    this.rootNavigator.current?.dispatch(StackActions.pop());
    this.navigate(route, params);
  };

  public goBack = (): void => {
    this.rootNavigator.current?.goBack();
  };

  private onNavigationReady = (): void => {
    this.navigationListeners.get(this.currentRoute)?.onFocus?.();
  };

  private onNavigationStateChange = (): void => {
    const nextRoute = this.rootNavigator.current?.getCurrentRoute() as Route<IRoute> | undefined;

    if (nextRoute && nextRoute.name !== this.currentRoute) {
      this.log.info('NavigationService', `Moving from ${this.currentRoute} to ${nextRoute.name}`);

      this.navigationListeners.get(this.currentRoute)?.onBlur?.();
      this.navigationListeners.get(nextRoute.name)?.onFocus?.();

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
    this.navigationListeners.set(route, listener);

    return () => {
      this.navigationListeners.delete(route);
    };
  };
}
