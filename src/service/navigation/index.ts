import { ContainerModule } from 'inversify';

import { ILogService } from '@service/log/model';

import { INavigationService } from './model';
import { INavigationMapFactory, NavigationService } from './navigation.service';

type IScreenFactory = (navigationService: INavigationService) => React.FC;

export const NavigationModule = new ContainerModule(bind => {
  bind<INavigationService>('navigation').toDynamicValue(context => {
    const logService: ILogService = context.container.get('log');

    const SplashScreen: IScreenFactory = context.container.get('SplashScreen');
    const WelcomeScreen: IScreenFactory = context.container.get('WelcomeScreen');
    const LoginScreen: IScreenFactory = context.container.get('LoginScreen');
    const RegisterScreen: IScreenFactory = context.container.get('RegisterScreen');
    const HomeScreen: IScreenFactory = context.container.get('HomeScreen');

    const createNavigationMap: INavigationMapFactory = (navigationService: INavigationService) => ({
      '/': SplashScreen(navigationService),
      '/welcome': WelcomeScreen(navigationService),
      '/login': LoginScreen(navigationService),
      '/register': RegisterScreen(navigationService),
      '/home': HomeScreen(navigationService),
    });

    return new NavigationService(createNavigationMap, logService);
  }).inSingletonScope();
});

