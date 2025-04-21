import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { NavigationServiceId } from '@service/navigation';
import { INavigationService } from '@service/navigation/model';

import { IWelcomeVM, Welcome } from './welcome.component';
import { WelcomeVM } from './welcome.vm';

export type IWelcomeRoute = '/welcome';

export const WelcomeScreenServiceId: symbol = Symbol.for('WelcomeScreen');

const createWelcomeVM = (context: interfaces.Context): IWelcomeVM => {
  const navigationService: INavigationService = context.container.get(NavigationServiceId);

  return new WelcomeVM(navigationService);
};

export const WelcomeScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(WelcomeScreenServiceId).toFactory(context => {
    return () => React.createElement(Welcome, { vm: createWelcomeVM(context) });
  });
});
