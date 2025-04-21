import { checkNotifications, NotificationOption, openSettings, requestNotifications, RESULTS } from 'react-native-permissions';

import { IPermissionController } from '../permission.service';

export type IPermissionRequestStatus =
  | 'not_requested'
  | 'denied'
  | 'granted';

export class NotificationPermissionController implements IPermissionController {

  constructor(private requestOptions: NotificationOption[]) {

  }

  public isGranted = (): Promise<boolean> => {
    return this.getStatus()
      .then(status => status === 'granted');
  };

  public request = (): Promise<void> => {
    return this.getStatus().then(status => {
      switch (status) {
        case 'granted':
          // In `granted` case, the system request results in no-op but triggers subequent native code.
          // We still call have to call `request` to reach natively integrated SDKs.
          return this.requestSystem();

        case 'denied':
          return openSettings();

        case 'not_requested':
          return this.requestSystem();
      }
    });
  };

  private requestSystem = (): Promise<void> => {
    return requestNotifications(this.requestOptions).then(() => {
      return this.getStatus().then(result => {
        if (result !== 'granted') {
          throw new Error('User did not grant permission');
        }
      });
    });
  };

  private getStatus = (): Promise<IPermissionRequestStatus> => {
    return checkNotifications().then(result => {
      switch (result.status) {
        case RESULTS.DENIED: return 'not_requested';

        case RESULTS.LIMITED:

        case RESULTS.GRANTED: return 'granted';

        default: return 'denied';
      }
    });
  };

}
