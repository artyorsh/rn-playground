import React from 'react';

import { IProductDetailsVM, ProductDetails } from './product-details.component';
import { ProductDetailsVM } from './product-details.vm';
import { NavigationScreenContainer, NavigationScreenProps } from '../../service/navigation/components/navigation-screen.container';

interface RouteParams {
  productId: string;
}

export class ProductDetailsContainer extends NavigationScreenContainer<RouteParams> {

  private vm: IProductDetailsVM;

  constructor(props: NavigationScreenProps<RouteParams>) {
    super(props);
    this.vm = new ProductDetailsVM(this.lifecycle, props.route.params.productId);
  }

  public render(): React.ReactElement {
    return (
      <ProductDetails vm={this.vm} />
    );
  }
}
