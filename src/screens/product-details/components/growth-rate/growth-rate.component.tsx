import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '../../../../components/button.component';
import { Card, CardProps } from '../../../../components/card.component';
import { Divider } from '../../../../components/divider.component';
import { Text } from '../../../../components/text.component';

export type IGrowthRateSectionId = '@product-details/growth-rate';

interface Props extends CardProps {
  vm: IGrowthRateVM;
}

export interface IGrowthRateVM {
  rate: string;
  growthPeriod: string;
  dropDate: string;
  dropPrice: string;
  viewDetails(): void;
}

export const GrowthRate: React.FC<Props> = ({ vm, ...props }) => (
  <Card
    {...props}
    style={styles.container}
    disabled={true}>
    <View style={styles.section}>
      <Text category='heading'>
        {'CAGR'}
      </Text>
      <Text category='subheading'>
        {vm.rate}
      </Text>
    </View>
    <View style={styles.section}>
      <Text>
        {'Annual Growth Rate'}
      </Text>
      <Text>
        {vm.growthPeriod}
      </Text>
    </View>
    <Divider />
    <View style={styles.section}>
      <Text category='paragraph'>
        {'Drop-Date'}
      </Text>
      <Text category='paragraph'>
        {vm.dropDate}
      </Text>
    </View>
    <View style={styles.section}>
      <Text category='paragraph'>
        {'Drop-Price'}
      </Text>
      <Text category='paragraph'>
        {vm.dropPrice}
      </Text>
    </View>
    <Divider />
    <Button
      testID='@growth-rate/view-details'
      style={styles.viewDetailsButton}
      title='View Details'
      onPress={vm.viewDetails}
    />
  </Card>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingVertical: 12,
    marginHorizontal: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
    paddingHorizontal: 16,
  },
  viewDetailsButton: {
    marginTop: 12,
  },
});
