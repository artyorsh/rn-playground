import React from 'react';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@/di/model';

import { ISplashVM, Splash } from './splash.component';
import { SplashVM } from './splash.vm';

export type ISplashRoute = '/';

export const SplashScreenModule = new ContainerModule(bind => {
  bind<interfaces.Factory<React.FC>>(AppModule.SPLASH_SCREEN)
    .toFactory(context => () => React.createElement(Splash, { vm: createSplashVM(context) }));
});

const createSplashVM = (context: interfaces.Context): ISplashVM => {
  return new SplashVM(
    context.container.get(AppModule.ROUTER),
    context.container.get(AppModule.SESSION),
  );
};
