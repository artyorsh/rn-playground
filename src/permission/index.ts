import { ContainerModule } from 'inversify';

import { AppModule } from '@/di/model';
import { ILogService } from '@/log';

import { NotificationPermissionController } from './controller/notification-permission-controller';
import { IPermissionService } from './model';
import { PermissionService } from './permission.service';

export const PermissionModule = new ContainerModule(bind => {
  bind<IPermissionService>(AppModule.PERMISSION).toDynamicValue(context => {
    const logService: ILogService = context.container.get(AppModule.LOG);

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
