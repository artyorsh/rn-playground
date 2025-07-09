import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@/di/model';
import { ILogService } from '@/log';
import { IPermissionService } from '@/permission';
import { IRouter } from '@/router';

import { NavigationNotificationHandler } from './handlers/navigation-notification-handler';
import { NotificationRemoveHandler } from './handlers/notification-remove-handler';
import { IPushNotificationHandler, IPushServiceProvider, PushNotificationService } from './push-notification.service';

export interface IPushNotificationService {
  /**
   * Requests notification permission and subscribes for Push Notification events.
   * @returns a resolved promise if subscribed successfully, rejected otherwise
   */
  authorize(): Promise<void>;
}

export const PushNotificationModule = new ContainerModule(bind => {
  bind<IPushNotificationService>(AppModule.PUSH_NOTIFICATION)
    .toDynamicValue(context => createPushNotificationService(context))
    .inSingletonScope();
});

const createPushNotificationService = (context: interfaces.Context): IPushNotificationService => {
  const router: IRouter = context.container.get(AppModule.ROUTER);
  const permissionService: IPermissionService = context.container.get(AppModule.PERMISSION);
  const logService: ILogService = context.container.get(AppModule.LOG);

  const pushServiceProvider: IPushServiceProvider = {
    subscribe: (): void => {/** no-op */},
    getToken: (): Promise<{ fcm: string | null; apns: string | null }> => {
      return Promise.resolve({ fcm: null, apns: null });
    },
  };

  const handlers: IPushNotificationHandler[] = [
    new NavigationNotificationHandler(router),
    new NotificationRemoveHandler(),
  ];

  return new PushNotificationService(
    pushServiceProvider,
    handlers,
    permissionService,
    logService,
  );
};
