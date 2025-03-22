import React from 'react';

import { ScreenProps } from '../../service/navigation/model';
import { IProductDetailsVM, ProductDetails } from './product-details.component';
import { ProductDetailsVM } from './product-details.vm';

interface RouteParams {
  productId: string;
}

export class ProductDetailsContainer extends React.Component<ScreenProps<RouteParams>> {

  private get productId(): string {
    return this.props.route.params.productId;
  }

  private vm: IProductDetailsVM = new ProductDetailsVM(this.productId);

  public render(): React.ReactElement {
    return (
      <ProductDetails vm={this.vm} />
    );
  }
}
