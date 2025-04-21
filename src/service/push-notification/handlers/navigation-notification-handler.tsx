import { INavigationService, IRoute } from '@service/navigation/model';

import { IPushNotification, IPushNotificationHandler } from '../push-notification.service';

interface INavigationNotificationPayload {
  type: 'navigation';
  route: string;
}

type INavigationNotification = IPushNotification<INavigationNotificationPayload>;

export class NavigationNotificationHandler implements IPushNotificationHandler {

  constructor(private navigationService: INavigationService) {
  }

  public getName = (): string => {
    return 'NavigationNotificationHandler';
  };

  /**
   * no-op: the notification is handled by system, presenting it in notification center
   * @returns true if {notification.data.type} is 'navigation'
   */
  public handleForeground(notification: IPushNotification): boolean {
    return this.isSupportedNotification(notification);
  }

  /**
   * no-op: the notification is handled by system, presenting it in notification center
   * @returns true if {notification.data.type} is 'navigation'
   */
  public handleBackground(notification: IPushNotification): boolean {
    return this.isSupportedNotification(notification);
  }

  /**
   * Navigates to the route specified in {notification.data.route}
   */
  public handleOpen(notification: IPushNotification): boolean {
    if (!this.isSupportedNotification(notification)) {
      return false;
    }

    const { route, ...params } = notification.data;

    this.navigationService.navigate(route as IRoute, params);

    return true;
  }

  private isSupportedNotification(notification: IPushNotification): notification is INavigationNotification {
    if (!notification.data) {
      return false;
    }

    return notification.data.type === 'navigation' && !!notification.data.route;
  }
}
