import { Alert } from 'react-native';

import { IPushPermissionController } from '../push-notification.service';

export class MockPushPermissionController implements IPushPermissionController {

  public isGranted(): Promise<boolean> {
    return Promise.resolve(false);
  }

  public request(): Promise<void> {
    Alert.alert(
      'Push Notification Permission',
      'This is a mock implementation of push notification permission request in Expo Go environment. Actual permission request is not possible.',
      [
        {
          text: 'OK',
          onPress: () => Promise.resolve(),
        },
      ],
    );

    return Promise.resolve();
  }
}
