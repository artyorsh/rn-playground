import React from 'react';
import { ProductDetailsContainer } from './src/screens/product-details/product-details.container';
import { AppModule, lazyInject } from './src/di/container';
import { INavigationService } from './src/service/navigation/model';

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
