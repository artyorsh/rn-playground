import { ContainerModule } from 'inversify';

import { INavigationService } from '../service/navigation/model';
import { NavigationService } from '../service/navigation/navigation.service';
import { AppModule } from './container';

export const createModules = (): ContainerModule[] => {

  const mainModule = new ContainerModule(bind => {
    bind<INavigationService>(AppModule.NAVIGATION).toConstantValue(new NavigationService());
  });

  return [mainModule];
};
