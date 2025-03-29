import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginContainer } from '../../../screens/login/login.container';
import { WelcomeContainer } from '../../../screens/welcome/welcome.container';
import { RegisterContainer } from '../../../screens/register/register.container';
export type AuthRoute =
  | '/welcome'
  | '/login'
  | '/register';

export const AuthScreens: Record<AuthRoute, React.ComponentType<any>> = {
  '/welcome': WelcomeContainer,
  '/login': LoginContainer,
  '/register': RegisterContainer,
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
