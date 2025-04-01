import React from 'react';

import { AppModule, container } from '../../di/container';
import { NavigationScreenContainer, NavigationScreenProps } from '../../service/navigation/components/navigation-screen.container';
import { Home, IHomeVM } from './home.component';
import { HomeVM } from './home.vm';

export class HomeContainer extends NavigationScreenContainer {

  private vm: IHomeVM;

  constructor(props: NavigationScreenProps<{}>) {
    super(props);
    this.vm = new HomeVM(this.lifecycle, {
      session: container.get(AppModule.SESSION),
      navigation: container.get(AppModule.NAVIGATION),
      user: container.get(AppModule.USER),
    });
  }

  public render(): React.ReactElement {
    return (
      <Home vm={this.vm} />
    );
  }
}
