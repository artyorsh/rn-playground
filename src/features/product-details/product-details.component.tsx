import React from 'react';
import { observer } from 'mobx-react';
import { ImageBackground, ImageSourcePropType, ScrollView, StyleSheet } from 'react-native';
import { Text } from '../../components/text.component';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.component';
import { NavigationBarBackAccessory, NavigationBarShareAccessory } from '../../components/navigation-bar/navigation-accessory.component';

export interface IProductDetailsVM {
  images: ImageSourcePropType[];
  title: string;
  description: string;
  share(): void;
  goBack(): void;
}

export const ProductDetails: React.FC<{ vm: IProductDetailsVM }> = observer(({ vm }) => {

  const renderBackButton = React.useCallback((props) => (
    <NavigationBarBackAccessory 
      {...props}
      onPress={vm.goBack}
    />
  ), []);

  const renderShareButton = React.useCallback((props) => (
    <NavigationBarShareAccessory 
      {...props}
      onPress={vm.share}
    />
  ), []);

  return (
    <ScrollView>
      <ImageBackground 
        style={styles.image}
        source={vm.images[0]}>
        <NavigationBar 
          accessoryLeft={renderBackButton}
          accessoryRight={renderShareButton}
        />
      </ImageBackground>
      <Text category='heading'>
        {vm.title}
      </Text>
      <Text category='paragraph'>
        {vm.description}
      </Text>
    </ScrollView>
  );
})

const styles = StyleSheet.create({
  image: {
    height: 256,
  },
})