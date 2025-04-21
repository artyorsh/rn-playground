import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { NavigationServiceId } from '@service/navigation';
import { INavigationService } from '@service/navigation/model';
import { SessionServiceId } from '@service/session';
import { ISessionService } from '@service/session/model';

import { IRegisterVM, Register } from './register.component';
import { RegisterVM } from './register.vm';

export type IRegisterRoute = '/register';

export const RegisterScreenServiceId: symbol = Symbol.for('RegisterScreen');

const createRegisterVM = (context: interfaces.Context): IRegisterVM => {
  const navigationService: INavigationService = context.container.get(NavigationServiceId);
  const sessionService: ISessionService = context.container.get(SessionServiceId);

  return new RegisterVM(navigationService, sessionService);
};

export const RegisterScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(RegisterScreenServiceId).toFactory(context => {
    return () => React.createElement(Register, { vm: createRegisterVM(context) });
  });
});
