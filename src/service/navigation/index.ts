import { ContainerModule } from 'inversify';

import { ILogService } from '@service/log/model';

import { INavigationService } from './model';
import { INavigationMapFactory, NavigationService } from './navigation.service';

type IScreenFactory = () => React.FC;

export const NavigationModule = new ContainerModule(bind => {
  bind<INavigationService>('navigation').toDynamicValue(context => {
    const logService: ILogService = context.container.get('log');

    const SplashScreen: IScreenFactory = context.container.get('SplashScreen');
    const WelcomeScreen: IScreenFactory = context.container.get('WelcomeScreen');
    const LoginScreen: IScreenFactory = context.container.get('LoginScreen');
    const RegisterScreen: IScreenFactory = context.container.get('RegisterScreen');
    const HomeScreen: IScreenFactory = context.container.get('HomeScreen');

    const createNavigationMap: INavigationMapFactory = (_navigationService: INavigationService) => ({
      '/': SplashScreen(),
      '/welcome': WelcomeScreen(),
      '/login': LoginScreen(),
      '/register': RegisterScreen(),
      '/home': HomeScreen(),
    });

    return new NavigationService(createNavigationMap, logService);
  }).inSingletonScope();
});

