import { AppModule } from '@di/model';
import { ContainerModule } from 'inversify';

import { ILogService } from '@service/log/model';

import { INavigationService } from './model';
import { INavigationMap, NavigationService } from './navigation.service';

export const NavigationModule = new ContainerModule(bind => {
  bind<INavigationService>(AppModule.NAVIGATION).toDynamicValue(context => {
    const logService: ILogService = context.container.get(AppModule.LOG);

    const navigationMap: INavigationMap = {
      '/': context.container.get(AppModule.SPLASH_SCREEN),
      '/welcome': context.container.get(AppModule.WELCOME_SCREEN),
      '/login': context.container.get(AppModule.LOGIN_SCREEN),
      '/register': context.container.get(AppModule.REGISTER_SCREEN),
      '/home': context.container.get(AppModule.HOME_SCREEN),
    };

    return new NavigationService(navigationMap, logService);
  }).inSingletonScope();
});

