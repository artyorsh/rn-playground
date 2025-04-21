import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { INavigationService } from '@service/navigation/model';
import { ISessionService } from '@service/session/model';

import { IRegisterVM, Register } from './register.component';
import { RegisterVM } from './register.vm';

export type IRegisterRoute = '/register';

export const RegisterScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>('RegisterScreen').toFactory(context => {
    return () => {
      const navigationService: INavigationService = context.container.get('navigation');
      const sessionService: ISessionService = context.container.get('session');

      const vm: IRegisterVM = new RegisterVM(navigationService, sessionService);

      return React.createElement(Register, { vm });
    };
  });
});
