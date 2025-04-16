import { ContainerModule } from 'inversify';

import { ILogService } from '@service/log/model';

import { NotificationPermissionController } from './controller/notification-permission-controller';
import { IPermissionService } from './model';
import { PermissionService } from './permission.service';

export const PermissionModule = new ContainerModule(bind => {
  bind<IPermissionService>('permission').toDynamicValue(context => {
    const logService: ILogService = context.container.get('log');

    const notificationPermissionController = new NotificationPermissionController([
      'alert',
      'badge',
      'sound',
    ]);

    return new PermissionService(logService, {
      notification: notificationPermissionController,
    });
  }).inSingletonScope();
});
