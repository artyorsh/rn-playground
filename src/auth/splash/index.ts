import React from 'react';
import { interfaces } from 'inversify';

import { AppModule } from '@/di/model';

import { ISplashVM, Splash } from './splash.component';
import { SplashVM } from './splash.vm';

export type ISplashRoute = '/';

export const SplashScreenFactory = (context: interfaces.Context): React.FC => {
  return () => React.createElement(Splash, { vm: createSplashVM(context) });
};

const createSplashVM = (context: interfaces.Context): ISplashVM => {
  return new SplashVM(
    context.container.get(AppModule.ROUTER),
    context.container.get(AppModule.SESSION),
  );
};
