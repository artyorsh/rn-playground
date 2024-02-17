import React from 'react';

import { AppModule, lazyInject } from './di/container';
import { INavigationService } from './service/navigation/model';

export class App extends React.Component {

  @lazyInject(AppModule.NAVIGATION) private navigation!: INavigationService;

  public render(): React.ReactElement {
    return (
      <>
        {this.navigation.navigator({})}
      </>
    );
  }
}
