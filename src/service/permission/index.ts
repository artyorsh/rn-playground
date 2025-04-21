import { ContainerModule } from 'inversify';

import { LogServiceId } from '@service/log';
import { ILogService } from '@service/log/model';

import { NotificationPermissionController } from './controller/notification-permission-controller';
import { IPermissionService } from './model';
import { PermissionService } from './permission.service';

export const PermissionServiceId: symbol = Symbol.for('PermissionService');

export const PermissionModule = new ContainerModule(bind => {
  bind<IPermissionService>(PermissionServiceId).toDynamicValue(context => {
    const logService: ILogService = context.container.get(LogServiceId);

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
