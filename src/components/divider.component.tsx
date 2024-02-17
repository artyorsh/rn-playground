import React from 'react';
import { ViewProps } from 'react-native';
import { Divider as RNPDivider } from 'react-native-paper';

export const Divider: React.FC<ViewProps> = (props) => (
  <RNPDivider {...props} />
);
