import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@/di/model';
import { IRouter } from '@/router/model';

import { IWelcomeVM, Welcome } from './welcome.component';
import { WelcomeVM } from './welcome.vm';

export type IWelcomeRoute = '/welcome';

const createWelcomeVM = (context: interfaces.Context): IWelcomeVM => {
  const router: IRouter = context.container.get(AppModule.ROUTER);

  return new WelcomeVM(router);
};

export const WelcomeScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(AppModule.WELCOME_SCREEN).toFactory(context => {
    return () => React.createElement(Welcome, { vm: createWelcomeVM(context) });
  });
});
