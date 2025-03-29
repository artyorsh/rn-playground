import React from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';

import { SafeArea } from '../../components/safe-area.component';
import { ILoginFormValues, LoginForm } from './components/login-form.component';

export interface ILoginVM {
  initialValues: ILoginFormValues;
  submit(values: ILoginFormValues): void;
}

export const Login: React.FC<{ vm: ILoginVM }> = observer(({ vm }) => {

  return (
    <SafeArea>
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
