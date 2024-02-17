import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Divider as RNPDivider } from 'react-native-paper';

export const Divider: React.FC<ViewProps> = (props) => {
  return (
    <RNPDivider {...props} />
  );
};
