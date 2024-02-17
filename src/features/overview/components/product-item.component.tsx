import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components/text.component';
import { Card, CardProps } from '../../../components/card.component';

interface Props extends CardProps {
  vm: IProductItemVM;
}

export interface IProductItemVM {
  title: string;
  image: ImageSourcePropType;
  marketPrice: string;
  price: string;
  viewDetails: () => void;
}

export const ProductItem: React.FC<Props> = ({ vm, ...props }) => (
  <Card
    {...props}
    onPress={vm.viewDetails}>
    <Image
      style={styles.image}
      source={vm.image}
    />
    <View style={styles.detailsContainer}>
      <Text category='heading'>
        {vm.title}
      </Text>
      <View style={styles.priceContainer}>
        <View>
          <Text>
            Drop Market Value
          </Text>
          <Text category='label'>
            {vm.marketPrice}
          </Text>
        </View>
        <View>
          <Text>
            Our Drop Price
          </Text>
          <Text category='label'>
            {vm.price}
          </Text>
        </View>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  image: {
    height: 192,
  },
  detailsContainer: {
    padding: 16,
    overflow: 'hidden',
  },
  priceContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})