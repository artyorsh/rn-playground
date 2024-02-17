import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from '../text.component';

interface Props extends ViewProps {
  title?: string;
  accessoryLeft?: React.FC<ViewProps>;
  accessoryRight?: React.FC<ViewProps>;
}

export const NavigationBar: React.FC<Props> = ({ accessoryLeft, accessoryRight, ...props }) => {
  return (
    <View style={styles.container}>
      {accessoryLeft?.({ style: styles.accessory })} 
      {accessoryRight?.({ style: styles.accessory })} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
    paddingHorizontal: 6,
  },
  accessory: {
  },
});