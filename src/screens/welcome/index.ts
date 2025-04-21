import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { INavigationService } from '@service/navigation/model';

import { IWelcomeVM, Welcome } from './welcome.component';
import { WelcomeVM } from './welcome.vm';

export type IWelcomeRoute = '/welcome';

export const WelcomeScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>('WelcomeScreen').toFactory(context => {
    return () => {
      const navigationService: INavigationService = context.container.get('navigation');

      const vm: IWelcomeVM = new WelcomeVM(navigationService);

      return React.createElement(Welcome, { vm });
    };
  });
});
