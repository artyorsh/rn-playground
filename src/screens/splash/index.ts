import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@di/model';
import { IRouter } from '@service/router/model';
import { ISessionService } from '@service/session/model';

import { ISplashVM, Splash } from './splash.component';
import { SplashVM } from './splash.vm';

export type ISplashRoute = '/';

const createSplashVM = (context: interfaces.Context): ISplashVM => {
  const navigationService: IRouter = context.container.get(AppModule.ROUTER);
  const sessionService: ISessionService = context.container.get(AppModule.SESSION);

  return new SplashVM(navigationService, sessionService);
};

export const SplashScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(AppModule.SPLASH_SCREEN).toFactory(context => {
    return () => React.createElement(Splash, { vm: createSplashVM(context) });
  });
});
