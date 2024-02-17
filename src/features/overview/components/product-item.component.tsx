import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components/text.component';
import { Card, CardProps } from '../../../components/card.component';

interface Props extends CardProps {
  vm: IProductItemVM;
}

export interface IProductItemVM {
  title: string;
  backgroundColor: string;
  image: ImageSourcePropType;
  marketPrice: string;
  price: string;
  viewDetails: () => void;
}

export const ProductItem: React.FC<Props> = ({ vm, ...props }) => {

  return (
    <Card
      style={[styles.container, props.style]}
      onPress={vm.viewDetails}>
      <Image
        style={styles.image}
        source={vm.image}
      />
      <View style={[styles.detailsContainer, { backgroundColor: vm.backgroundColor }]}>
        <Text category='heading'>
          {vm.title}
        </Text>
        <View style={styles.priceContainer}>
          <View>
            <Text>
              Drop Market Value
            </Text>
            <Text category='subparagraph'>
              {vm.marketPrice}
            </Text>
          </View>
        <View>
          <Text>
            Our Drop Price
          </Text>
          <Text category='subparagraph'>
            {vm.price}
          </Text>
        </View>
      </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    height: 192,
  },
  detailsContainer: {
    padding: 16,
  },
  priceContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})