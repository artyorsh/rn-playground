import { ContainerModule } from 'inversify';

import { ILogService } from '@service/log/model';
import { NavigationServiceId } from '@service/navigation';
import { INavigationService } from '@service/navigation/model';
import { IPermissionService } from '@service/permission/model';

import { NavigationNotificationHandler } from './handlers/navigation-notification-handler';
import { NotificationRemoveHandler } from './handlers/notification-remove-handler';
import { IPushNotificationService } from './model';
import { IPushNotificationHandler, IPushServiceProvider, PushNotificationService } from './push-notification.service';
import { RNFBPushServiceProvider } from './rnfb-push-service-provider';

export const PushNotificationModule = new ContainerModule(bind => {
  bind<IPushNotificationService>('push_notification').toDynamicValue(context => {
    const navigationService: INavigationService = context.container.get(NavigationServiceId);
    const permissionService: IPermissionService = context.container.get('permission');
    const logService: ILogService = context.container.get('log');

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
