import React from 'react';
import { AppModule } from '@di/model';
import { ContainerModule, interfaces } from 'inversify';

import { INavigationService } from '@service/navigation/model';

import { IWelcomeVM, Welcome } from './welcome.component';
import { WelcomeVM } from './welcome.vm';

export type IWelcomeRoute = '/welcome';

const createWelcomeVM = (context: interfaces.Context): IWelcomeVM => {
  const navigationService: INavigationService = context.container.get(AppModule.NAVIGATION);

  return new WelcomeVM(navigationService);
};

export const WelcomeScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(AppModule.WELCOME_SCREEN).toFactory(context => {
    return () => React.createElement(Welcome, { vm: createWelcomeVM(context) });
  });
});
