import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { INavigationService } from '@service/navigation/model';
import { ISessionService } from '@service/session/model';

import { ISplashVM, Splash } from './splash.component';
import { SplashVM } from './splash.vm';

export type ISplashRoute = '/';

const createSplashVM = (context: interfaces.Context): ISplashVM => {
  const navigationService: INavigationService = context.container.get('navigation');
  const sessionService: ISessionService = context.container.get('session');

  return new SplashVM(navigationService, sessionService);
};

export const SplashScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>('SplashScreen').toFactory(context => {
    return () => React.createElement(Splash, { vm: createSplashVM(context) });
  });
});
