import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { observer } from 'mobx-react';

import { SafeArea } from '../../components/safe-area.component';
import { ILoginFormValues, LoginForm } from './components/login-form.component';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.component';
import { NavigationBarBackAccessory } from '../../components/navigation-bar/navigation-accessory.component';

export interface ILoginVM {
  initialValues: ILoginFormValues;
  submit(values: ILoginFormValues): void;
  goBack(): void;
}

export const Login: React.FC<{ vm: ILoginVM }> = observer(({ vm }) => {

  const renderBackButton = React.useCallback((props: ViewProps) => (
    <NavigationBarBackAccessory
      {...props}
      onPress={vm.goBack}
    />
  ), []);

  return (
    <SafeArea>
      <NavigationBar accessoryLeft={renderBackButton} />
      <LoginForm 
        style={styles.loginForm}
        initialValues={vm.initialValues}
        onSubmit={vm.submit}
      /> 
    </SafeArea>
  );
});

const styles = StyleSheet.create({
  loginForm: {
    padding: 16,
  },
});
