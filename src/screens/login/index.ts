import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { INavigationService } from '@service/navigation/model';
import { ISessionService } from '@service/session/model';

import { ILoginVM, Login } from './login.component';
import { LoginVM } from './login.vm';

export type ILoginRoute = '/login';

const createLoginVM = (context: interfaces.Context): ILoginVM => {
  const navigationService: INavigationService = context.container.get('navigation');
  const sessionService: ISessionService = context.container.get('session');

  return new LoginVM(navigationService, sessionService);
};

export const LoginScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>('LoginScreen').toFactory(context => {
    return () => React.createElement(Login, { vm: createLoginVM(context) });
  });
});
