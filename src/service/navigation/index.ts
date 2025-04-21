import { ContainerModule } from 'inversify';

import { ILogService } from '@service/log/model';

import { INavigationService } from './model';
import { NavigationService } from './navigation.service';
import { INavigationMap } from './root-navigator';

export const NavigationModule = new ContainerModule(bind => {
  bind<INavigationService>('navigation').toDynamicValue(context => {
    const logService: ILogService = context.container.get('log');

    const SplashScreen: React.FC = context.container.get('SplashScreen');
    const WelcomeScreen: React.FC = context.container.get('WelcomeScreen');
    const LoginScreen: React.FC = context.container.get('LoginScreen');
    const RegisterScreen: React.FC = context.container.get('RegisterScreen');
    const HomeScreen: React.FC = context.container.get('HomeScreen');

    const createNavigationMap: INavigationMap = {
      '/': SplashScreen,
      '/welcome': WelcomeScreen,
      '/login': LoginScreen,
      '/register': RegisterScreen,
      '/home': HomeScreen,
    };

    return new NavigationService(createNavigationMap, logService);
  }).inSingletonScope();
});

