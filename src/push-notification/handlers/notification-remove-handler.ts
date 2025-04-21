import { IPushNotification, IPushNotificationHandler } from '../push-notification.service';

interface INotificationRemovePayload {
  sentTime: 0;
  ttl: 0;
  data: {};
}

type INotificationRemoveNotification = IPushNotification<INotificationRemovePayload>;

/**
 * Handles "empty" notifications that arrive on event of notification removal from notification center.
 * Prevents "could not handle notification" logs.
 */
export class NotificationRemoveHandler implements IPushNotificationHandler{

  public getName = (): string => {
    return 'NotificationRemoveHandler';
  };

  public handleForeground = (notification: IPushNotification): boolean => {
    return this.isSupportedNotification(notification);
  };

  public handleBackground = (notification: IPushNotification): boolean => {
    return this.isSupportedNotification(notification);
  };

  public handleOpen = (notification: IPushNotification): boolean => {
    return this.isSupportedNotification(notification);
  };

  private isSupportedNotification = (notification: IPushNotification): notification is INotificationRemoveNotification => {
    return notification.data.sentTime === 0
      || Object.keys(notification.data).length === 0;
  };
}
