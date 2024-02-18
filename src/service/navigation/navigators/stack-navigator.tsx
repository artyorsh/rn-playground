import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OverviewContainer } from '../../../screens/overview/overview.container';
import { ProductDetailsContainer } from '../../../screens/product-details/product-details.container';

export type StackRoute =
  | '/overview'
  | '/product-details';

export const StackScreens: Record<StackRoute, React.ComponentType<any>> = {
  '/overview': OverviewContainer,
  '/product-details': ProductDetailsContainer,
};

const Stack = createNativeStackNavigator();

const createScreen = (name: string, index: number): React.ReactElement => (
  <Stack.Screen
    key={index}
    name={name}
    component={StackScreens[name as StackRoute]}
  />
);

export const StackNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {Object.keys(StackScreens).map(createScreen)}
  </Stack.Navigator>
);
