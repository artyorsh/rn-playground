import React from 'react';
import { OverviewAPI } from './overview.api';
import { IOverviewVM, Overview } from './overview.component';
import { OverviewVM } from './overview.vm';
import { NavigationScreenContainer, NavigationScreenProps } from '../../service/navigation/components/navigation-screen.container';

export class OverviewContainer extends NavigationScreenContainer {

  private vm: IOverviewVM;

  constructor(props: NavigationScreenProps<{}>) {
    super(props);
    this.vm = new OverviewVM(this.lifecycle, new OverviewAPI());
  }

  public render(): React.ReactElement {
    return (
      <Overview vm={this.vm} />
    );
  }
}
