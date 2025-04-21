import { ContainerModule } from 'inversify';

import { HomeScreenServiceId } from '@screens/home';
import { LoginScreenServiceId } from '@screens/login';
import { RegisterScreenServiceId } from '@screens/register';
import { SplashScreenServiceId } from '@screens/splash';
import { WelcomeScreenServiceId } from '@screens/welcome';
import { LogServiceId } from '@service/log';
import { ILogService } from '@service/log/model';

import { INavigationService } from './model';
import { INavigationMap, NavigationService } from './navigation.service';

export const NavigationServiceId: symbol = Symbol.for('NavigationService');

export const NavigationModule = new ContainerModule(bind => {
  bind<INavigationService>(NavigationServiceId).toDynamicValue(context => {
    const logService: ILogService = context.container.get(LogServiceId);

    const navigationMap: INavigationMap = {
      '/': context.container.get(SplashScreenServiceId),
      '/welcome': context.container.get(WelcomeScreenServiceId),
      '/login': context.container.get(LoginScreenServiceId),
      '/register': context.container.get(RegisterScreenServiceId),
      '/home': context.container.get(HomeScreenServiceId),
    };

    return new NavigationService(navigationMap, logService);
  }).inSingletonScope();
});

