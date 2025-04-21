import { ContainerModule } from 'inversify';

import { AppModule } from '@/di/model';
import { ILogService } from '@/log';
import { IPermissionService } from '@/permission';
import { IRouter } from '@/router/model';

import { NavigationNotificationHandler } from './handlers/navigation-notification-handler';
import { NotificationRemoveHandler } from './handlers/notification-remove-handler';
import { IPushNotificationService } from './model';
import { IPushNotificationHandler, IPushServiceProvider, PushNotificationService } from './push-notification.service';
import { RNFBPushServiceProvider } from './rnfb-push-service-provider';

export const PushNotificationModule = new ContainerModule(bind => {
  bind<IPushNotificationService>(AppModule.PUSH_NOTIFICATION).toDynamicValue(context => {
    const router: IRouter = context.container.get(AppModule.ROUTER);
    const permissionService: IPermissionService = context.container.get(AppModule.PERMISSION);
    const logService: ILogService = context.container.get(AppModule.LOG);

    const pushServiceProvider: IPushServiceProvider = new RNFBPushServiceProvider({
      initialNotificationPollInterval: 1000,
      shouldHandleInitialNotification: () => true,
    });

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
  }).inSingletonScope();
});
