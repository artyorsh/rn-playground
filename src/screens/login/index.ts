import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { NavigationServiceId } from '@service/navigation';
import { INavigationService } from '@service/navigation/model';
import { SessionServiceId } from '@service/session';
import { ISessionService } from '@service/session/model';

import { ILoginVM, Login } from './login.component';
import { LoginVM } from './login.vm';

export type ILoginRoute = '/login';

export const LoginScreenServiceId: symbol = Symbol.for('LoginScreen');

const createLoginVM = (context: interfaces.Context): ILoginVM => {
  const navigationService: INavigationService = context.container.get(NavigationServiceId);
  const sessionService: ISessionService = context.container.get(SessionServiceId);

  return new LoginVM(navigationService, sessionService);
};

export const LoginScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(LoginScreenServiceId).toFactory(context => {
    return () => React.createElement(Login, { vm: createLoginVM(context) });
  });
});
