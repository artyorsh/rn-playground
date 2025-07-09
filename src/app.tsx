import React from 'react';

import { AppModule } from '@/di/model';
import { IRouter } from '@/router';

import { container } from './di';
import { IModalService } from './modal';

export class App extends React.Component {

  private router: IRouter;
  private modalService: IModalService;

  constructor(props: {}) {
    super(props);
    this.router = container.get<IRouter>(AppModule.ROUTER);
    this.modalService = container.get<IModalService>(AppModule.MODAL);
  }

  public render(): React.ReactElement {
    return (
      <>
        {this.router.getWindow()}
        {this.modalService.getWindow()}
      </>
    );
  }
}
