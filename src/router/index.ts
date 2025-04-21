import { IRouteMap, ReactNavigationRouter } from './react-navigation/react-navigation-router';
import { ContainerModule } from 'inversify';

import { AppModule } from '@/di/model';
import { IAuthRoute } from '@/auth';
import { IHomeRoute } from '@/home';
import { ILogService } from '@/log';

export type IRoute =
  | IAuthRoute
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

export const RouterModule = new ContainerModule(bind => {
  bind<IRouter>(AppModule.ROUTER).toDynamicValue(context => {
    const logService: ILogService = context.container.get(AppModule.LOG);

    const routeMap: IRouteMap = {
      '/': context.container.get(AppModule.SPLASH_SCREEN),
      '/welcome': context.container.get(AppModule.WELCOME_SCREEN),
      '/login': context.container.get(AppModule.LOGIN_SCREEN),
      '/register': context.container.get(AppModule.REGISTER_SCREEN),
      '/home': context.container.get(AppModule.HOME_SCREEN),
    };

    return new ReactNavigationRouter(routeMap, logService);
  }).inSingletonScope();
});

