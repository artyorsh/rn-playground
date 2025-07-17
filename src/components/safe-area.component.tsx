import React from 'react';
import { ViewProps } from 'react-native';
import { initialWindowMetrics, SafeAreaView } from 'react-native-safe-area-context';

export const getBottomSpace = (offset: number = 0): number => {
  return offset + (initialWindowMetrics?.insets?.bottom || 0);
};

export const SafeArea: React.FC<ViewProps> = (props) => (
  <SafeAreaView
    edges={['top']}
    {...props}
  />
);
