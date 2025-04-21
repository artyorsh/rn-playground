import React from 'react';

import { AppModule } from '@di/model';

import { container } from './di';
import { INavigationService } from './service/navigation/model';

export class App extends React.Component {

  private navigation: INavigationService;

  constructor(props: {}) {
    super(props);
    this.navigation = container.get<INavigationService>(AppModule.NAVIGATION);
  }

  public render(): React.ReactElement {
    return this.navigation.getWindow();
  }
}
