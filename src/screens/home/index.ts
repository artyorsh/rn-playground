import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { ILogService } from '@service/log/model';
import { INavigationService } from '@service/navigation/model';
import { IPushNotificationService } from '@service/push-notification/model';
import { ISessionService } from '@service/session/model';
import { IUserService } from '@service/user/model';

import { HomeAPI } from './home.api';
import { Home, IHomeVM } from './home.component';
import { HomeVM } from './home.vm';

export type IHomeRoute = '/home';

export const HomeScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>('HomeScreen').toFactory(context => {
    return () => {
      return () => {
        const navigationService: INavigationService = context.container.get('navigation');
        const sessionService: ISessionService = context.container.get('session');
        const userService: IUserService = context.container.get('user');
        const pushNotificationService: IPushNotificationService = context.container.get('push_notification');
        const logService: ILogService = context.container.get('log');

        const vm: IHomeVM = new HomeVM(
          sessionService,
          userService,
          pushNotificationService,
          navigationService,
          logService,
          new HomeAPI(),
        );

        return React.createElement(Home, { vm });
      };
    };
  });
});
