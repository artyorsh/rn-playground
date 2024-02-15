import React from 'react';
import { AppModule, lazyInject } from './src/di/container';
import { INavigationService } from './src/service/navigation/model';

export class App extends React.Component {

  @lazyInject(AppModule.NAVIGATION) private navigation!: INavigationService;

  public componentDidMount(): void {
    setTimeout(() => {
      this.navigation.goTo('/');
    }, 1000)
  }

  public render(): React.ReactElement {
    return (
      <>
      </>
    );
  }
}
