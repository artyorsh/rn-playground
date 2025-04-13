import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { Button } from '@components/button.component';
import { Text } from '@components/text.component';

interface Props extends ViewProps {
  vm: IWelcomeHeaderVM;
}

export interface IWelcomeHeaderVM {
  title: string;
  viewNotifications(): void;
  logout(): void;
}

export const WelcomeHeader: React.FC<Props> = ({ vm, ...props }) => (
  <View style={[styles.container, props.style]}>
    <Text category='heading'>
      {vm.title}
    </Text>
    <View style={styles.actionsContainer}>
      <Button
        testID='notifications-button'
        title='Notifications'
        onPress={vm.viewNotifications}
      />
      <Button
        testID='logout-button'
        title='Logout'
        onPress={vm.logout}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
});
