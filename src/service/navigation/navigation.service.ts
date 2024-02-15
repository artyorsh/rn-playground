import React from 'react';

import { INavigationService, IRoute, IRouteParams } from './model';

export class NavigationService implements INavigationService {

  public get navigator(): React.FC<any> {
    throw new Error('Method not implemented.');
  }

  public goTo = (route: IRoute, params?: IRouteParams | undefined): void => {
    throw new Error('Method not implemented.');
  }

  public replace = (route: IRoute, params?: IRouteParams | undefined): void => {
    throw new Error('Method not implemented.');
  }

  public goBack = (): void => {
    throw new Error('Method not implemented.');
  }

  public reset = (): void => {
    throw new Error('Method not implemented.');
  }
}
