import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { IProductDetailsVM, ProductDetails } from '../../features/product-details/product-details.component';
import { ProductDetailsVM } from '../../features/product-details/product-details.vm';
import { ScreenProps } from '../../service/navigation/model';

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
