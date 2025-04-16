import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { INavigationService } from '@service/navigation/model';
import { ISessionService } from '@service/session/model';

import { ISplashVM, Splash } from './splash.component';
import { SplashVM } from './splash.vm';

export type ISplashRoute = '/';

export const SplashScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>('SplashScreen').toFactory(context => {
    return (navigationService: INavigationService) => {
      return () => {
        const sessionService: ISessionService = context.container.get('session');

        const vm: ISplashVM = new SplashVM(navigationService, sessionService);

        return React.createElement(Splash, { vm });
      };
    };
  });
});
