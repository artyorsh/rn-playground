export const MODULE_IDENTIFIER: string = 'PushNotificationService';

export interface IPushNotificationService {
  /**
   * Requests notification permission and subscribes for Push Notification events.
   * @returns a resolved promise if subscribed successfully, rejected otherwise
   */
  authorize(): Promise<void>;
}
