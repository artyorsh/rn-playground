import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from './text.component';

interface Props extends ViewProps {

}

export const ProgressBar: React.FC<Props> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ alignSelf: 'center' }} category='heading'>Loading...</Text>
    </View>
  );
};