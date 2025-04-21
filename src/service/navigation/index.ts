import { ContainerModule } from 'inversify';

import { ILogService } from '@service/log/model';

import { INavigationService } from './model';
import { INavigationMap, NavigationService } from './navigation.service';

export const NavigationModule = new ContainerModule(bind => {
  bind<INavigationService>('navigation').toDynamicValue(context => {
    const logService: ILogService = context.container.get('log');

    const navigationMap: INavigationMap = {
      '/': context.container.get('SplashScreen'),
      '/welcome': context.container.get('WelcomeScreen'),
      '/login': context.container.get('LoginScreen'),
      '/register': context.container.get('RegisterScreen'),
      '/home': context.container.get('HomeScreen'),
    };

    return new NavigationService(navigationMap, logService);
  }).inSingletonScope();
});

