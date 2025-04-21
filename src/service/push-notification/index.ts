import { AppModule } from '@di/model';
import { ContainerModule } from 'inversify';

import { ILogService } from '@service/log/model';
import { INavigationService } from '@service/navigation/model';
import { IPermissionService } from '@service/permission/model';

import { NavigationNotificationHandler } from './handlers/navigation-notification-handler';
import { NotificationRemoveHandler } from './handlers/notification-remove-handler';
import { IPushNotificationService } from './model';
import { IPushNotificationHandler, IPushServiceProvider, PushNotificationService } from './push-notification.service';
import { RNFBPushServiceProvider } from './rnfb-push-service-provider';

export const PushNotificationModule = new ContainerModule(bind => {
  bind<IPushNotificationService>(AppModule.PUSH_NOTIFICATION).toDynamicValue(context => {
    const navigationService: INavigationService = context.container.get(AppModule.NAVIGATION);
    const permissionService: IPermissionService = context.container.get(AppModule.PERMISSION);
    const logService: ILogService = context.container.get(AppModule.LOG);

    const pushServiceProvider: IPushServiceProvider = new RNFBPushServiceProvider({
      initialNotificationPollInterval: 1000,
      shouldHandleInitialNotification: () => true,
    });

    const handlers: IPushNotificationHandler[] = [
      new NavigationNotificationHandler(navigationService),
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
