// import '@react-native-firebase/messaging';
// import { getApp } from '@react-native-firebase/app';
// import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

import { IPushNotification, IPushNotificationHandler, IPushNotificationToken, IPushServiceProvider } from './push-notification.service';

interface RNFBPushServiceProviderOptions {
  /**
   * Interval to poll shouldHandleInitialNotification() until it returns true to invoke handleOpen() with initial notification.
   */
  initialNotificationPollInterval: number;
  /**
   * RNFB provides initial notification through messaging().getInitialNotification() function.
   * This function is not convenient to use, so we poll shouldHandleInitialNotification() until it returns true to invoke handleOpen() on all subscribers.
   */
  shouldHandleInitialNotification(): boolean;
}

export class RNFBPushServiceProvider implements IPushServiceProvider {

  private subscribers: IPushNotificationHandler[] = [];
  private initialNotificationHandleTimeout: NodeJS.Timeout | null = null;

  private get rnfb(): FirebaseMessagingTypes.Module {
    return getApp().messaging();
  }

  constructor(private options: RNFBPushServiceProviderOptions) {
    this.rnfb.onMessage(m => {
      const notification: IPushNotification = this.createPushNotification(m);
      this.subscribers.forEach(h => h.handleForeground(notification));
    });

    this.rnfb.setBackgroundMessageHandler(async m => {
      const notification: IPushNotification = this.createPushNotification(m);
      this.subscribers.forEach(h => h.handleBackground(notification));
    });

    this.rnfb.onNotificationOpenedApp(m => {
      const notification: IPushNotification = this.createPushNotification(m);
      this.subscribers.forEach(h => h.handleOpen(notification));
    });

    this.rnfb.getInitialNotification().then((message: FirebaseMessagingTypes.RemoteMessage | null) => {
      if (!message) {
        return;
      }

      const notification: IPushNotification = this.createPushNotification(message);
      this.attemptHandleInitialNotification(notification);
    });
  }

  public subscribe(handler: IPushNotificationHandler): void {
    this.subscribers.push(handler);
  }

  public getToken = (): Promise<IPushNotificationToken> => {
    return this.rnfb.getAPNSToken()
      .then(apns => this.rnfb.getToken()
        .then(fcm => ({ fcm, apns })));
  };

  private attemptHandleInitialNotification = (message: IPushNotification): void => {
    if (this.options.shouldHandleInitialNotification()) {
      this.subscribers.forEach(h => h.handleOpen(message as IPushNotification));
      this.initialNotificationHandleTimeout && clearTimeout(this.initialNotificationHandleTimeout);
    } else {
      this.initialNotificationHandleTimeout = setTimeout(() => {
        this.attemptHandleInitialNotification(message);
      }, this.options.initialNotificationPollInterval);
    }
  };

  private createPushNotification = (message: FirebaseMessagingTypes.RemoteMessage): IPushNotification => {
    return {
      id: message.messageId || '',
      title: message.notification?.title || '',
      body: message.notification?.body || '',
      data: message.data || {},
    };
  };
}
