import React from 'react';
import { observer } from 'mobx-react';

import { Loading } from '../../components/loading.component';
import { SafeArea } from '../../components/safe-area.component';
import { IProductListVM, ProductList } from './components/product-list.component';

export interface IOverviewVM {
  loading: boolean;
  products: IProductListVM;
}

export const Overview: React.FC<{ vm: IOverviewVM }> = observer(({ vm }) => {
  return (
    <SafeArea>
      <Loading loading={vm.loading}>
        <ProductList vm={vm.products} />
      </Loading>
    </SafeArea>
  );
});
