import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginContainer } from '../../../screens/login/login.container';

export type AuthRoute =
  | '/login';

export const AuthScreens: Record<AuthRoute, React.ComponentType<any>> = {
  '/login': LoginContainer,
};

const Stack = createNativeStackNavigator();

const createScreen = (name: string, index: number): React.ReactElement => (
  <Stack.Screen
    key={index}
    name={name}
    component={AuthScreens[name as AuthRoute]}
  />
);

export const AuthNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {Object.keys(AuthScreens).map(createScreen)}
  </Stack.Navigator>
);
