import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, ViewProps } from 'react-native';

export const SafeArea: React.FC<ViewProps> = (props) => (
  <SafeAreaView
    {...props}
    style={[styles.safeArea, props.style]}
  />
);

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      default: null,
    }),
  },
});
