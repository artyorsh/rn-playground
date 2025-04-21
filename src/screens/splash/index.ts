import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { NavigationServiceId } from '@service/navigation';
import { INavigationService } from '@service/navigation/model';
import { SessionServiceId } from '@service/session';
import { ISessionService } from '@service/session/model';

import { ISplashVM, Splash } from './splash.component';
import { SplashVM } from './splash.vm';

export type ISplashRoute = '/';

export const SplashScreenServiceId: symbol = Symbol.for('SplashScreen');

const createSplashVM = (context: interfaces.Context): ISplashVM => {
  const navigationService: INavigationService = context.container.get(NavigationServiceId);
  const sessionService: ISessionService = context.container.get(SessionServiceId);

  return new SplashVM(navigationService, sessionService);
};

export const SplashScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(SplashScreenServiceId).toFactory(context => {
    return () => React.createElement(Splash, { vm: createSplashVM(context) });
  });
});
