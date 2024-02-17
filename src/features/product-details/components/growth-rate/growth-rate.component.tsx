import React from 'react';
import { Card } from '../../../../components/card.component';
import { Text } from '../../../../components/text.component';
import { StyleSheet, View } from 'react-native';
import { Divider } from '../../../../components/divider.component';
import { Button } from '../../../../components/button.component';

export type IGrowthRateSectionId = '@product-details/growth-rate';

export interface IGrowthRateVM {
  rate: string;
  growthPeriod: string;
  dropDate: string;
  dropPrice: string;
  viewDetails: () => void;
}

export const GrowthRate: React.FC<{ vm: IGrowthRateVM }> = ({ vm }) => {
  return (
    <Card disabled={true}>
      <View style={styles.section}>
        <Text category='heading'>CAGR</Text>
        <Text category='heading'>{vm.rate}</Text>
      </View>
      <View style={styles.section}>
        <Text category='subparagraph'>Compound Annual Growth Rate</Text>
        <Text category='subparagraph'>{vm.growthPeriod}</Text>
      </View>
      <Divider />
      <View style={styles.section}>
        <Text category='heading'>Drop-Date</Text>
        <Text category='heading'>{vm.dropDate}</Text>
      </View>
      <View style={styles.section}>
        <Text category='heading'>Drop-Price</Text>
        <Text category='heading'>{vm.dropPrice}</Text>
      </View>
      <Divider />
      <Button 
        title='View Details'
        onPress={vm.viewDetails}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})