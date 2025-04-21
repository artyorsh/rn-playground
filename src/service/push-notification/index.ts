import { ContainerModule } from 'inversify';

import { LogServiceId } from '@service/log';
import { ILogService } from '@service/log/model';
import { NavigationServiceId } from '@service/navigation';
import { INavigationService } from '@service/navigation/model';
import { PermissionServiceId } from '@service/permission';
import { IPermissionService } from '@service/permission/model';

import { NavigationNotificationHandler } from './handlers/navigation-notification-handler';
import { NotificationRemoveHandler } from './handlers/notification-remove-handler';
import { IPushNotificationService } from './model';
import { IPushNotificationHandler, IPushServiceProvider, PushNotificationService } from './push-notification.service';
import { RNFBPushServiceProvider } from './rnfb-push-service-provider';

export const PushNotificationServiceId: symbol = Symbol.for('PushNotificationService');

export const PushNotificationModule = new ContainerModule(bind => {
  bind<IPushNotificationService>(PushNotificationServiceId).toDynamicValue(context => {
    const navigationService: INavigationService = context.container.get(NavigationServiceId);
    const permissionService: IPermissionService = context.container.get(PermissionServiceId);
    const logService: ILogService = context.container.get(LogServiceId);

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
