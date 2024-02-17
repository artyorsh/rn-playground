import React from 'react';
import { IProductItemVM, ProductItem } from './product-item.component';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

export interface IProductListVM {
  products: IProductItemVM[];
}

export const ProductList: React.FC<{ vm: IProductListVM }> = ({ vm }) => {

  const renderItem = (info: ListRenderItemInfo<IProductItemVM>): React.ReactElement => (
    <ProductItem
      testID='@overview/product-item'
      style={styles.item}
      vm={info.item}
    />
  );

  return (
    <FlatList 
      contentContainerStyle={styles.container}
      data={vm.products}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  item: {
    marginVertical: 8,
  },
});