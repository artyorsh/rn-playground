import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@/di/model';
import { ISessionService } from '@/auth/session/model';
import { ILogService } from '@/log/model';
import { IPushNotificationService } from '@/push-notification/model';
import { IRouter } from '@/router/model';
import { IUserService } from '@/user/model';

import { HomeAPI } from './home.api';
import { Home, IHomeVM } from './home.component';
import { HomeVM } from './home.vm';

export type IHomeRoute = '/home';

export const HomeScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(AppModule.HOME_SCREEN)
    .toFactory(context => () => React.createElement(Home, { vm: createHomeVM(context) }));
});

const createHomeVM = (context: interfaces.Context): IHomeVM => {
  const router: IRouter = context.container.get(AppModule.ROUTER);
  const sessionService: ISessionService = context.container.get(AppModule.SESSION);
  const userService: IUserService = context.container.get(AppModule.USER);
  const pushNotificationService: IPushNotificationService = context.container.get(AppModule.PUSH_NOTIFICATION);
  const logService: ILogService = context.container.get(AppModule.LOG);

  return new HomeVM(
    sessionService,
    userService,
    pushNotificationService,
    router,
    logService,
    new HomeAPI(),
  );
};

