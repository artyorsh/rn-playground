import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface Props extends ViewProps {
  title?: string;
  accessoryLeft?(props: ViewProps): React.ReactNode;
  accessoryRight?(props: ViewProps): React.ReactNode;
}

export const NavigationBar: React.FC<Props> = ({ accessoryLeft, accessoryRight }) => (
  <View style={styles.container}>
    {accessoryLeft?.({ style: styles.accessory })}
    {accessoryRight?.({ style: styles.accessory })}
  </View>
);

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
