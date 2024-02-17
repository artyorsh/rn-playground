import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export const Divider: React.FC<ViewProps> = (props) => {
  return (
    <View style={[styles.container, props.style]}/>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 0.5,
  },
});