import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface Props extends ViewProps {

}

export const ProgressBar: React.FC<Props> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
};