import React from 'react';

import { OverviewAPI } from '../../features/overview/overview.api';
import { IOverviewVM, Overview } from '../../features/overview/overview.component';
import { OverviewVM } from '../../features/overview/overview.vm';

export class OverviewContainer extends React.Component {

  private vm: IOverviewVM = new OverviewVM(new OverviewAPI());

  public render(): React.ReactElement {
    return (
      <Overview vm={this.vm} />
    );
  }
}
