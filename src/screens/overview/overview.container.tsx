import React from 'react';
import { OverviewAPI } from './overview.api';
import { IOverviewVM, Overview } from './overview.component';
import { OverviewVM } from './overview.vm';

export class OverviewContainer extends React.Component {

  private vm: IOverviewVM = new OverviewVM(new OverviewAPI());

  public render(): React.ReactElement {
    return (
      <Overview vm={this.vm} />
    );
  }
}
