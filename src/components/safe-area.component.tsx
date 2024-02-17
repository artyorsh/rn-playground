import React from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeArea: React.FC<ViewProps> = (props) => (
  <SafeAreaView {...props} />
);