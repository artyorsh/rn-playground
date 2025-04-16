import React from 'react';
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IRoute } from './model';

export type INavigationMap = Record<IRoute, React.FC>;

export type RootNavigatorProps = Omit<NavigationContainerProps, 'children'> & {
  navigationMap: INavigationMap;
};

const Stack = createNativeStackNavigator();

const createScreen = ([route, component]: [string, React.ComponentType], index: number): React.ReactElement => (
  <Stack.Screen
    key={index}
    name={route}
    component={component}
  />
);

export const RootNavigator = React.forwardRef((props: RootNavigatorProps, ref) => (
  <NavigationContainer
    ref={ref as any}
    {...props}>
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false, animation: 'fade' }}>
      {Object.entries(props.navigationMap).map(createScreen)}
    </Stack.Navigator>
  </NavigationContainer>
));
