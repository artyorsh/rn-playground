import React from 'react';
import { observer } from 'mobx-react';
import { IProductListVM, ProductList } from './components/product-list.component';
import { Loading } from '../../components/loading.component';

export interface IOverviewVM {
  loading: boolean;
  products: IProductListVM;
}

export const Overview: React.FC<{ vm: IOverviewVM }> = observer(({ vm }) => {

  return (
    <Loading loading={vm.loading}>
      <ProductList vm={vm.products} />
    </Loading>
  );
});