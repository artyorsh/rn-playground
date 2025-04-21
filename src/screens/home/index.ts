import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { ILogService } from '@service/log/model';
import { NavigationServiceId } from '@service/navigation';
import { INavigationService } from '@service/navigation/model';
import { IPushNotificationService } from '@service/push-notification/model';
import { ISessionService } from '@service/session/model';
import { IUserService } from '@service/user/model';

import { HomeAPI } from './home.api';
import { Home, IHomeVM } from './home.component';
import { HomeVM } from './home.vm';

export type IHomeRoute = '/home';

export const HomeScreenServiceId: symbol = Symbol.for('HomeScreen');

const createHomeVM = (context: interfaces.Context): IHomeVM => {
  const navigationService: INavigationService = context.container.get(NavigationServiceId);
  const sessionService: ISessionService = context.container.get('session');
  const userService: IUserService = context.container.get('user');
  const pushNotificationService: IPushNotificationService = context.container.get('push_notification');
  const logService: ILogService = context.container.get('log');

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
  bind<interfaces.Factory<React.FC>>(HomeScreenServiceId).toFactory(context => {
    return () => React.createElement(Home, { vm: createHomeVM(context) });
  });
});
