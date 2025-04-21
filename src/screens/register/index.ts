import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { INavigationService } from '@service/navigation/model';
import { ISessionService } from '@service/session/model';

import { IRegisterVM, Register } from './register.component';
import { RegisterVM } from './register.vm';

export type IRegisterRoute = '/register';

const createRegisterVM = (context: interfaces.Context): IRegisterVM => {
  const navigationService: INavigationService = context.container.get('navigation');
  const sessionService: ISessionService = context.container.get('session');

  return new RegisterVM(navigationService, sessionService);
};

export const RegisterScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>('RegisterScreen').toFactory(context => {
    return () => React.createElement(Register, { vm: createRegisterVM(context) });
  });
});
