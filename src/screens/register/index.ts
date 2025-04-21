import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@di/model';
import { IRouter } from '@service/router/model';
import { ISessionService } from '@service/session/model';

import { IRegisterVM, Register } from './register.component';
import { RegisterVM } from './register.vm';

export type IRegisterRoute = '/register';

const createRegisterVM = (context: interfaces.Context): IRegisterVM => {
  const router: IRouter = context.container.get(AppModule.ROUTER);
  const sessionService: ISessionService = context.container.get(AppModule.SESSION);

  return new RegisterVM(router, sessionService);
};

export const RegisterScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(AppModule.REGISTER_SCREEN).toFactory(context => {
    return () => React.createElement(Register, { vm: createRegisterVM(context) });
  });
});
