import React from 'react';

import { AppModule } from '@/di/model';
import { IRouter } from '@/router/model';

import { container } from './di';

export class App extends React.Component {

  private router: IRouter;

  constructor(props: {}) {
    super(props);
    this.router = container.get<IRouter>(AppModule.ROUTER);
  }

  public render(): React.ReactElement {
    return this.router.getWindow();
  }
}
