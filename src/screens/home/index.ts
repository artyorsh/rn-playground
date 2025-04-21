import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@di/model';
import { ILogService } from '@service/log/model';
import { IPushNotificationService } from '@service/push-notification/model';
import { IRouter } from '@service/router/model';
import { ISessionService } from '@service/session/model';
import { IUserService } from '@service/user/model';

import { HomeAPI } from './home.api';
import { Home, IHomeVM } from './home.component';
import { HomeVM } from './home.vm';

export type IHomeRoute = '/home';

const createHomeVM = (context: interfaces.Context): IHomeVM => {
  const navigationService: IRouter = context.container.get(AppModule.ROUTER);
  const sessionService: ISessionService = context.container.get(AppModule.SESSION);
  const userService: IUserService = context.container.get(AppModule.USER);
  const pushNotificationService: IPushNotificationService = context.container.get(AppModule.PUSH_NOTIFICATION);
  const logService: ILogService = context.container.get(AppModule.LOG);

  return new HomeVM(
    sessionService,
    userService,
    pushNotificationService,
    navigationService,
    logService,
    new HomeAPI(),
  );
};

export const HomeScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(AppModule.HOME_SCREEN).toFactory(context => {
    return () => React.createElement(Home, { vm: createHomeVM(context) });
  });
});
