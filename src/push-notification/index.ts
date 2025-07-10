import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@/di/model';
import { ILogService } from '@/log';
import { IRouter } from '@/router';

import { NavigationNotificationHandler } from './handlers/navigation-notification-handler';
import { NotificationRemoveHandler } from './handlers/notification-remove-handler';
import { IPushNotificationHandler, IPushPermissionController, IPushServiceProvider, PushNotificationService } from './push-notification.service';
import { RNFBPushPermissionController } from './rnfb/rnfb-push-permission-controller';
import { RNFBPushServiceProvider } from './rnfb/rnfb-push-service-provider';

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
  const logService: ILogService = context.container.get(AppModule.LOG);

  const pushServiceProvider: IPushServiceProvider = new RNFBPushServiceProvider({
    initialNotificationPollInterval: 1000,
    shouldHandleInitialNotification: () => true,
  });

  const pushPermissionController: IPushPermissionController = new RNFBPushPermissionController({
    alert: true,
    badge: true,
    sound: true,
  });

  const handlers: IPushNotificationHandler[] = [
    new NavigationNotificationHandler(router),
    new NotificationRemoveHandler(),
  ];

  return new PushNotificationService(
    pushServiceProvider,
    pushPermissionController,
    handlers,
    logService,
  );
};
