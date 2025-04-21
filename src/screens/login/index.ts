import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@di/model';
import { IRouter } from '@service/router/model';
import { ISessionService } from '@service/session/model';

import { ILoginVM, Login } from './login.component';
import { LoginVM } from './login.vm';

export type ILoginRoute = '/login';

const createLoginVM = (context: interfaces.Context): ILoginVM => {
  const router: IRouter = context.container.get(AppModule.ROUTER);
  const sessionService: ISessionService = context.container.get(AppModule.SESSION);

  return new LoginVM(router, sessionService);
};

export const LoginScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(AppModule.LOGIN_SCREEN).toFactory(context => {
    return () => React.createElement(Login, { vm: createLoginVM(context) });
  });
});
