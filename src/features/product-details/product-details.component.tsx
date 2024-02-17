import React from 'react';
import { observer } from 'mobx-react';
import { ImageBackground, ImageSourcePropType, ScrollView, StyleSheet } from 'react-native';
import { Text } from '../../components/text.component';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.component';
import { NavigationBarBackAccessory, NavigationBarShareAccessory } from '../../components/navigation-bar/navigation-accessory.component';
import { GrowthRate, IGrowthRateSectionId } from './components/growth-rate/growth-rate.component';
import { FAQ, IFAQSectionId } from './components/faq/faq.component';

export interface IProductDetailsSection<VM = any> {
  id:
    | IGrowthRateSectionId
    | IFAQSectionId;
  vm: VM;
}

export interface IProductDetailsVM {
  images: ImageSourcePropType[];
  title: string;
  description: string;
  sections: IProductDetailsSection[];
  share(): void;
  goBack(): void;
  handleError(message: string): void;
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

  const renderSection = React.useCallback((section: IProductDetailsSection, index: number) => {
    switch(section.id) {
      case '@product-details/growth-rate':
        return React.createElement(GrowthRate, { vm: section.vm, key: index });

      case '@product-details/faq':
        return React.createElement(FAQ, { vm: section.vm, key: index });

      default:
        vm.handleError(`Unable to identify section ${section.id}`)
        return null;
    }
  }, []);

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
      {vm.sections.map(renderSection)}
    </ScrollView>
  );
})

const styles = StyleSheet.create({
  image: {
    height: 256,
  },
})