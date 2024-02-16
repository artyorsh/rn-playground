import React from 'react';
import { ProductDetailsContainer } from './src/screens/product-details/product-details.container';

export class App extends React.Component {

  public render(): React.ReactElement {
    return (
      <ProductDetailsContainer />
    );
  }
}
