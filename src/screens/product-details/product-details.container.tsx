import React from 'react';

import { IProductDetailsVM, ProductDetails } from '../../features/product-details/product-details.component';
import { ProductDetailsVM } from '../../features/product-details/product-details.vm';

export class ProductDetailsContainer extends React.Component {

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
