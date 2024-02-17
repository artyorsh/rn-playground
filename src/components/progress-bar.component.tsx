import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface Props extends ViewProps {

}

export const ProgressBar: React.FC<Props> = (_props) => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
